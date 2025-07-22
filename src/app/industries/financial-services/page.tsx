import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { DollarSign, Shield, TrendingUp, Users, Lock, BarChart3, Zap, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Financial Services',
  description: 'Lumenalta delivers innovative digital solutions for financial institutions, including banking, insurance, and fintech companies.',
  keywords: ['financial services', 'banking', 'insurance', 'fintech', 'digital banking', 'financial technology', 'regulatory compliance'],
  openGraph: {
    title: 'Financial Services Solutions - Lumenalta',
    description: 'Innovative digital solutions for financial institutions and fintech companies.',
    url: 'https://lumenalta.com/industries/financial-services',
    images: [
      {
        url: '/og-financial-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Financial Services Solutions - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Services Solutions - Lumenalta',
    description: 'Innovative digital solutions for financial institutions.',
    images: ['/og-financial-services.jpg'],
  },
  alternates: {
    canonical: '/industries/financial-services',
  },
}

export default function FinancialServicesPage() {
  const solutions = [
    {
      icon: DollarSign,
      title: 'Digital Banking',
      description: 'Modern banking platforms with mobile-first design and real-time capabilities.'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with financial regulations and data protection requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Risk Management',
      description: 'Advanced risk assessment and management systems using AI and analytics.'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Personalized financial services and seamless customer journeys.'
    }
  ];

  const challenges = [
    {
      title: 'Digital Transformation',
      description: 'Modernize legacy systems and embrace digital-first approaches.'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect sensitive financial data and prevent cyber threats.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Navigate complex financial regulations and reporting requirements.'
    },
    {
      title: 'Customer Expectations',
      description: 'Meet evolving customer demands for digital and personalized services.'
    }
  ];

  const technologies = [
    'Blockchain', 'AI/ML', 'Cloud Computing', 'API Banking', 'Open Banking',
    'RegTech', 'Cybersecurity', 'Data Analytics', 'Mobile Banking', 'Digital Identity'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financial Services
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                Innovative digital solutions for banks, insurance companies, and fintech organizations
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Financial Services Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tailored solutions to address the unique challenges of the financial industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Industry Challenges We Solve
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Addressing the key challenges facing financial institutions today
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Financial Technologies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies powering the future of financial services
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-gray-900 dark:text-white font-medium text-sm">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Financial Services?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our solutions can help you stay ahead in the digital financial landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 