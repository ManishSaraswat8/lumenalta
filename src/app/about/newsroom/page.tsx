import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Newspaper, Calendar, User, ArrowRight, ExternalLink, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newsroom',
  description: 'Stay updated with Lumenalta\'s latest news, press releases, awards, and media coverage.',
  keywords: ['newsroom', 'press releases', 'media coverage', 'company news', 'awards', 'announcements'],
  openGraph: {
    title: 'Newsroom - Lumenalta',
    description: 'Stay updated with our latest news, press releases, and media coverage.',
    url: 'https://lumenalta.com/about/newsroom',
    images: [
      {
        url: '/og-newsroom.jpg',
        width: 1200,
        height: 630,
        alt: 'Newsroom - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsroom - Lumenalta',
    description: 'Stay updated with our latest news and media coverage.',
    images: ['/og-newsroom.jpg'],
  },
  alternates: {
    canonical: '/about/newsroom',
  },
}

export default function NewsroomPage() {
  const news = [
    {
      title: 'Lumenalta Named Top Digital Transformation Company 2024',
      category: 'Award',
      date: 'March 15, 2024',
      author: 'Lumenalta Team',
      excerpt: 'Lumenalta has been recognized as one of the top digital transformation companies in 2024 by TechInnovate Magazine for our innovative solutions and client success.',
      image: '/news/award-2024.jpg',
      link: '#',
      featured: true
    },
    {
      title: 'New AI-Powered Analytics Platform Launch',
      category: 'Product Launch',
      date: 'March 10, 2024',
      author: 'Michael Chen',
      excerpt: 'Lumenalta launches its next-generation AI-powered analytics platform, designed to help enterprises make data-driven decisions faster and more accurately.',
      image: '/news/ai-platform.jpg',
      link: '#'
    },
    {
      title: 'Partnership with Global Tech Leader Announced',
      category: 'Partnership',
      date: 'March 5, 2024',
      author: 'Sarah Johnson',
      excerpt: 'Lumenalta announces strategic partnership with a leading global technology company to expand our service offerings and market reach.',
      image: '/news/partnership.jpg',
      link: '#'
    },
    {
      title: 'Healthcare Client Success Story Featured',
      category: 'Case Study',
      date: 'February 28, 2024',
      author: 'Emily Rodriguez',
      excerpt: 'Our healthcare platform transformation project is featured in Healthcare IT News, showcasing how we helped a major hospital network improve patient care.',
      image: '/news/healthcare-case.jpg',
      link: '#'
    },
    {
      title: 'Lumenalta Expands to European Market',
      category: 'Company News',
      date: 'February 20, 2024',
      author: 'James Wilson',
      excerpt: 'Lumenalta announces expansion into the European market with new offices in London and Berlin to better serve our growing international client base.',
      image: '/news/europe-expansion.jpg',
      link: '#'
    },
    {
      title: 'CEO Sarah Johnson Speaks at Tech Conference',
      category: 'Speaking Engagement',
      date: 'February 15, 2024',
      author: 'Lumenalta Team',
      excerpt: 'Our CEO Sarah Johnson delivered a keynote speech on "The Future of Digital Transformation" at the annual TechInnovate Conference.',
      image: '/news/ceo-speaking.jpg',
      link: '#'
    }
  ];

  const pressReleases = [
    {
      title: 'Lumenalta Reports Record Growth in 2023',
      date: 'January 30, 2024',
      excerpt: 'Company achieves 150% revenue growth and expands client base to over 200 organizations worldwide.'
    },
    {
      title: 'New Executive Appointments Announced',
      date: 'January 15, 2024',
      excerpt: 'Lumenalta welcomes new Chief Technology Officer and Chief Strategy Officer to strengthen leadership team.'
    },
    {
      title: 'Series B Funding Round Completed',
      date: 'December 20, 2023',
      excerpt: 'Lumenalta secures $50 million in Series B funding to accelerate product development and market expansion.'
    }
  ];

  const mediaMentions = [
    {
      source: 'TechCrunch',
      title: 'Lumenalta Revolutionizes Enterprise AI',
      date: 'March 12, 2024',
      link: '#'
    },
    {
      source: 'Forbes',
      title: 'The Rise of Digital Transformation Leaders',
      date: 'March 8, 2024',
      link: '#'
    },
    {
      source: 'Business Insider',
      title: 'How Lumenalta is Shaping the Future of Tech',
      date: 'March 3, 2024',
      link: '#'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Newsroom
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                Stay updated with Lumenalta&apos;s latest news, press releases, and media coverage
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Latest News
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Stay informed about our latest developments, achievements, and industry insights
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Featured Article */}
              <div className="lg:col-span-2">
                {news.filter(item => item.featured).map((article, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Newspaper className="w-16 h-16 mx-auto mb-4" />
                        <span className="text-lg font-medium">Featured News</span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 ml-4 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 dark:text-gray-400 flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </span>
                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center">
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
                  Recent News
                </h3>
                {news.filter(item => !item.featured).slice(0, 4).map((article, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                        {article.date}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {article.excerpt}
                    </p>
                    
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Press Releases
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Official announcements and company updates
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pressReleases.map((release, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Newspaper className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
                    <span className="text-green-600 dark:text-green-400 font-medium text-sm">
                      Press Release
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {release.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {release.date}
                    </span>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                      Read Full Release
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Mentions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Media Coverage
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Recent mentions and coverage in leading publications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mediaMentions.map((mention, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {mention.source}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {mention.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {mention.date}
                    </span>
                    <a
                      href={mention.link}
                      className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
                    >
                      Read Article
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Connected with Lumenalta
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest updates and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200">
                Contact Media
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 