import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import { Users, Award, Star, Linkedin, Mail, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet Lumenalta\'s executive leadership team - experienced professionals driving innovation and digital transformation.',
  keywords: ['leadership', 'executive team', 'management', 'CEO', 'CTO', 'company leadership'],
  openGraph: {
    title: 'Leadership - Lumenalta',
    description: 'Meet our executive leadership team driving innovation and digital transformation.',
    url: 'https://lumenalta.com/about/leadership',
    images: [
      {
        url: '/og-leadership.jpg',
        width: 1200,
        height: 630,
        alt: 'Leadership - Lumenalta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leadership - Lumenalta',
    description: 'Meet our executive leadership team.',
    images: ['/og-leadership.jpg'],
  },
  alternates: {
    canonical: '/about/leadership',
  },
}

export default function LeadershipPage() {
  const leadership = [
    {
      name: 'Sarah Johnson',
      title: 'Chief Executive Officer',
      bio: 'Sarah brings over 20 years of experience in technology leadership and digital transformation. She has successfully led multiple Fortune 500 companies through their digital evolution.',
      expertise: ['Digital Transformation', 'Technology Strategy', 'Business Growth'],
      linkedin: '#',
      email: 'sarah.johnson@lumenalta.com',
      image: '/leadership/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      title: 'Chief Technology Officer',
      bio: 'Michael is a technology visionary with deep expertise in AI, cloud architecture, and emerging technologies. He has architected solutions for some of the world\'s largest enterprises.',
      expertise: ['AI/ML', 'Cloud Architecture', 'Emerging Technologies'],
      linkedin: '#',
      email: 'michael.chen@lumenalta.com',
      image: '/leadership/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Chief Operating Officer',
      bio: 'Emily oversees all operational aspects of Lumenalta, ensuring excellence in delivery and client satisfaction. She has a proven track record of scaling technology companies.',
      expertise: ['Operations', 'Client Success', 'Process Optimization'],
      linkedin: '#',
      email: 'emily.rodriguez@lumenalta.com',
      image: '/leadership/emily-rodriguez.jpg'
    },
    {
      name: 'David Kim',
      title: 'Chief Financial Officer',
      bio: 'David brings extensive financial leadership experience from both technology and consulting industries. He ensures sustainable growth and financial excellence.',
      expertise: ['Financial Strategy', 'Growth Planning', 'Risk Management'],
      linkedin: '#',
      email: 'david.kim@lumenalta.com',
      image: '/leadership/david-kim.jpg'
    },
    {
      name: 'Lisa Thompson',
      title: 'Chief People Officer',
      bio: 'Lisa is passionate about building exceptional teams and fostering a culture of innovation. She has transformed organizational cultures across multiple industries.',
      expertise: ['Talent Development', 'Culture Building', 'Organizational Design'],
      linkedin: '#',
      email: 'lisa.thompson@lumenalta.com',
      image: '/leadership/lisa-thompson.jpg'
    },
    {
      name: 'James Wilson',
      title: 'Chief Strategy Officer',
      bio: 'James leads strategic initiatives and partnerships, driving Lumenalta\'s market expansion and innovation agenda. He has advised numerous companies on digital strategy.',
      expertise: ['Strategic Planning', 'Market Expansion', 'Partnerships'],
      linkedin: '#',
      email: 'james.wilson@lumenalta.com',
      image: '/leadership/james-wilson.jpg'
    }
  ];

  const values = [
    {
      icon: Star,
      title: 'Innovation First',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients and the impact we create together.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and professionalism in everything we do.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Meet the experienced professionals driving innovation and digital transformation at Lumenalta
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Executive Leadership Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Seasoned professionals with decades of combined experience in technology and business transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Users className="w-16 h-16 mx-auto mb-4" />
                      <span className="text-lg font-medium">{leader.name}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {leader.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {leader.bio}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {leader.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={leader.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Leadership Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide our leadership team and shape our company culture
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-50 dark:bg-gray-700 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Leadership Impact
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The results our leadership team has delivered for clients and the company
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Led</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$2B+</div>
                <div className="text-gray-600 dark:text-gray-300">Value Delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work with Our Leadership Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our experienced leadership can help transform your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 