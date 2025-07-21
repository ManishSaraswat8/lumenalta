'use client'

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [mounted]);

  return (
    <Layout>
      <Home />
    </Layout>
  );
} 