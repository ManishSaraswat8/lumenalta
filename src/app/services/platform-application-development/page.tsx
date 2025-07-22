import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Code, Smartphone, Globe, Server, Zap, Shield, Users, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform & Application Development',
  description: 'Lumenalta builds scalable platforms and custom applications using modern technologies and best practices.',
  keywords: ['application development', 'platform development', 'web development', 'mobile development', 'custom software', 'API development'],
  openGraph: {
    title: 'Platform & Application Development - Lumenalta',
    description: 'Build scalable platforms and custom applications with modern technologies.',
    url: 'https://lumenalta.com/services/platform-application-development',
    images: [
      {
        url: '/og-platform-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Platform & Application Development - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform & Application Development - Lumenalta',
    description: 'Build scalable platforms and custom applications.',
    images: ['/og-platform-development.jpg'],
  },
  alternates: {
    canonical: '/services/platform-application-development',
  },
}

export default function PlatformDevelopmentPage() {
  const services = [
    {
      icon: Code,
      title: 'Custom Application Development',
      description: 'Build tailored applications that solve your specific business challenges.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications with responsive design and optimal performance.'
    },
    {
      icon: Server,
      title: 'API Development',
      description: 'Robust APIs and microservices for seamless system integration.'
    }
  ];

  const technologies = [
    'React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java', 'C#',
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'AWS', 'Azure', 'Docker'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Platform & Application Development
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
                Build scalable platforms and custom applications using modern technologies and best practices
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Development Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                End-to-end development services from concept to deployment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
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

        {/* Technologies */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Modern frameworks and tools for building robust applications
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
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
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Application?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can bring your application ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 