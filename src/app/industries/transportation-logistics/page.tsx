import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Truck, MapPin, Package, Route } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transportation & Logistics',
  description: 'Lumenalta delivers innovative digital solutions for transportation and logistics companies.',
  keywords: ['transportation', 'logistics', 'supply chain', 'fleet management', 'logistics technology'],
  openGraph: {
    title: 'Transportation & Logistics Solutions - Lumenalta',
    description: 'Innovative digital solutions for transportation and logistics companies.',
    url: 'https://lumenalta.com/industries/transportation-logistics',
    images: [
      {
        url: '/og-transportation.jpg',
        width: 1200,
        height: 630,
        alt: 'Transportation & Logistics Solutions - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transportation & Logistics Solutions - Lumenalta',
    description: 'Innovative digital solutions for transportation and logistics companies.',
    images: ['/og-transportation.jpg'],
  },
  alternates: {
    canonical: '/industries/transportation-logistics',
  },
}

export default function TransportationLogisticsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transportation & Logistics
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
                Innovative digital solutions for transportation and logistics companies
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Transportation & Logistics Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Digital transformation solutions for the transportation and logistics sector
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Fleet Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced fleet management and tracking solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Supply Chain Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimize supply chain operations and visibility.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Last-Mile Delivery
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Efficient last-mile delivery and customer experience solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <Route className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Route Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI-powered route optimization and planning systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our solutions can streamline your transportation and logistics operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 