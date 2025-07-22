import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import Services from '@/pages/Services';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore Lumenalta\'s comprehensive digital services including custom development, cloud solutions, data analytics, mobile development, UI/UX design, and system integration.',
  keywords: ['digital services', 'custom development', 'cloud solutions', 'data analytics', 'mobile development', 'UI/UX design', 'system integration', 'web development', 'app development'],
  openGraph: {
    title: 'Lumenalta Services - Comprehensive Digital Solutions',
    description: 'Discover our full range of digital services designed to transform your business and drive growth.',
    url: 'https://lumenalta.com/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumenalta Services - Comprehensive Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumenalta Services - Comprehensive Digital Solutions',
    description: 'Discover our full range of digital services designed to transform your business.',
    images: ['/og-services.jpg'],
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <Layout>
      <Services />
    </Layout>
  );
} 