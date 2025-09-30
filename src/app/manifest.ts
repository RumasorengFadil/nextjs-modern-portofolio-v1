import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fadil Rumasoreng',
    short_name: 'Rumasoreng',
    description: 'Website resmi Fadil Rumasoreng, berisi portofolio web development, artikel teknologi, dan insight seputar pemrograman. Temukan karya, pengalaman, serta catatan perjalanan dalam dunia coding dan digital kreatif.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icon1.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon2.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-3.png',
        sizes: '512x512',
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
