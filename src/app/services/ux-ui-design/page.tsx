import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Palette, Eye, Smartphone, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UX & UI Design',
  description: 'Lumenalta creates exceptional user experiences and intuitive interfaces that drive engagement and satisfaction.',
  keywords: ['UX design', 'UI design', 'user experience', 'interface design', 'design systems', 'user research'],
  openGraph: {
    title: 'UX & UI Design - Lumenalta',
    description: 'Exceptional user experiences and intuitive interfaces.',
    url: 'https://lumenalta.com/services/ux-ui-design',
    images: [
      {
        url: '/og-ux-ui-design.jpg',
        width: 1200,
        height: 630,
        alt: 'UX & UI Design - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UX & UI Design - Lumenalta',
    description: 'Exceptional user experiences and intuitive interfaces.',
    images: ['/og-ux-ui-design.jpg'],
  },
  alternates: {
    canonical: '/services/ux-ui-design',
  },
}

export default function UXUIDesignPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                UX & UI Design
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Creating exceptional user experiences and intuitive interfaces that drive engagement and satisfaction
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Design Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                User-centered design solutions that create meaningful experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  UI Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Beautiful and functional interface designs that enhance user interaction.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  UX Research
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  User research and testing to understand needs and optimize experiences.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Mobile Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Responsive and mobile-first design solutions for all devices.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Design Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Scalable design systems for consistent and maintainable interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Exceptional Experiences?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our design expertise can transform your user experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 