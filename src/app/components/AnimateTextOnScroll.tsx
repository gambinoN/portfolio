'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimateTextOnScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [backgroundChange, setBackgroundChange] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    // Change background after scrolling down 500px, adjust as needed
    if (window.scrollY > 500) {
      setBackgroundChange(true);
    } else {
      setBackgroundChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div
      className="scroll-container"
      style={{
        height: '200vh', // Simulate scrollable content
        backgroundColor: backgroundChange ? '#1a1a1a' : '#ffffff',
        transition: 'background-color 0.6s ease'
      }}
    >
      <motion.div
        className="text-container"
        initial="hidden"
        animate={scrollY > 100 ? 'visible' : 'hidden'}
        variants={textVariants}
        style={{
          fontSize: '3rem',
          textAlign: 'center',
          marginTop: '20vh',
          color: backgroundChange ? '#fff' : '#000'
        }}
      >
        Animate on Scroll Text
      </motion.div>
    </div>
  );
};

export default AnimatedTextOnScroll;
