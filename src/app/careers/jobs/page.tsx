import type { Metadata } from 'next'
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Jobs',
  description: 'Explore exciting career opportunities at Lumenalta. Find your next role in technology, design, and digital innovation.',
  keywords: ['jobs', 'career opportunities', 'technology jobs', 'digital solutions careers', 'work at Lumenalta', 'tech careers'],
  openGraph: {
    title: 'Jobs at Lumenalta - Career Opportunities',
    description: 'Explore exciting career opportunities and find your next role at Lumenalta.',
    url: 'https://lumenalta.com/careers/jobs',
    images: [
      {
        url: '/og-jobs.jpg',
        width: 1200,
        height: 630,
        alt: 'Jobs at Lumenalta - Career Opportunities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jobs at Lumenalta - Career Opportunities',
    description: 'Explore exciting career opportunities and find your next role.',
    images: ['/og-jobs.jpg'],
  },
  alternates: {
    canonical: '/careers/jobs',
  },
}

export default function JobsPage() {
  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our engineering team to build innovative digital solutions using modern technologies.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and intuitive user experiences for our digital products.',
      skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'User Research', 'Prototyping']
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Boston',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Transform data into actionable insights using advanced analytics and machine learning.',
      skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics']
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'Austin',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for our clients.',
      skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes']
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy and development for our digital solutions platform.',
      skills: ['Product Strategy', 'Agile', 'User Research', 'Analytics', 'Roadmapping']
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain our CI/CD pipelines and infrastructure automation.',
      skills: ['Jenkins', 'GitLab', 'Terraform', 'Ansible', 'Linux']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Build the future of digital innovation with Lumenalta
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Discover opportunities that match your skills and passion
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {job.department} • {job.location}
                    </p>
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {/* No Jobs Found */}
            {jobListings.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No open positions at the moment
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check back later or send us your resume for future opportunities
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Don&apos;t see the right fit?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Send us your resume and we&apos;ll keep you in mind for future opportunities
              </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Submit Resume
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
} 