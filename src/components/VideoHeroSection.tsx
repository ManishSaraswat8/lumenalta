'use client'

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VideoHeroSectionProps {
  isDarkMode: boolean;
}

const VideoHeroSection: React.FC<VideoHeroSectionProps> = ({ isDarkMode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7) contrast(1.1)' }}
        >
          <source src="https://a-us.storyblok.com/f/1019928/x/7c8f9b258a/brand-video_15s-no-sound.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Large Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4"
          >
            <h2 className="text-lg sm:text-xl font-medium text-white/90 tracking-widest uppercase">
              Digital Transformation
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black leading-none tracking-tight text-white mb-8"
          >
            <span className="block">DIGITAL</span>
            <span className="block">PLAYGROUND</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-4"
          >
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white/30 transition-all duration-200 border border-white/30">
              Get Started
            </button>
            <button className="border-2 border-white/50 text-white px-6 py-3 rounded-full text-lg font-medium hover:border-white hover:bg-white/10 transition-all duration-200">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoHeroSection; 