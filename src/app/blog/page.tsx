import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { BookOpen, FlaskConical, ArrowRight, TrendingUp, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights & Research',
  description: 'Explore Lumenalta\'s thought leadership content, research insights, and innovation hub.',
  keywords: ['insights', 'research', 'thought leadership', 'innovation', 'blog'],
  openGraph: {
    title: 'Insights & Research - Lumenalta',
    description: 'Explore our thought leadership content and innovation hub.',
    url: 'https://lumenalta.com/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Insights & Research - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Research - Lumenalta',
    description: 'Explore our thought leadership content and innovation hub.',
    images: ['/og-blog.jpg'],
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const featuredContent = [
    {
      title: 'Insights Hub',
      description: 'Expert insights, research, and thought leadership on digital transformation and technology innovation.',
      icon: BookOpen,
      color: 'from-teal-500 to-cyan-600',
      link: '/blog/insights-hub',
      features: [
        'Industry Research & Analysis',
        'Expert Thought Leadership',
        'Technology Trends & Predictions',
        'Digital Transformation Insights'
      ]
    },
    {
      title: 'Lumenalta Labs',
      description: 'Our innovation hub dedicated to pushing the boundaries of technology through research and experimental solutions.',
      icon: FlaskConical,
      color: 'from-indigo-500 to-purple-600',
      link: '/blog/lumenalta-labs',
      features: [
        'Cutting-edge Research',
        'Experimental Technologies',
        'Innovation Pipeline',
        'Active R&D Projects'
      ]
    }
  ];

  const recentInsights = [
    {
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      category: 'AI & Machine Learning',
      author: 'Michael Chen',
      date: 'March 15, 2024',
      readTime: '8 min read',
      excerpt: 'Explore the latest trends in enterprise AI adoption and what to expect in 2024.'
    },
    {
      title: 'Digital Transformation Success: Lessons from Fortune 500 Companies',
      category: 'Digital Transformation',
      author: 'Sarah Johnson',
      date: 'March 10, 2024',
      readTime: '12 min read',
      excerpt: 'Learn from real-world digital transformation success stories and strategies.'
    },
    {
      title: 'Cloud Migration Strategies: A Comprehensive Guide',
      category: 'Cloud & Infrastructure',
      author: 'Emily Rodriguez',
      date: 'March 8, 2024',
      readTime: '10 min read',
      excerpt: 'A detailed guide to successful cloud migration strategies and optimization.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insights & Research
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Explore our thought leadership content, research insights, and innovation hub
              </p>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Our Content
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover insights, research, and innovation from our team of experts
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredContent.map((content, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`h-48 bg-gradient-to-r ${content.color} flex items-center justify-center`}>
                    <content.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {content.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What you&apos;ll find:</h4>
                      <ul className="space-y-2">
                        {content.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={content.link}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Explore {content.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Insights */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Recent Insights
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Latest thought leadership content from our experts
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {recentInsights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium">
                      {insight.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                      {insight.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {insight.author}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Quantifying our thought leadership and research contributions
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600 dark:text-gray-300">Published Insights</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-300">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-300">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Expert Contributors</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights, research, and innovation updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 