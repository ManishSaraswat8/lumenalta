import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Cloud, Server, Zap, Shield, Database, Globe, Settings, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud & Infrastructure Modernization',
  description: 'Lumenalta helps businesses modernize their infrastructure with cloud-native solutions, DevOps practices, and scalable architecture.',
  keywords: ['cloud migration', 'infrastructure modernization', 'DevOps', 'AWS', 'Azure', 'GCP', 'containerization', 'microservices'],
  openGraph: {
    title: 'Cloud & Infrastructure Modernization - Lumenalta',
    description: 'Modernize your infrastructure with cloud-native solutions and DevOps practices.',
    url: 'https://lumenalta.com/services/cloud-infrastructure-modernization',
    images: [
      {
        url: '/og-cloud-infrastructure.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloud & Infrastructure Modernization - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & Infrastructure Modernization - Lumenalta',
    description: 'Modernize your infrastructure with cloud-native solutions.',
    images: ['/og-cloud-infrastructure.jpg'],
  },
  alternates: {
    canonical: '/services/cloud-infrastructure-modernization',
  },
}

export default function CloudInfrastructurePage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration from on-premises to cloud platforms with minimal downtime.'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management using modern IaC tools.'
    },
    {
      icon: Zap,
      title: 'DevOps Implementation',
      description: 'Implement CI/CD pipelines and DevOps practices for faster delivery.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure cloud security, compliance, and governance best practices.'
    }
  ];

  const benefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by 30-50% through cloud optimization.'
    },
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically.'
    },
    {
      title: 'Performance',
      description: 'Improve application performance with modern cloud architecture.'
    },
    {
      title: 'Reliability',
      description: 'Achieve 99.9%+ uptime with redundant cloud infrastructure.'
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible',
    'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack', 'Istio'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cloud & Infrastructure Modernization
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Transform your infrastructure with cloud-native solutions, DevOps practices, and scalable architecture
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Cloud Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud transformation services to modernize your infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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

        {/* Benefits */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Benefits of Cloud Modernization
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transform your business with modern cloud infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
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

        {/* Technologies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Leading cloud platforms and modern DevOps tools
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Modernization Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven approach to successful cloud transformation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Assessment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Evaluate current infrastructure and identify modernization opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Develop cloud migration strategy and architecture roadmap
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Migration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Execute phased migration with minimal business disruption
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimize performance, costs, and operational efficiency
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how cloud modernization can transform your business operations
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