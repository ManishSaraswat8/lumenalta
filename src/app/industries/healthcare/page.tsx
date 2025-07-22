import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Heart, Shield, Users, Activity, Database, Globe, Zap, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare',
  description: 'Lumenalta delivers innovative digital solutions for healthcare organizations, improving patient care and operational efficiency.',
  keywords: ['healthcare', 'digital health', 'patient care', 'healthcare technology', 'medical software', 'healthcare analytics'],
  openGraph: {
    title: 'Healthcare Solutions - Lumenalta',
    description: 'Innovative digital solutions for healthcare organizations and patient care.',
    url: 'https://lumenalta.com/industries/healthcare',
    images: [
      {
        url: '/og-healthcare.jpg',
        width: 1200,
        height: 630,
        alt: 'Healthcare Solutions - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Solutions - Lumenalta',
    description: 'Innovative digital solutions for healthcare organizations.',
    images: ['/og-healthcare.jpg'],
  },
  alternates: {
    canonical: '/industries/healthcare',
  },
}

export default function HealthcarePage() {
  const solutions = [
    {
      icon: Heart,
      title: 'Patient Care Systems',
      description: 'Digital platforms for patient management, care coordination, and health monitoring.'
    },
    {
      icon: Shield,
      title: 'Healthcare Security',
      description: 'HIPAA-compliant security solutions to protect patient data and privacy.'
    },
    {
      icon: Users,
      title: 'Telemedicine Platforms',
      description: 'Remote healthcare delivery systems for virtual consultations and care.'
    },
    {
      icon: Activity,
      title: 'Health Analytics',
      description: 'Advanced analytics for population health, predictive care, and outcomes improvement.'
    }
  ];

  const challenges = [
    {
      title: 'Digital Transformation',
      description: 'Modernize legacy healthcare systems and embrace digital-first care delivery.'
    },
    {
      title: 'Data Security',
      description: 'Protect sensitive patient information and ensure HIPAA compliance.'
    },
    {
      title: 'Interoperability',
      description: 'Connect disparate healthcare systems for seamless data exchange.'
    },
    {
      title: 'Patient Experience',
      description: 'Improve patient engagement and satisfaction through digital solutions.'
    }
  ];

  const technologies = [
    'Electronic Health Records', 'Telemedicine', 'AI/ML', 'IoT Devices', 'Blockchain',
    'Cloud Computing', 'Mobile Health', 'Wearables', 'Predictive Analytics', 'Interoperability'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Innovative digital solutions for healthcare organizations, improving patient care and operational efficiency
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Healthcare Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tailored solutions to address the unique challenges of the healthcare industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
                Healthcare Challenges We Solve
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Addressing the key challenges facing healthcare organizations today
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
                Healthcare Technologies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies transforming healthcare delivery
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
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our solutions can improve patient care and operational efficiency
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