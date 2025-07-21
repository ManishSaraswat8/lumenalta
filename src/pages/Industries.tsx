'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Building, ShoppingBag, Heart, GraduationCap, Plane, Factory, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Building,
      title: 'Financial Services',
      description: 'Secure, compliant solutions for banking, insurance, and fintech companies.',
      challenges: ['Regulatory compliance', 'Data security', 'Legacy system integration', 'Real-time processing'],
      solutions: ['Digital banking platforms', 'Risk management systems', 'Fraud detection', 'Mobile payments'],
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'blue'
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Omnichannel solutions that enhance customer experience and drive sales.',
      challenges: ['Customer experience', 'Inventory management', 'Multi-channel integration', 'Personalization'],
      solutions: ['E-commerce platforms', 'POS systems', 'Customer analytics', 'Supply chain optimization'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA-compliant healthcare technology that improves patient outcomes.',
      challenges: ['Patient data security', 'Interoperability', 'Regulatory compliance', 'Cost management'],
      solutions: ['Electronic health records', 'Telemedicine platforms', 'Patient portals', 'Medical imaging'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'red'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Modern learning platforms that transform educational experiences.',
      challenges: ['Remote learning', 'Student engagement', 'Assessment tools', 'Administrative efficiency'],
      solutions: ['Learning management systems', 'Virtual classrooms', 'Student information systems', 'Educational apps'],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'purple'
    },
    {
      icon: Plane,
      title: 'Travel & Hospitality',
      description: 'Digital solutions that enhance guest experiences and operational efficiency.',
      challenges: ['Booking management', 'Customer service', 'Revenue optimization', 'Mobile experiences'],
      solutions: ['Reservation systems', 'Mobile check-in', 'Guest management', 'Revenue management'],
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'indigo'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions that optimize production and supply chain operations.',
      challenges: ['Production efficiency', 'Quality control', 'Supply chain visibility', 'Predictive maintenance'],
      solutions: ['IoT monitoring', 'ERP systems', 'Quality management', 'Predictive analytics'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      red: 'from-red-500 to-red-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600',
      yellow: 'from-yellow-500 to-yellow-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
            transition: {
        duration: 0.6
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Industry <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deep industry knowledge combined with cutting-edge technology to solve 
              complex challenges across diverse sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(industry.color)} rounded-2xl flex items-center justify-center`}>
                      <industry.icon className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {industry.title}
                    </h2>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Challenges
                      </h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Our Solutions
                      </h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${getColorClasses(industry.color)} text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center gap-2 group`}
                    data-cursor-hover
                  >
                    Learn More About {industry.title}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                    <Image 
                      src={industry.image} 
                      alt={industry.title}
                      width={800}
                      height={400}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-xl text-purple-100">
              We work across many industries and can adapt our expertise to your specific sector.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              data-cursor-hover
            >
              Contact Our Experts
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;