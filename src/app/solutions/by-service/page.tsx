import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Brain, Cloud, Database, Code, Target, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies by Service',
  description: 'Explore Lumenalta\'s case studies organized by service type - from AI/ML to cloud infrastructure and beyond.',
  keywords: ['case studies by service', 'AI case studies', 'cloud case studies', 'data case studies', 'development case studies'],
  openGraph: {
    title: 'Case Studies by Service - Lumenalta',
    description: 'Explore our case studies organized by service type.',
    url: 'https://lumenalta.com/solutions/by-service',
    images: [
      {
        url: '/og-by-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Case Studies by Service - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies by Service - Lumenalta',
    description: 'Explore our case studies organized by service type.',
    images: ['/og-by-service.jpg'],
  },
  alternates: {
    canonical: '/solutions/by-service',
  },
}

export default function ByServicePage() {
  const services = [
    {
      icon: Brain,
      title: 'AI, ML & LLM',
      description: 'Artificial intelligence, machine learning, and large language model implementations.',
      caseStudies: 8,
      color: 'from-blue-500 to-indigo-600',
      examples: ['Predictive Analytics', 'Chatbot Development', 'Computer Vision']
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Cloud migration, infrastructure modernization, and DevOps solutions.',
      caseStudies: 12,
      color: 'from-green-500 to-emerald-600',
      examples: ['AWS Migration', 'Kubernetes Deployment', 'CI/CD Implementation']
    },
    {
      icon: Database,
      title: 'Data Modernization',
      description: 'Data platform modernization, analytics, and governance solutions.',
      caseStudies: 10,
      color: 'from-purple-500 to-violet-600',
      examples: ['Data Warehouse', 'Real-time Analytics', 'Data Governance']
    },
    {
      icon: Code,
      title: 'Platform & Application Development',
      description: 'Custom application development and platform solutions.',
      caseStudies: 15,
      color: 'from-orange-500 to-red-600',
      examples: ['Web Applications', 'Mobile Apps', 'API Development']
    },
    {
      icon: Target,
      title: 'Tech Strategy & Advisory',
      description: 'Technology strategy consulting and digital transformation advisory.',
      caseStudies: 6,
      color: 'from-indigo-500 to-purple-600',
      examples: ['Digital Roadmap', 'Technology Assessment', 'Transformation Strategy']
    },
    {
      icon: Palette,
      title: 'UX & UI Design',
      description: 'User experience design and interface development.',
      caseStudies: 9,
      color: 'from-pink-500 to-rose-600',
      examples: ['User Research', 'Interface Design', 'Design Systems']
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
                Case Studies by Service
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Explore our success stories organized by service type and expertise
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Browse by Service Type
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how our specialized services have delivered results across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {service.caseStudies} case studies
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

        {/* Featured Service Case Study */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Service Case Study
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A deep dive into our AI/ML implementation success
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-blue-600 font-medium text-sm">AI, ML & LLM</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                    AI-Powered Predictive Analytics
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    How we implemented advanced machine learning algorithms for a retail client, resulting in 60% improvement in forecasting accuracy and automated decision-making processes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">60%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Forecasting Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Automated Insights</div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Read Full Case Study
                  </button>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Brain className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-lg font-medium">AI & Machine Learning</span>
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
              Ready to See Results with Our Services?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our specialized services can deliver results for your organization
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