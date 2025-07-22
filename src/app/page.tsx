import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import Home from '@/pages/Home';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Lumenalta delivers innovative digital solutions including custom development, cloud solutions, data analytics, and mobile applications. Transform your business with our expertise.',
  keywords: ['digital solutions', 'custom development', 'cloud solutions', 'data analytics', 'mobile development', 'UI/UX design', 'system integration', 'business transformation'],
  openGraph: {
    title: 'Lumenalta - Innovative Digital Solutions',
    description: 'Transform your business with our comprehensive digital solutions. Custom development, cloud solutions, data analytics, and mobile applications.',
    url: 'https://lumenalta.com',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumenalta - Innovative Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumenalta - Innovative Digital Solutions',
    description: 'Transform your business with our comprehensive digital solutions.',
    images: ['/og-home.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
} 