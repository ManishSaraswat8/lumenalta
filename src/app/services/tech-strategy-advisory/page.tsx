import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Target, Users, TrendingUp, Shield, Globe, Zap, Settings, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tech Strategy & Advisory',
  description: 'Lumenalta provides strategic technology consulting to help organizations align technology with business objectives and drive digital transformation.',
  keywords: ['technology strategy', 'digital transformation', 'IT consulting', 'technology advisory', 'digital strategy', 'tech consulting'],
  openGraph: {
    title: 'Tech Strategy & Advisory - Lumenalta',
    description: 'Strategic technology consulting to align technology with business objectives.',
    url: 'https://lumenalta.com/services/tech-strategy-advisory',
    images: [
      {
        url: '/og-tech-strategy.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Strategy & Advisory - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Strategy & Advisory - Lumenalta',
    description: 'Strategic technology consulting for digital transformation.',
    images: ['/og-tech-strategy.jpg'],
  },
  alternates: {
    canonical: '/services/tech-strategy-advisory',
  },
}

export default function TechStrategyPage() {
  const services = [
    {
      icon: Target,
      title: 'Technology Strategy',
      description: 'Develop comprehensive technology roadmaps aligned with business goals.'
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Guide organizations through complete digital transformation journeys.'
    },
    {
      icon: TrendingUp,
      title: 'Technology Assessment',
      description: 'Evaluate current technology landscape and identify improvement opportunities.'
    },
    {
      icon: Shield,
      title: 'Technology Governance',
      description: 'Establish technology governance frameworks and best practices.'
    }
  ];

  const benefits = [
    {
      title: 'Strategic Alignment',
      description: 'Ensure technology investments align with business objectives and drive value.'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and mitigate technology risks through strategic planning.'
    },
    {
      title: 'Cost Optimization',
      description: 'Optimize technology spending and improve ROI through strategic guidance.'
    },
    {
      title: 'Competitive Advantage',
      description: 'Gain competitive advantage through innovative technology strategies.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tech Strategy & Advisory
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
                Strategic technology consulting to align technology with business objectives and drive digital transformation
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Advisory Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Strategic guidance to help organizations make informed technology decisions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Benefits of Strategic Advisory
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transform your technology approach with strategic guidance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Strategic Technology Guidance?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how strategic technology consulting can transform your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 