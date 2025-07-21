'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, Users } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              >
                <Zap size={16} />
                Transforming Digital Experiences
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                <span className="block">Accelerate Your</span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Digital Journey
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl transition-colors duration-300">
                We partner with forward-thinking organizations to design, build, and scale 
                transformative digital solutions that drive measurable business outcomes.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 flex items-center gap-2 group"
                data-cursor-hover
              >
                Start Your Transformation
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-200" 
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full text-lg font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center gap-2"
                data-cursor-hover
              >
                <Play size={20} />
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-8"
            >
              <div className="flex items-center gap-2">
                <Shield className="text-green-500" size={20} />
                <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-blue-500" size={20} />
                <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">500+ Clients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-gray-900/50 p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center transition-colors duration-300">
                      <Zap className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Digital Transformation</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">End-to-end solutions</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Project Success Rate</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '98%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">150+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">24/7</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Support</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-lg flex items-center justify-center"
              >
                <Shield className="text-white" size={24} />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center"
              >
                <Users className="text-white" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 transition-colors duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;