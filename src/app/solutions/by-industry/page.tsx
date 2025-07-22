import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Building, Heart, ShoppingBag, DollarSign, Wifi, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies by Industry',
  description: 'Explore Lumenalta\'s case studies organized by industry - from financial services to healthcare and beyond.',
  keywords: ['case studies by industry', 'financial services case studies', 'healthcare case studies', 'consumer case studies'],
  openGraph: {
    title: 'Case Studies by Industry - Lumenalta',
    description: 'Explore our case studies organized by industry.',
    url: 'https://lumenalta.com/solutions/by-industry',
    images: [
      {
        url: '/og-by-industry.jpg',
        width: 1200,
        height: 630,
        alt: 'Case Studies by Industry - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies by Industry - Lumenalta',
    description: 'Explore our case studies organized by industry.',
    images: ['/og-by-industry.jpg'],
  },
  alternates: {
    canonical: '/solutions/by-industry',
  },
}

export default function ByIndustryPage() {
  const industries = [
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Digital transformation solutions for banks, insurance, and fintech companies.',
      caseStudies: 12,
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Innovative solutions for hospitals, clinics, and healthcare providers.',
      caseStudies: 8,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: ShoppingBag,
      title: 'Consumer',
      description: 'E-commerce and retail solutions for consumer-facing businesses.',
      caseStudies: 15,
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Building,
      title: 'Private Equity',
      description: 'Portfolio optimization and value creation for PE firms.',
      caseStudies: 6,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Wifi,
      title: 'Telecommunications',
      description: 'Network modernization and digital media solutions.',
      caseStudies: 10,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Supply chain optimization and fleet management solutions.',
      caseStudies: 7,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Case Studies by Industry
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Explore our success stories organized by industry vertical
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Browse by Industry
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how we&apos;ve helped organizations in your industry achieve digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className={`h-32 bg-gradient-to-r ${industry.color} flex items-center justify-center`}>
                    <industry.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {industry.caseStudies} case studies
                      </span>
                      <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                        View All →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Case Study
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A deep dive into one of our most impactful projects
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-purple-600 font-medium text-sm">Financial Services</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                    Digital Banking Transformation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    How we helped a leading bank modernize their legacy systems, resulting in 40% faster transactions and 50% cost savings while maintaining 99.9% uptime.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">40%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Faster Transactions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">50%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Cost Savings</div>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Read Full Case Study
                  </button>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-white text-center">
                    <DollarSign className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-lg font-medium">Digital Banking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to See Results in Your Industry?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar success in your industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 