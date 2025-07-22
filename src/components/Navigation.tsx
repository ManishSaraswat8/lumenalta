'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownContent?: {
    type: 'simple' | 'complex';
    items?: string[];
    sections?: {
      title: string;
      items: string[];
    }[];
    card?: {
      title: string;
      description: string;
    };
  };
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

  // URL mapping function to ensure correct paths
  const getUrlPath = (basePath: string, itemName: string, sectionTitle?: string): string => {
    const urlMap: { [key: string]: string } = {
      // Services
      'AI, ML & LLM': 'ai-ml-llm',
      'Cloud & infrastructure modernization': 'cloud-infrastructure-modernization',
      'Data modernization': 'data-modernization',
      'Platform & application development': 'platform-application-development',
      'Tech strategy & advisory': 'tech-strategy-advisory',
      'UX & UI design': 'ux-ui-design',
      
      // Industries
      'Financial services': 'financial-services',
      'Consumer': 'consumer',
      'Healthcare': 'healthcare',
      'Private equity': 'private-equity',
      'Telecommunications, media & technology': 'telecommunications-media-technology',
      'Transportation & logistics': 'transportation-logistics',
      
      // About
      'About us': 'about-us',
      'Leadership': 'leadership',
      'Newsroom': 'newsroom',
      
      // Insights
      'Insights Hub': 'insights-hub',
      'Lumenalta Labs': 'lumenalta-labs',
      
      // Careers
      'Jobs': 'jobs',
      'Culture': 'culture',
      
      // Case studies
      'All case studies': 'all-case-studies',
      'By industry': 'by-industry',
      'By service': 'by-service',
      'Success stories': 'success-stories'
    };

    // Determine the correct base path based on section title
    let correctBasePath = basePath;
    if (sectionTitle === 'INDUSTRIES') {
      correctBasePath = '/industries';
    } else if (sectionTitle === 'SERVICES') {
      correctBasePath = '/services';
    }

    return `${correctBasePath}/${urlMap[itemName] || itemName.toLowerCase().replace(/\s+/g, '-').replace(/[&,]/g, '')}`;
  };

  const navItems: NavItem[] = [
    { 
      name: 'Expertise', 
      href: '/services',
      hasDropdown: true,
      dropdownContent: {
        type: 'complex',
        sections: [
          {
            title: 'SERVICES',
            items: [
              'AI, ML & LLM',
              'Cloud & infrastructure modernization',
              'Data modernization',
              'Platform & application development',
              'Tech strategy & advisory',
              'UX & UI design'
            ]
          },
          {
            title: 'INDUSTRIES',
            items: [
              'Financial services',
              'Consumer',
              'Healthcare',
              'Private equity',
              'Telecommunications, media & technology',
              'Transportation & logistics'
            ]
          },
          {
            title: 'APPROACH',
            items: []
          }
        ],
        card: {
          title: 'Our Approach',
          description: 'Learn about Lumenalta\'s unique approach'
        }
      }
    },
    { 
      name: 'Case studies', 
      href: '/solutions',
      hasDropdown: true,
      dropdownContent: {
        type: 'simple',
        items: [
          'All case studies',
          'By industry',
          'By service',
          'Success stories'
        ]
      }
    },
    { 
      name: 'About', 
      href: '/about',
      hasDropdown: true,
      dropdownContent: {
        type: 'simple',
        items: [
          'About us',
          'Leadership',
          'Newsroom'
        ]
      }
    },
    { 
      name: 'Insights', 
      href: '/blog',
      hasDropdown: true,
      dropdownContent: {
        type: 'simple',
        items: [
          'Insights Hub',
          'Lumenalta Labs'
        ]
      }
    },
    { 
      name: 'Careers', 
      href: '/careers',
      hasDropdown: true,
      dropdownContent: {
        type: 'simple',
        items: [
          'Jobs',
          'Culture'
        ]
      }
    },
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const renderDropdownContent = (item: NavItem) => {
    if (!item.dropdownContent) return null;

    if (item.dropdownContent.type === 'simple') {
      return (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
          {item.dropdownContent.items?.map((dropdownItem, index) => (
            <Link
              key={index}
              href={getUrlPath(item.href, dropdownItem)}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
            >
              {dropdownItem}
            </Link>
          ))}
        </div>
      );
    }

    if (item.dropdownContent.type === 'complex') {
      return (
        <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-8">
          <div className="grid grid-cols-3 gap-8">
            {item.dropdownContent.sections?.map((section, index) => (
              <div key={index}>
                <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-4">
                  {section.title}
                </h3>
                {section.title === 'APPROACH' ? (
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {item.dropdownContent?.card?.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {item.dropdownContent?.card?.description}
                    </p>
                    <div className="flex items-center">
                      <div className="flex-1 h-0.5 bg-purple-500"></div>
                      <Star className="text-purple-500 w-6 h-6 ml-2" />
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {section.items?.map((itemName, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={getUrlPath(item.href, itemName, section.title)}
                          className="text-gray-800 hover:text-purple-600 transition-colors duration-200"
                        >
                          {itemName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed w-full top-0 z-40 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 transition-colors duration-300"
    >
      {/* Top Banner */}
      <div className="bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center text-white text-sm font-medium"
            >
              <span>Lumenalta&apos;s celebrating 25 years of innovation.</span>
              <Link href="/about" className="ml-2 flex items-center hover:text-blue-300 transition-colors duration-200">
                <span>Learn more</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Star className="text-white w-6 h-6 mr-2" />
              <h1 className="text-xl sm:text-2xl font-bold text-white cursor-pointer transition-colors duration-300" data-cursor-hover>
                lumenalta
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                        pathname === item.href
                          ? 'text-white border border-white rounded'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      data-cursor-hover
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown size={12} className="mt-0.5" />
                      )}
                    </motion.div>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && item.hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        {renderDropdownContent(item)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-200 min-h-[44px] flex items-center justify-center gap-2"
                data-cursor-hover
              >
                Contact us
                <ArrowRight size={14} />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Theme Toggle - Always Visible */}
          <div className="lg:hidden flex items-center gap-2">
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            
            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-300 p-2.5 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-white/10"
              data-cursor-hover
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-gray-900/95 backdrop-blur-md transition-colors duration-300"
          >
            <div className="px-3 pt-3 pb-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg min-h-[44px] flex items-center justify-between ${
                      pathname === item.href
                        ? 'text-white bg-white/10 border border-white/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    data-cursor-hover
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown size={16} />
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown Content */}
                  {item.hasDropdown && item.dropdownContent && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownContent.type === 'simple' && item.dropdownContent.items?.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          href={getUrlPath(item.href, dropdownItem)}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link href="/contact">
                  <button
                    className="w-full border border-white text-white px-4 py-3 rounded text-base font-medium hover:bg-white hover:text-gray-900 transition-all duration-200 min-h-[44px] flex items-center justify-center gap-2"
                    data-cursor-hover
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact us
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;