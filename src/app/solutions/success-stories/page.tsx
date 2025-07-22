import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Trophy, TrendingUp, Users, Star, Quote, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'Discover Lumenalta\'s most impactful success stories and client transformations across industries.',
  keywords: ['success stories', 'client success', 'digital transformation success', 'case study results'],
  openGraph: {
    title: 'Success Stories - Lumenalta',
    description: 'Discover our most impactful success stories and client transformations.',
    url: 'https://lumenalta.com/solutions/success-stories',
    images: [
      {
        url: '/og-success-stories.jpg',
        width: 1200,
        height: 630,
        alt: 'Success Stories - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories - Lumenalta',
    description: 'Discover our most impactful success stories.',
    images: ['/og-success-stories.jpg'],
  },
  alternates: {
    canonical: '/solutions/success-stories',
  },
}

export default function SuccessStoriesPage() {
  const successStories = [
    {
      title: 'Fortune 500 Bank Digital Transformation',
      client: 'Leading Financial Institution',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing slow transactions and poor customer experience',
      solution: 'Complete digital banking platform modernization with cloud migration',
      results: {
        transactionTime: '40% faster',
        uptime: '99.9%',
        costSavings: '$50M annually',
        customerSatisfaction: '85% improvement'
      },
      testimonial: '"Lumenalta transformed our entire digital infrastructure, enabling us to serve customers better and operate more efficiently."',
      author: 'CTO, Fortune 500 Bank'
    },
    {
      title: 'Healthcare Platform Revolution',
      client: 'Major Hospital Network',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient care coordination',
      solution: 'Integrated patient management system with AI-powered analytics',
      results: {
        patientProcessing: '30% faster',
        dataAccuracy: '99.5%',
        careCoordination: '50% improvement',
        complianceScore: '100%'
      },
      testimonial: '"The new platform has revolutionized how we deliver care, improving both patient outcomes and operational efficiency."',
      author: 'CIO, Hospital Network'
    },
    {
      title: 'E-commerce Growth Acceleration',
      client: 'Retail Chain',
      industry: 'Consumer',
      challenge: 'Limited online presence and poor mobile experience',
      solution: 'Omnichannel e-commerce platform with mobile-first design',
      results: {
        onlineSales: '200% increase',
        mobileConversion: '150% improvement',
        customerRetention: '60% higher',
        marketShare: '25% growth'
      },
      testimonial: '"Lumenalta helped us become a digital-first retailer, dramatically increasing our online sales and customer engagement."',
      author: 'CEO, Retail Chain'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '$2B+', label: 'Value Delivered' },
    { number: '25+', label: 'Industries Served' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Real transformations, real results, real success stories
              </p>
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
                Quantifying the success we&apos;ve delivered for our clients
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Success Stories
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Deep dives into our most impactful client transformations
              </p>
            </div>

            <div className="space-y-12">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <Trophy className="w-6 h-6 text-purple-600 mr-2" />
                          <span className="text-purple-600 font-medium text-sm">{story.industry}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {story.title}
                        </h3>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                            <p className="text-gray-600 dark:text-gray-300">{story.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                            <p className="text-gray-600 dark:text-gray-300">{story.solution}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {Object.entries(story.results).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                              <div className="text-xl font-bold text-purple-600">{value}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                              </div>
                            </div>
                          ))}
                        </div>

                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-6">
                        <div className="flex items-start mb-4">
                          <Quote className="w-8 h-8 text-purple-600 mr-3 mt-1" />
                          <div>
                            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                              &ldquo;{story.testimonial}&rdquo;
                            </p>
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                                <Users className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 dark:text-white">{story.author}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">{story.client}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results and create your own success story
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