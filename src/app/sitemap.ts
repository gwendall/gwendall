import { MetadataRoute } from 'next'
import NOTES from '@/data/notes'
import { SITE_URL } from '@/data/constants'

export const dynamic = 'force-static';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const notePages = NOTES.filter(n => !n.hidden).map(note => ({
    url: `${SITE_URL}/notes/${note.slug}`,
    lastModified: note.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/talks`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/mentions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/notes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...notePages,
  ]
}

