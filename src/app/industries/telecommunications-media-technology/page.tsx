import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Wifi, Tv, Smartphone, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Telecommunications, Media & Technology',
  description: 'Lumenalta delivers innovative digital solutions for telecommunications, media, and technology companies.',
  keywords: ['telecommunications', 'media', 'technology', 'TMT', 'digital media', 'telecom solutions'],
  openGraph: {
    title: 'Telecommunications, Media & Technology Solutions - Lumenalta',
    description: 'Innovative digital solutions for TMT companies.',
    url: 'https://lumenalta.com/industries/telecommunications-media-technology',
    images: [
      {
        url: '/og-telecommunications.jpg',
        width: 1200,
        height: 630,
        alt: 'Telecommunications, Media & Technology Solutions - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telecommunications, Media & Technology Solutions - Lumenalta',
    description: 'Innovative digital solutions for TMT companies.',
    images: ['/og-telecommunications.jpg'],
  },
  alternates: {
    canonical: '/industries/telecommunications-media-technology',
  },
}

export default function TelecommunicationsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Telecommunications, Media & Technology
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Innovative digital solutions for telecommunications, media, and technology companies
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our TMT Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Digital transformation solutions for the telecommunications, media, and technology sector
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Telecom Infrastructure
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Modernize telecom infrastructure and network management systems.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Tv className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Digital Media Platforms
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Next-generation media platforms and content delivery systems.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Mobile Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced mobile applications and connectivity solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Cloud Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Scalable cloud solutions for TMT companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your TMT Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our solutions can accelerate your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 