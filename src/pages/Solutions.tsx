'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Heart, GraduationCap, Car, Banknote, ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise platforms that streamline operations and drive efficiency across your organization.',
      benefits: ['Increased productivity', 'Cost reduction', 'Better collaboration', 'Data-driven insights'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platforms',
      description: 'Complete e-commerce solutions that deliver exceptional shopping experiences and drive sales growth.',
      benefits: ['Mobile-first design', 'Payment integration', 'Inventory management', 'Analytics dashboard'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'Healthcare Technology',
      description: 'HIPAA-compliant healthcare solutions that improve patient care and operational efficiency.',
      benefits: ['Patient portals', 'Telemedicine', 'EHR integration', 'Compliance management'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: GraduationCap,
      title: 'Education Platforms',
      description: 'Modern learning management systems that enhance educational experiences and outcomes.',
      benefits: ['Interactive learning', 'Progress tracking', 'Virtual classrooms', 'Assessment tools'],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Car,
      title: 'Automotive Solutions',
      description: 'Connected vehicle technologies and fleet management systems for the automotive industry.',
      benefits: ['Fleet tracking', 'Predictive maintenance', 'Driver analytics', 'Route optimization'],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Banknote,
      title: 'FinTech Solutions',
      description: 'Secure financial technology platforms that enable digital banking and payment processing.',
      benefits: ['Digital payments', 'Fraud detection', 'Regulatory compliance', 'Real-time processing'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'Average ROI Increase' },
    { icon: Users, value: '10M+', label: 'Users Served' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' },
  ];

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
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Industry <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed for specific industries, 
              delivering measurable results and competitive advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-300 group"
                data-cursor-hover
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <solution.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2 group"
                    data-cursor-hover
                  >
                    Explore Solution
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-indigo-100">
              We create bespoke solutions tailored to your industry&apos;s unique challenges and requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              data-cursor-hover
            >
              Discuss Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;