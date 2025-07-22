import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { BookOpen, TrendingUp, Users, Calendar, ArrowRight, Search, Filter, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights Hub',
  description: 'Explore Lumenalta\'s thought leadership content, industry research, and expert insights on digital transformation.',
  keywords: ['insights hub', 'thought leadership', 'industry research', 'digital transformation insights', 'expert analysis'],
  openGraph: {
    title: 'Insights Hub - Lumenalta',
    description: 'Explore our thought leadership content and industry insights.',
    url: 'https://lumenalta.com/blog/insights-hub',
    images: [
      {
        url: '/og-insights-hub.jpg',
        width: 1200,
        height: 630,
        alt: 'Insights Hub - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights Hub - Lumenalta',
    description: 'Explore our thought leadership content.',
    images: ['/og-insights-hub.jpg'],
  },
  alternates: {
    canonical: '/blog/insights-hub',
  },
}

export default function InsightsHubPage() {
  const featuredInsights = [
    {
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      category: 'AI & Machine Learning',
      author: 'Michael Chen',
      date: 'March 15, 2024',
      readTime: '8 min read',
      excerpt: 'Explore the latest trends in enterprise AI adoption and what to expect in 2024. From generative AI to autonomous systems, discover how businesses are leveraging AI for competitive advantage.',
      image: '/insights/ai-trends-2024.jpg',
      featured: true
    },
    {
      title: 'Digital Transformation Success: Lessons from Fortune 500 Companies',
      category: 'Digital Transformation',
      author: 'Sarah Johnson',
      date: 'March 10, 2024',
      readTime: '12 min read',
      excerpt: 'Learn from real-world digital transformation success stories. We analyze patterns and strategies that led to successful outcomes in major enterprise transformations.',
      image: '/insights/digital-transformation-success.jpg',
      featured: true
    }
  ];

  const insights = [
    {
      title: 'Cloud Migration Strategies: A Comprehensive Guide',
      category: 'Cloud & Infrastructure',
      author: 'Emily Rodriguez',
      date: 'March 8, 2024',
      readTime: '10 min read',
      excerpt: 'A detailed guide to successful cloud migration strategies, including planning, execution, and optimization phases.',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'Strategy']
    },
    {
      title: 'Data Governance in the Age of AI',
      category: 'Data & Analytics',
      author: 'David Kim',
      date: 'March 5, 2024',
      readTime: '6 min read',
      excerpt: 'How to implement effective data governance frameworks that support AI initiatives while ensuring compliance and security.',
      tags: ['Data Governance', 'AI', 'Compliance', 'Security']
    },
    {
      title: 'The Rise of Platform Engineering',
      category: 'Platform Development',
      author: 'James Wilson',
      date: 'March 1, 2024',
      readTime: '7 min read',
      excerpt: 'Understanding the emerging discipline of platform engineering and its impact on software development efficiency.',
      tags: ['Platform Engineering', 'DevOps', 'Software Development']
    },
    {
      title: 'UX Design Trends for 2024',
      category: 'UX & Design',
      author: 'Lisa Thompson',
      date: 'February 28, 2024',
      readTime: '5 min read',
      excerpt: 'The latest UX design trends that are shaping user experiences in 2024, from micro-interactions to accessibility.',
      tags: ['UX Design', 'UI Trends', 'Accessibility', 'User Experience']
    },
    {
      title: 'Cybersecurity in Digital Transformation',
      category: 'Security',
      author: 'Michael Chen',
      date: 'February 25, 2024',
      readTime: '9 min read',
      excerpt: 'Essential cybersecurity considerations for organizations undergoing digital transformation initiatives.',
      tags: ['Cybersecurity', 'Digital Transformation', 'Risk Management']
    },
    {
      title: 'Building High-Performance Teams in Tech',
      category: 'Leadership',
      author: 'Sarah Johnson',
      date: 'February 20, 2024',
      readTime: '11 min read',
      excerpt: 'Strategies for building and maintaining high-performance technology teams in today\'s competitive landscape.',
      tags: ['Team Building', 'Leadership', 'Technology', 'Culture']
    }
  ];

  const categories = [
    'All Insights',
    'AI & Machine Learning',
    'Digital Transformation',
    'Cloud & Infrastructure',
    'Data & Analytics',
    'Platform Development',
    'UX & Design',
    'Security',
    'Leadership'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insights Hub
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
                Expert insights, research, and thought leadership on digital transformation and technology innovation
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500">
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Insights
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Deep dives into the most important topics shaping the future of technology and business
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Featured Article */}
              <div className="lg:col-span-2">
                {featuredInsights.filter(item => item.featured).map((insight, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <BookOpen className="w-12 h-12 mx-auto mb-4" />
                        <span className="text-lg font-medium">Featured Insight</span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                          {insight.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 ml-4 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {insight.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {insight.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-500 dark:text-gray-400 flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {insight.author}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {insight.readTime}
                          </span>
                        </div>
                        <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent News Sidebar */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Insights
                </h3>
                {insights.slice(0, 4).map((insight, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <span className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 px-2 py-1 rounded text-xs font-medium">
                        {insight.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                        {insight.readTime}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {insight.excerpt}
                    </p>
                    
                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Insights */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                All Insights
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Browse our complete collection of insights, research, and expert analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 px-2 py-1 rounded text-xs font-medium">
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
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {insight.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {insight.author}
                    </span>
                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center">
                      Read Article
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Insights
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights, research, and expert analysis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-teal-600 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 