import { MetadataRoute } from 'next'

export const dynamic = 'force-static';
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gwendall',
    short_name: 'Gwendall',
    description: 'Builder & founder exploring embodied agents, spatial systems, and autonomous behavior.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#fafafa',
    icons: [
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

