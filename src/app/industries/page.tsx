import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import Industries from '@/pages/Industries';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Lumenalta serves diverse industries with specialized digital solutions. From healthcare to finance, retail to manufacturing, we deliver tailored technology solutions.',
  keywords: ['industry solutions', 'healthcare technology', 'financial services', 'retail solutions', 'manufacturing technology', 'education technology', 'real estate technology'],
  openGraph: {
    title: 'Lumenalta Industries - Specialized Solutions by Industry',
    description: 'Discover how we serve diverse industries with specialized digital solutions tailored to your sector.',
    url: 'https://lumenalta.com/industries',
    images: [
      {
        url: '/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumenalta Industries - Specialized Solutions by Industry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumenalta Industries - Specialized Solutions by Industry',
    description: 'Discover how we serve diverse industries with specialized digital solutions.',
    images: ['/og-industries.jpg'],
  },
  alternates: {
    canonical: '/industries',
  },
}

export default function IndustriesPage() {
  return (
    <Layout>
      <Industries />
    </Layout>
  );
} 