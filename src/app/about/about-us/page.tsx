import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Star, Users, Award, Globe, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Lumenalta\'s mission, values, and journey. Discover how we\'ve been driving digital innovation for 25 years.',
  keywords: ['about Lumenalta', 'company mission', 'digital innovation', 'technology company', 'Lumenalta history', 'company values'],
  openGraph: {
    title: 'About Lumenalta - Our Mission & Journey',
    description: 'Learn about our mission, values, and 25-year journey of digital innovation.',
    url: 'https://lumenalta.com/about/about-us',
    images: [
      {
        url: '/og-about-us.jpg',
        width: 1200,
        height: 630,
        alt: 'About Lumenalta - Our Mission & Journey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Lumenalta - Our Mission & Journey',
    description: 'Learn about our mission, values, and 25-year journey.',
    images: ['/og-about-us.jpg'],
  },
  alternates: {
    canonical: '/about/about-us',
  },
}

export default function AboutUsPage() {
  const milestones = [
    {
      year: '1999',
      title: 'Founded',
      description: 'Lumenalta was established with a vision to transform businesses through technology.'
    },
    {
      year: '2005',
      title: 'First Major Client',
      description: 'Secured our first Fortune 500 client, marking the beginning of enterprise partnerships.'
    },
    {
      year: '2010',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia, expanding our global footprint.'
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Launched our digital transformation practice, helping companies adapt to the digital age.'
    },
    {
      year: '2020',
      title: 'Remote-First',
      description: 'Transitioned to a remote-first culture, enabling global collaboration.'
    },
    {
      year: '2024',
      title: '25 Years of Innovation',
      description: 'Celebrating 25 years of driving digital innovation and business transformation.'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '150+', label: 'Team Members' },
    { number: '25+', label: 'Countries Served' }
  ];

  const values: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }> = [
    {
      icon: Target,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Lumenalta
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                25 years of driving digital innovation and transforming businesses through technology
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We believe that technology should be an enabler, not a barrier. Our team of experts works closely with clients to understand their unique challenges and deliver tailored solutions that transform their business operations.
                </p>
                <div className="flex items-center">
                  <Star className="text-blue-600 w-6 h-6 mr-2" />
                  <span className="text-gray-900 dark:text-white font-semibold">
                    Transforming businesses through innovation
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100">
                  To be the leading partner for digital transformation, helping organizations thrive in the digital economy through innovative technology solutions and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                25 years of innovation, growth, and transformation
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our 25 years of experience can help drive your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 