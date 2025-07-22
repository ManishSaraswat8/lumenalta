import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import About from '@/pages/About';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Lumenalta\'s mission, values, and team. We are passionate about delivering innovative digital solutions that drive business growth and transformation.',
  keywords: ['about Lumenalta', 'company mission', 'team expertise', 'digital innovation', 'business solutions', 'technology consulting'],
  openGraph: {
    title: 'About Lumenalta - Our Mission & Values',
    description: 'Discover our mission, values, and the team behind Lumenalta\'s innovative digital solutions.',
    url: 'https://lumenalta.com/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Lumenalta - Our Mission & Values',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Lumenalta - Our Mission & Values',
    description: 'Discover our mission, values, and the team behind Lumenalta\'s innovative digital solutions.',
    images: ['/og-about.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <Layout>
      <About />
    </Layout>
  );
} 