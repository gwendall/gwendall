import { MetadataRoute } from 'next'
import NOTES from '@/data/notes'

export const dynamic = 'force-static';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const notePages = NOTES.filter(n => !n.hidden).map(note => ({
    url: `https://gwendall.com/notes/${note.slug}`,
    lastModified: note.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://gwendall.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://gwendall.com/works',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://gwendall.com/talks',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://gwendall.com/mentions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://gwendall.com/notes',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...notePages,
  ]
}

