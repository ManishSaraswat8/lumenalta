import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { DollarSign, TrendingUp, Users, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Equity',
  description: 'Lumenalta delivers digital transformation solutions for private equity firms and portfolio companies.',
  keywords: ['private equity', 'portfolio companies', 'digital transformation', 'investment technology', 'PE solutions'],
  openGraph: {
    title: 'Private Equity Solutions - Lumenalta',
    description: 'Digital transformation solutions for private equity firms.',
    url: 'https://lumenalta.com/industries/private-equity',
    images: [
      {
        url: '/og-private-equity.jpg',
        width: 1200,
        height: 630,
        alt: 'Private Equity Solutions - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Equity Solutions - Lumenalta',
    description: 'Digital transformation solutions for private equity firms.',
    images: ['/og-private-equity.jpg'],
  },
  alternates: {
    canonical: '/industries/private-equity',
  },
}

export default function PrivateEquityPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Private Equity
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Digital transformation solutions for private equity firms and portfolio companies
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Private Equity Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Accelerating value creation through digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Portfolio Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Digital solutions to optimize portfolio company performance and value.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Value Creation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Technology-driven strategies to accelerate growth and profitability.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Due Diligence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Technology assessment and digital readiness evaluation for investments.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Performance Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced analytics and reporting for portfolio performance monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Value Creation?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how digital transformation can enhance your portfolio performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 