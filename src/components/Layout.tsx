'use client'

import React from 'react';
import Navigation from './Navigation';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import StructuredData from './StructuredData';
import { useDarkMode } from '../hooks/useDarkMode';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <CustomCursor isDarkMode={isDarkMode} />
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;