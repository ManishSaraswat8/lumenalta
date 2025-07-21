'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-12 h-7 sm:w-14 sm:h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
      data-cursor-hover
    >
      <motion.div
        animate={{
          x: isDarkMode ? (window.innerWidth < 640 ? 20 : 24) : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        className="w-5 h-5 sm:w-6 sm:h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
      >
        <motion.div
          animate={{
            rotate: isDarkMode ? 180 : 0,
            scale: isDarkMode ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <Moon size={12} className="text-blue-400 sm:w-3.5 sm:h-3.5" />
          ) : (
            <Sun size={12} className="text-yellow-500 sm:w-3.5 sm:h-3.5" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;