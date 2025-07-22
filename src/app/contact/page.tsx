import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Lumenalta. Contact our team for inquiries about digital solutions, project consultations, or partnership opportunities. We\'re here to help.',
  keywords: ['contact Lumenalta', 'get in touch', 'project consultation', 'digital solutions inquiry', 'partnership opportunities', 'customer support'],
  openGraph: {
    title: 'Contact Lumenalta - Get In Touch',
    description: 'Get in touch with our team for inquiries about digital solutions, project consultations, or partnership opportunities.',
    url: 'https://lumenalta.com/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Lumenalta - Get In Touch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Lumenalta - Get In Touch',
    description: 'Get in touch with our team for inquiries about digital solutions.',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@lumenalta.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Innovation Drive, Tech City, TC 12345',
      description: 'Our headquarters'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive\nSan Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@lumenalta.com'
    },
    {
      city: 'New York',
      address: '456 Business Ave\nNew York, NY 10001',
      phone: '+1 (212) 555-0456',
      email: 'ny@lumenalta.com'
    },
    {
      city: 'London',
      address: '789 Tech Street\nLondon, UK EC1A 1BB',
      phone: '+44 20 7555 0789',
      email: 'london@lumenalta.com'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Get In <span className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business? Let&apos;s start a conversation about how we can help 
                you achieve your digital transformation goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <info.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg text-teal-600 dark:text-teal-400 font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Form and Info */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a message</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="services">Services</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Support</option>
                        <option value="careers">Careers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 rounded-xl font-medium hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                {/* Response Time */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Clock className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Response Time</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </div>

                {/* Office Locations */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Our Offices</h3>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-6 last:pb-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{office.city}</h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <p className="whitespace-pre-line">{office.address}</p>
                          <p>{office.phone}</p>
                          <p className="text-teal-600 dark:text-teal-400">{office.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-teal-100">
                Schedule a free consultation to discuss your project and explore how we can help.
              </p>
              <button className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 mx-auto">
                Schedule Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 