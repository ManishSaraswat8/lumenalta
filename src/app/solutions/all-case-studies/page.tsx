import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Award, TrendingUp, Users, Globe, Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Case Studies',
  description: 'Explore Lumenalta\'s comprehensive portfolio of successful digital transformation case studies across industries.',
  keywords: ['case studies', 'success stories', 'digital transformation', 'client projects', 'portfolio'],
  openGraph: {
    title: 'All Case Studies - Lumenalta',
    description: 'Explore our comprehensive portfolio of successful digital transformation case studies.',
    url: 'https://lumenalta.com/solutions/all-case-studies',
    images: [
      {
        url: '/og-all-case-studies.jpg',
        width: 1200,
        height: 630,
        alt: 'All Case Studies - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Case Studies - Lumenalta',
    description: 'Explore our comprehensive portfolio of successful case studies.',
    images: ['/og-all-case-studies.jpg'],
  },
  alternates: {
    canonical: '/solutions/all-case-studies',
  },
}

export default function AllCaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Digital Banking Transformation',
      industry: 'Financial Services',
      description: 'Modernized legacy banking systems for a leading financial institution, improving customer experience and operational efficiency.',
      results: ['40% reduction in transaction time', '99.9% uptime achieved', '50% cost savings'],
      image: '/case-study-banking.jpg'
    },
    {
      title: 'Healthcare Platform Modernization',
      industry: 'Healthcare',
      description: 'Developed a comprehensive patient management system that streamlined operations and improved patient care.',
      results: ['30% faster patient processing', 'Improved data accuracy', 'Enhanced security compliance'],
      image: '/case-study-healthcare.jpg'
    },
    {
      title: 'E-commerce Platform Development',
      industry: 'Consumer',
      description: 'Built a scalable e-commerce platform that increased sales and provided seamless customer experiences.',
      results: ['200% increase in online sales', 'Improved mobile conversion', 'Enhanced user experience'],
      image: '/case-study-ecommerce.jpg'
    },
    {
      title: 'AI-Powered Analytics Solution',
      industry: 'Technology',
      description: 'Implemented advanced AI and machine learning solutions for predictive analytics and business intelligence.',
      results: ['60% improvement in forecasting accuracy', 'Real-time insights', 'Automated decision making'],
      image: '/case-study-ai.jpg'
    },
    {
      title: 'Cloud Migration Success',
      industry: 'Technology',
      description: 'Successfully migrated enterprise applications to cloud infrastructure, improving scalability and reducing costs.',
      results: ['45% reduction in infrastructure costs', 'Improved scalability', 'Enhanced disaster recovery'],
      image: '/case-study-cloud.jpg'
    },
    {
      title: 'Supply Chain Optimization',
      industry: 'Transportation & Logistics',
      description: 'Optimized supply chain operations using advanced analytics and automation technologies.',
      results: ['25% reduction in delivery times', 'Improved inventory management', 'Enhanced tracking capabilities'],
      image: '/case-study-logistics.jpg'
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
                All Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Explore our comprehensive portfolio of successful digital transformation projects
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Success Stories
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real results from real projects across diverse industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Award className="w-12 h-12 mx-auto mb-2" />
                      <span className="text-sm font-medium">{study.industry}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {study.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <Star className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Impact by the Numbers
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Quantifying the success of our digital transformation projects
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-300">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$2B+</div>
                <div className="text-gray-600 dark:text-gray-300">Value Delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your organization
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