import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import Careers from '@/pages/Careers';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Lumenalta\'s dynamic team of innovators. Explore exciting career opportunities in technology, design, and digital solutions. Grow your career with us.',
  keywords: ['careers', 'job opportunities', 'technology jobs', 'digital solutions careers', 'work at Lumenalta', 'tech careers', 'remote jobs'],
  openGraph: {
    title: 'Lumenalta Careers - Join Our Team',
    description: 'Explore exciting career opportunities and join our dynamic team of innovators.',
    url: 'https://lumenalta.com/careers',
    images: [
      {
        url: '/og-careers.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumenalta Careers - Join Our Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumenalta Careers - Join Our Team',
    description: 'Explore exciting career opportunities and join our dynamic team.',
    images: ['/og-careers.jpg'],
  },
  alternates: {
    canonical: '/careers',
  },
}

export default function CareersPage() {
  return (
    <Layout>
      <Careers />
    </Layout>
  );
} 