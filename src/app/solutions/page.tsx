import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import Solutions from '@/pages/Solutions';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Discover Lumenalta\'s tailored solutions for various industries. We provide innovative digital solutions that address specific business challenges and drive growth.',
  keywords: ['business solutions', 'industry solutions', 'digital transformation', 'technology solutions', 'enterprise solutions', 'custom solutions'],
  openGraph: {
    title: 'Lumenalta Solutions - Tailored Business Solutions',
    description: 'Discover our tailored solutions designed to address your specific business challenges and drive growth.',
    url: 'https://lumenalta.com/solutions',
    images: [
      {
        url: '/og-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumenalta Solutions - Tailored Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumenalta Solutions - Tailored Business Solutions',
    description: 'Discover our tailored solutions designed to address your specific business challenges.',
    images: ['/og-solutions.jpg'],
  },
  alternates: {
    canonical: '/solutions',
  },
}

export default function SolutionsPage() {
  return (
    <Layout>
      <Solutions />
    </Layout>
  );
} 