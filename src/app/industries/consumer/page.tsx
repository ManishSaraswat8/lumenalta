import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { ShoppingBag, Users, TrendingUp, Globe, Zap, Shield, Smartphone, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Consumer',
  description: 'Lumenalta delivers innovative digital solutions for consumer-facing businesses, enhancing customer experiences and driving growth.',
  keywords: ['consumer', 'retail', 'e-commerce', 'customer experience', 'digital retail', 'consumer technology'],
  openGraph: {
    title: 'Consumer Solutions - Lumenalta',
    description: 'Innovative digital solutions for consumer-facing businesses.',
    url: 'https://lumenalta.com/industries/consumer',
    images: [
      {
        url: '/og-consumer.jpg',
        width: 1200,
        height: 630,
        alt: 'Consumer Solutions - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer Solutions - Lumenalta',
    description: 'Innovative digital solutions for consumer businesses.',
    images: ['/og-consumer.jpg'],
  },
  alternates: {
    canonical: '/industries/consumer',
  },
}

export default function ConsumerPage() {
  const solutions = [
    {
      icon: ShoppingBag,
      title: 'E-commerce Platforms',
      description: 'Modern e-commerce solutions with seamless shopping experiences.'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Personalized customer journeys and engagement strategies.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Commerce',
      description: 'Mobile-first shopping experiences and applications.'
    },
    {
      icon: BarChart3,
      title: 'Consumer Analytics',
      description: 'Data-driven insights to understand and serve customers better.'
    }
  ];

  const challenges = [
    {
      title: 'Digital Transformation',
      description: 'Modernize retail operations and embrace digital-first strategies.'
    },
    {
      title: 'Customer Expectations',
      description: 'Meet evolving customer demands for seamless digital experiences.'
    },
    {
      title: 'Omnichannel Integration',
      description: 'Connect online and offline channels for unified customer experiences.'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Leverage customer data for personalized experiences and growth.'
    }
  ];

  const technologies = [
    'E-commerce Platforms', 'Mobile Apps', 'AI/ML', 'Personalization', 'Analytics',
    'Cloud Computing', 'Payment Systems', 'Inventory Management', 'CRM', 'Marketing Automation'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Consumer
              </h1>
              <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
                Innovative digital solutions for consumer-facing businesses, enhancing customer experiences and driving growth
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Consumer Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tailored solutions to address the unique challenges of consumer businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
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
                Consumer Industry Challenges We Solve
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Addressing the key challenges facing consumer businesses today
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
                Consumer Technologies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies powering modern consumer experiences
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
        <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Consumer Business?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our solutions can enhance customer experiences and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-pink-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 