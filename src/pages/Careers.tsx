'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Users, Zap, Award, Coffee, Laptop, Plane, GraduationCap } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Laptop,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours and modern equipment provided.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conferences, and skill development programs.'
    },
    {
      icon: Coffee,
      title: 'Great Culture',
      description: 'Collaborative environment with team events, free meals, and fun activities.'
    },
    {
      icon: Plane,
      title: 'Time Off',
      description: 'Generous PTO, sabbatical options, and paid volunteer time.'
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'Clear career paths, mentorship programs, and leadership development.'
    }
  ];

  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: ['5+ years experience', 'React/Node.js expertise', 'Cloud platforms (AWS/Azure)', 'Agile methodologies']
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Create beautiful, user-centered designs for web and mobile applications across various industries.',
      requirements: ['3+ years UX/UI experience', 'Figma/Sketch proficiency', 'Design systems knowledge', 'User research skills']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines, infrastructure automation, and monitoring systems.',
      requirements: ['Docker/Kubernetes', 'AWS/Azure/GCP', 'Infrastructure as Code', 'Monitoring tools']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Seattle',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our digital transformation solutions.',
      requirements: ['Product management experience', 'Technical background', 'Stakeholder management', 'Data-driven mindset']
    },
    {
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Remote / Boston',
      type: 'Full-time',
      description: 'Develop machine learning models and analytics solutions to drive business insights.',
      requirements: ['Python/R expertise', 'ML/AI experience', 'Statistical analysis', 'Big data technologies']
    },
    {
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Remote / Chicago',
      type: 'Full-time',
      description: 'Drive new business growth by building relationships with enterprise clients.',
      requirements: ['B2B sales experience', 'Technology sector knowledge', 'CRM proficiency', 'Relationship building']
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Join Our <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Build the future of digital transformation with a team of passionate innovators, 
              creators, and problem-solvers who are changing the world one project at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Culture</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe that great work comes from great people who are empowered to do their best. 
                Our culture is built on collaboration, innovation, and mutual respect.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We're not just colleagues – we're a community of passionate individuals who support 
                each other's growth and celebrate each other's successes.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4.8/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Employee Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Retention Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team working together"
                className="rounded-2xl shadow-2xl dark:shadow-gray-900/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Work With Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and perks designed to support your professional growth and personal well-being.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                data-cursor-hover
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career and make an impact.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            {openings.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 transition-all duration-300"
                data-cursor-hover
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span 
                          key={reqIndex}
                          className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center gap-2 group lg:flex-shrink-0"
                    data-cursor-hover
                  >
                    Apply Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-orange-100">
              We're always looking for talented individuals. Send us your resume and let's talk about future opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              data-cursor-hover
            >
              Send Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;