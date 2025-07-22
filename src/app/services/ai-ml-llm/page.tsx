import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Brain, Zap, Target, Users, Code, Database, TrendingUp, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI, ML & LLM',
  description: 'Lumenalta delivers cutting-edge AI, machine learning, and large language model solutions. Transform your business with intelligent automation and predictive analytics.',
  keywords: ['artificial intelligence', 'machine learning', 'LLM', 'AI solutions', 'ML consulting', 'predictive analytics', 'automation'],
  openGraph: {
    title: 'AI, ML & LLM Solutions - Lumenalta',
    description: 'Transform your business with intelligent automation and predictive analytics.',
    url: 'https://lumenalta.com/services/ai-ml-llm',
    images: [
      {
        url: '/og-ai-ml-llm.jpg',
        width: 1200,
        height: 630,
        alt: 'AI, ML & LLM Solutions - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI, ML & LLM Solutions - Lumenalta',
    description: 'Transform your business with intelligent automation.',
    images: ['/og-ai-ml-llm.jpg'],
  },
  alternates: {
    canonical: '/services/ai-ml-llm',
  },
}

export default function AIMLPage() {
  const services = [
    {
      icon: Brain,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence systems designed for your specific business needs and use cases.'
    },
    {
      icon: Zap,
      title: 'Machine Learning Models',
      description: 'Advanced ML models for predictive analytics, pattern recognition, and automated decision-making.'
    },
    {
      icon: Target,
      title: 'Large Language Models',
      description: 'Custom LLM implementations for natural language processing, chatbots, and content generation.'
    },
    {
      icon: Users,
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance on AI adoption, implementation roadmap, and ROI optimization.'
    }
  ];

  const useCases = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends, customer behavior, and business outcomes with high accuracy.'
    },
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and reduce costs.'
    },
    {
      title: 'Customer Intelligence',
      description: 'Understand customer preferences and behavior patterns for personalized experiences.'
    },
    {
      title: 'Risk Assessment',
      description: 'Identify and mitigate risks using advanced pattern recognition and anomaly detection.'
    }
  ];

  const technologies = [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'BERT', 'Hugging Face',
    'AWS SageMaker', 'Azure ML', 'Google AI', 'Kubernetes', 'Docker', 'Apache Spark'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI, ML & LLM Solutions
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Transform your business with intelligent automation, predictive analytics, and cutting-edge AI technology
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our AI & ML Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From strategy to implementation, we deliver end-to-end AI solutions that drive real business value
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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

        {/* Use Cases */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                AI Use Cases
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how AI can transform your business operations and drive growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {useCase.description}
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
                Cutting-edge tools and frameworks for building robust AI solutions
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
                Our AI Implementation Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful AI project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Discovery & Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Understand your business needs and define AI strategy
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Data Preparation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Clean, prepare, and structure data for AI models
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Model Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Build, train, and optimize AI/ML models
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Deployment & Monitoring
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deploy to production and monitor performance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how AI can transform your business operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 