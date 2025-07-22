import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { FlaskConical, Lightbulb, Rocket, Code, Brain, Zap, ArrowRight, Users, Calendar, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lumenalta Labs',
  description: 'Explore Lumenalta Labs - our innovation hub for research, experimental technologies, and cutting-edge solutions.',
  keywords: ['lumenalta labs', 'innovation hub', 'research and development', 'experimental technology', 'R&D'],
  openGraph: {
    title: 'Lumenalta Labs - Lumenalta',
    description: 'Explore our innovation hub for research and experimental technologies.',
    url: 'https://lumenalta.com/blog/lumenalta-labs',
    images: [
      {
        url: '/og-lumenalta-labs.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumenalta Labs - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumenalta Labs - Lumenalta',
    description: 'Explore our innovation hub for research and experimental technologies.',
    images: ['/og-lumenalta-labs.jpg'],
  },
  alternates: {
    canonical: '/blog/lumenalta-labs',
  },
}

export default function LumenaltaLabsPage() {
  const researchAreas = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Pioneering research in artificial intelligence, neural networks, and autonomous systems.',
      projects: 8,
      status: 'Active',
      color: 'from-blue-500 to-indigo-600',
      focus: ['Neural Networks', 'Computer Vision', 'Natural Language Processing']
    },
    {
      icon: Code,
      title: 'Quantum Computing',
      description: 'Exploring the potential of quantum computing for solving complex computational problems.',
      projects: 3,
      status: 'Experimental',
      color: 'from-purple-500 to-violet-600',
      focus: ['Quantum Algorithms', 'Quantum Security', 'Quantum Machine Learning']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Developing next-generation edge computing solutions for real-time data processing.',
      projects: 5,
      status: 'Active',
      color: 'from-yellow-500 to-orange-600',
      focus: ['IoT Integration', 'Real-time Analytics', 'Edge AI']
    },
    {
      icon: Rocket,
      title: 'Blockchain & Web3',
      description: 'Researching decentralized technologies and their applications in enterprise environments.',
      projects: 4,
      status: 'Research',
      color: 'from-green-500 to-emerald-600',
      focus: ['Smart Contracts', 'DeFi', 'Enterprise Blockchain']
    }
  ];

  const activeProjects = [
    {
      title: 'Neural Architecture Search (NAS) Platform',
      category: 'AI & Machine Learning',
      description: 'Developing an automated platform for discovering optimal neural network architectures for specific tasks.',
      progress: 75,
      team: ['Dr. Michael Chen', 'Dr. Sarah Johnson', 'Alex Rodriguez'],
      timeline: 'Q2 2024',
      impact: 'Reduces AI model development time by 60%'
    },
    {
      title: 'Quantum-Resistant Cryptography',
      category: 'Quantum Computing',
      description: 'Researching and implementing cryptographic algorithms that are resistant to quantum computing attacks.',
      progress: 45,
      team: ['Dr. David Kim', 'Emily Wilson', 'James Thompson'],
      timeline: 'Q3 2024',
      impact: 'Future-proofs security infrastructure'
    },
    {
      title: 'Edge AI Inference Engine',
      category: 'Edge Computing',
      description: 'Building lightweight AI inference engines optimized for edge devices and IoT applications.',
      progress: 85,
      team: ['Lisa Chen', 'Mark Johnson', 'Rachel Davis'],
      timeline: 'Q1 2024',
      impact: 'Enables AI on resource-constrained devices'
    }
  ];

  const innovations = [
    {
      title: 'Adaptive Learning Systems',
      description: 'AI systems that continuously learn and adapt to changing environments and requirements.',
      status: 'In Development',
      potential: 'High',
      applications: ['Autonomous Vehicles', 'Smart Cities', 'Healthcare']
    },
    {
      title: 'Federated Learning Framework',
      description: 'Privacy-preserving machine learning that enables collaboration without sharing raw data.',
      status: 'Prototype',
      potential: 'Very High',
      applications: ['Healthcare', 'Finance', 'Manufacturing']
    },
    {
      title: 'Neuromorphic Computing',
      description: 'Brain-inspired computing architectures for more efficient AI processing.',
      status: 'Research',
      potential: 'Medium',
      applications: ['Robotics', 'IoT', 'Edge Computing']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lumenalta Labs
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
                Where innovation meets research - exploring the frontiers of technology
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Lumenalta Labs is our innovation hub dedicated to pushing the boundaries of technology. 
                We research, experiment, and develop cutting-edge solutions that shape the future of digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Exploring new technologies and approaches to solve complex problems
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Research
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conducting deep research into emerging technologies and their applications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building prototypes and solutions that can be deployed in real-world scenarios
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Research Areas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our multidisciplinary research spans cutting-edge technologies and emerging fields
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`h-32 bg-gradient-to-r ${area.color} flex items-center justify-center`}>
                    <area.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {area.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        area.status === 'Active' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                        area.status === 'Experimental' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400' :
                        'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {area.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {area.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Focus Areas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.focus.map((focus, focusIndex) => (
                          <span
                            key={focusIndex}
                            className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {area.projects} active projects
                      </span>
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center">
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Active Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Current research initiatives and their progress
              </p>
            </div>

            <div className="space-y-8">
              {activeProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 ml-4">
                          {project.timeline}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Team:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.team.map((member, memberIndex) => (
                            <span
                              key={memberIndex}
                              className="text-sm bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
                            >
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expected Impact:</h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Progress</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center">
                        View Project Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Pipeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Innovation Pipeline
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Emerging technologies and concepts under exploration
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      innovation.status === 'In Development' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' :
                      innovation.status === 'Prototype' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                      'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400'
                    }`}>
                      {innovation.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      innovation.potential === 'Very High' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400' :
                      innovation.potential === 'High' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400' :
                      'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {innovation.potential} Potential
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {innovation.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {innovation.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="text-xs bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Innovation Journey
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Collaborate with our research team or explore partnership opportunities in cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Partner With Us
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                Contact Labs
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 