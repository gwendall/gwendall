async function checkPageSpeed(url) {
  const strategies = ['mobile', 'desktop'];
  const apiKey = process.env.PAGESPEED_API_KEY;
  
  if (!apiKey) {
    console.warn('Warning: PAGESPEED_API_KEY not found in environment variables. Quota limits may apply.');
  }

  for (const strategy of strategies) {
    console.log(`\nChecking PageSpeed for ${url} (${strategy})...`);
    
    let apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}`;
    if (apiKey) {
      apiUrl += `&key=${apiKey}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        console.error('Error:', data.error.message);
        continue;
      }

      const lighthouse = data.lighthouseResult;
      const scores = {
        performance: lighthouse.categories.performance.score * 100,
        accessibility: lighthouse.categories.accessibility.score * 100,
        'best-practices': lighthouse.categories['best-practices'].score * 100,
        seo: lighthouse.categories.seo.score * 100,
      };

      console.log('Scores:', scores);
      
      // Output audits that are failing
      const audits = lighthouse.audits;
      console.log('Opportunities & Diagnostics (Performance):');
      
      const relevantAudits = lighthouse.categories.performance.auditRefs
        .filter(ref => ref.weight > 0)
        .map(ref => audits[ref.id])
        .filter(audit => audit.score < 1); // Strict check for < 100%

      if (relevantAudits.length === 0) {
        console.log('- No major performance issues found!');
      }

      for (const audit of relevantAudits) {
         console.log(`- ${audit.title} (${audit.id}): ${audit.displayValue || ''} (Score: ${audit.score})`);
      }
      
      // Check other categories if not 100
      ['accessibility', 'best-practices', 'seo'].forEach(cat => {
          if (scores[cat] < 100) {
              console.log(`\nIssues in ${cat}:`);
              const catAudits = lighthouse.categories[cat].auditRefs
                .filter(ref => ref.weight > 0)
                .map(ref => audits[ref.id])
                .filter(audit => audit.score < 1 && audit.score !== null);
              
              for (const audit of catAudits) {
                 console.log(`- ${audit.title}: ${audit.displayValue || ''} (Score: ${audit.score})`);
              }
          }
      });

    } catch (error) {
      console.error('Failed to fetch PageSpeed data:', error);
    }
  }
}

const url = process.argv[2] || 'https://dalg.ngrok.app/';
checkPageSpeed(url);
