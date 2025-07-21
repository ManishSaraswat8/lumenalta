'use client'

import React from 'react';
import HeroSection from '../components/HeroSection';
import { useDarkMode } from '../hooks/useDarkMode';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, Users, Star, Globe, Rocket, Target, Award, CheckCircle, ArrowDown, Code, Database, Cloud, Smartphone, Monitor, Server, Lock, TrendingUp, Clock, Headphones, Mail, Phone, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="-mt-16">
      <HeroSection isDarkMode={isDarkMode} />
      
      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "Custom Development",
                description: "Tailored software solutions built from the ground up to meet your specific requirements",
                features: ["Web Applications", "Mobile Apps", "API Development", "Database Design"]
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services for modern businesses",
                features: ["AWS/Azure/GCP", "Serverless Architecture", "DevOps Automation", "Cost Optimization"]
              },
              {
                icon: Database,
                title: "Data Analytics",
                description: "Transform your data into actionable insights with advanced analytics",
                features: ["Business Intelligence", "Machine Learning", "Data Visualization", "Predictive Analytics"]
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications for iOS and Android",
                features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
              },
              {
                icon: Monitor,
                title: "UI/UX Design",
                description: "Beautiful, intuitive user interfaces that enhance user experience",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
              },
              {
                icon: Server,
                title: "System Integration",
                description: "Seamless integration of existing systems and third-party services",
                features: ["API Integration", "Legacy Systems", "Third-party Services", "Data Migration"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-blue-600 dark:text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements and create a comprehensive project roadmap",
                icon: Target
              },
              {
                step: "02",
                title: "Design",
                description: "Our design team creates intuitive interfaces and user experiences",
                icon: Monitor
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development process with regular updates and feedback loops",
                icon: Code
              },
              {
                step: "04",
                title: "Deploy",
                description: "Thorough testing and seamless deployment to production",
                icon: Rocket
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <process.icon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 transition-colors duration-300">
                  {process.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {process.description}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
              What Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Don&apos;t just take our word for it - hear from the companies we&apos;ve helped transform
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                content: "The team delivered our project ahead of schedule with exceptional quality. Their expertise in cloud architecture saved us thousands in infrastructure costs.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CEO, StartupXYZ",
                content: "Working with this team was a game-changer for our business. They understood our vision and brought it to life with innovative solutions.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager, InnovateCo",
                content: "The level of attention to detail and user experience design exceeded our expectations. Our users love the new interface!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 italic transition-colors duration-300">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span className="hidden sm:inline">Get Started Today</span>
                <span className="sm:hidden">Get Started</span>
                <ArrowRight 
                  size={18} 
                  className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" 
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Schedule a Call</span>
                <span className="sm:hidden">Call Us</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
                Let&apos;s <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Connect</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 transition-colors duration-300">
                Ready to start your digital transformation journey? Get in touch with our team.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600 dark:text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">Email</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">hello@company.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600 dark:text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">Phone</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="text-blue-600 dark:text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">Office</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">123 Innovation Street, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
                Send us a message
              </h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;