import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Database, BarChart3, Zap, Shield, TrendingUp, Users, Globe, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Modernization',
  description: 'Lumenalta transforms your data infrastructure with modern data platforms, analytics, and governance solutions.',
  keywords: ['data modernization', 'data analytics', 'data governance', 'data platform', 'business intelligence', 'data warehouse'],
  openGraph: {
    title: 'Data Modernization - Lumenalta',
    description: 'Transform your data infrastructure with modern platforms and analytics.',
    url: 'https://lumenalta.com/services/data-modernization',
    images: [
      {
        url: '/og-data-modernization.jpg',
        width: 1200,
        height: 630,
        alt: 'Data Modernization - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Modernization - Lumenalta',
    description: 'Transform your data infrastructure with modern platforms.',
    images: ['/og-data-modernization.jpg'],
  },
  alternates: {
    canonical: '/services/data-modernization',
  },
}

export default function DataModernizationPage() {
  const services = [
    {
      icon: Database,
      title: 'Data Platform Modernization',
      description: 'Build scalable, cloud-native data platforms for real-time analytics and insights.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Implement predictive analytics, machine learning, and business intelligence solutions.'
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Establish data quality, security, and compliance frameworks.'
    },
    {
      icon: Zap,
      title: 'Data Integration',
      description: 'Connect disparate data sources and create unified data pipelines.'
    }
  ];

  const benefits = [
    {
      title: 'Real-time Insights',
      description: 'Access real-time data and analytics for faster decision-making.'
    },
    {
      title: 'Data Quality',
      description: 'Improve data accuracy, consistency, and reliability across your organization.'
    },
    {
      title: 'Scalability',
      description: 'Scale your data infrastructure to handle growing data volumes.'
    },
    {
      title: 'Compliance',
      description: 'Ensure data privacy and regulatory compliance with modern governance.'
    }
  ];

  const technologies = [
    'Snowflake', 'Databricks', 'AWS Redshift', 'Azure Synapse', 'Google BigQuery',
    'Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Tableau', 'Power BI', 'Looker'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Data Modernization
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                Transform your data infrastructure with modern platforms, analytics, and governance solutions
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Data Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                End-to-end data transformation services to unlock the full potential of your data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
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
                Benefits of Data Modernization
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of your data with modern infrastructure
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

        {/* Technologies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Leading data platforms and modern analytics tools
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Data Modernization Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven approach to successful data transformation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Assessment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Evaluate current data landscape and identify modernization opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Design modern data architecture and platform strategy
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Build and deploy modern data platforms and pipelines
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimize performance and enable advanced analytics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Modernize Your Data?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how data modernization can transform your business insights
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