'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    services: [
      { name: 'Digital Transformation', href: '/services' },
      { name: 'Cloud Solutions', href: '/services' },
      { name: 'AI & Machine Learning', href: '/services' },
      { name: 'Cybersecurity', href: '/services' },
    ],
    industries: [
      { name: 'Healthcare', href: '/industries' },
      { name: 'Finance', href: '/industries' },
      { name: 'Manufacturing', href: '/industries' },
      { name: 'Retail', href: '/industries' },
    ],
    solutions: [
      { name: 'Enterprise Software', href: '/solutions' },
      { name: 'Mobile Apps', href: '/solutions' },
      { name: 'Web Development', href: '/solutions' },
      { name: 'Data Analytics', href: '/solutions' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@lumenalta.com',
      href: 'mailto:hello@lumenalta.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: '123 Innovation Street, Tech City, TC 12345',
      href: '#',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Lumenalta
                </span>
              </h3>
              <p className="text-gray-300 mt-3 sm:mt-4 max-w-md leading-relaxed text-sm sm:text-base">
                Transforming businesses through innovative digital solutions. We partner with forward-thinking organizations to design, build, and scale transformative technologies.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3 sm:space-y-4"
            >
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <contact.icon size={18} className="text-blue-400 group-hover:text-blue-300 sm:w-5 sm:h-5" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">{contact.label}</div>
                    <div className="font-medium text-sm sm:text-base">{contact.value}</div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 group"
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-white sm:w-5 sm:h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Industries</h4>
              <ul className="space-y-2">
                {footerLinks.industries.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-6 sm:pt-8"
        >
          <div className="max-w-md">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
              Get the latest insights on digital transformation and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Subscribe
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Lumenalta. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              Made with <Heart size={14} className="text-red-500 sm:w-4 sm:h-4" /> by Lumenalta
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 