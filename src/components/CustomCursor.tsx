'use client'

import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  isDarkMode: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isDarkMode }) => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add cursor tracking
    document.addEventListener('mousemove', updateMousePosition);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed w-4 h-4 ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
        } rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `translate3d(0, 0, 0)`,
        }}
      />
      
      {/* Cursor trail */}
      <div
        className={`fixed w-8 h-8 border-2 ${
          isDarkMode ? 'border-blue-400' : 'border-blue-500'
        } rounded-full pointer-events-none z-40 transition-all duration-300`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `translate3d(0, 0, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;