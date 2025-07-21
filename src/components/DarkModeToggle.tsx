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
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
      data-cursor-hover
    >
      <motion.div
        animate={{
          x: isDarkMode ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
      >
        <motion.div
          animate={{
            rotate: isDarkMode ? 180 : 0,
            scale: isDarkMode ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <Moon size={14} className="text-blue-400" />
          ) : (
            <Sun size={14} className="text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;