'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, ArrowRight, Heart, Lightbulb, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'We put our clients at the center of everything we do, building lasting partnerships based on trust and results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and professionalism in every project we deliver.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both within our organization and with our clients.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Team Members' },
    { number: '50+', label: 'Countries Served' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 20+ years in digital transformation.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technology expert specializing in scalable enterprise solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative director passionate about user-centered design.'
    },
    {
      name: 'David Thompson',
      role: 'VP of Engineering',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Engineering leader focused on building robust, scalable systems.'
    }
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
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900/20 dark:to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 sm:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              About <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">Lumenalta</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate innovators dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Our <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower organizations with innovative digital solutions that drive growth, efficiency, and competitive advantage in an ever-evolving technological landscape.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe that technology should be a catalyst for positive change, enabling businesses to reach their full potential while creating meaningful impact in the world.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 group"
              >
                Learn More
                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture of excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-green-600 dark:text-green-400 w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Meet Our <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The visionary leaders who drive our mission and shape the future of digital transformation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-green-600 dark:text-green-400 mb-3 sm:mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 mx-auto group"
            >
              Get Started Today
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;