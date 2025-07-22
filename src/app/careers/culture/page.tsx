import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Users, Heart, Zap, Award, Globe, Coffee, BookOpen, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Culture',
  description: 'Discover Lumenalta\'s unique culture, values, and work environment. Learn about our team, benefits, and what makes us special.',
  keywords: ['company culture', 'work environment', 'team values', 'employee benefits', 'Lumenalta culture', 'workplace culture'],
  openGraph: {
    title: 'Lumenalta Culture - Our Values & Work Environment',
    description: 'Discover our unique culture, values, and what makes Lumenalta a great place to work.',
    url: 'https://lumenalta.com/careers/culture',
    images: [
      {
        url: '/og-culture.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumenalta Culture - Our Values & Work Environment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumenalta Culture - Our Values & Work Environment',
    description: 'Discover our unique culture, values, and what makes Lumenalta special.',
    images: ['/og-culture.jpg'],
  },
  alternates: {
    canonical: '/careers/culture',
  },
}

export default function CulturePage() {
  const values: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }> = [
    {
      icon: Heart,
      title: 'Passion for Innovation',
      description: 'We\'re driven by curiosity and a relentless pursuit of excellence in everything we do.'
    },
    {
      icon: Users,
      title: 'Collaboration First',
      description: 'Great ideas come from diverse perspectives. We believe in the power of teamwork.'
    },
    {
      icon: Zap,
      title: 'Agile & Adaptive',
      description: 'We embrace change and continuously evolve to meet new challenges and opportunities.'
    },
    {
      icon: Award,
      title: 'Excellence in Delivery',
      description: 'We\'re committed to delivering exceptional results that exceed expectations.'
    }
  ];

  const benefits: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }> = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and a supportive remote environment.'
    },
    {
      icon: Coffee,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs.'
    },
    {
      icon: BookOpen,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities, conferences, and career development programs.'
    },
    {
      icon: Gamepad2,
      title: 'Work-Life Balance',
      description: 'Flexible PTO, parental leave, and policies that support your personal life.'
    }
  ];

  const teamStats = [
    { number: '150+', label: 'Team Members' },
    { number: '25+', label: 'Countries' },
    { number: '95%', label: 'Employee Satisfaction' },
    { number: '4.8/5', label: 'Glassdoor Rating' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Culture
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Where innovation meets collaboration, and every voice matters
              </p>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
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

        {/* Our Values */}
        <section className="py-16">
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
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
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

        {/* Benefits */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We take care of our team with comprehensive benefits and a supportive environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
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

        {/* Team Photos/Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Diverse, talented, and passionate individuals working together to create amazing things
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">JD</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  John Doe
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Senior Developer</p>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &ldquo;The collaborative environment and focus on innovation make every day exciting.&rdquo;
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">JS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Jane Smith
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">UX Designer</p>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &ldquo;I love how we&apos;re encouraged to think creatively and push boundaries.&rdquo;
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">MJ</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Mike Johnson
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Product Manager</p>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &ldquo;The remote-first culture gives me the flexibility I need to thrive.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Be part of a team that&apos;s shaping the future of digital innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                View Open Positions
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