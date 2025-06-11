'use client';

import React, { useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import gsap from 'gsap';

const IntegrationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <Box
      ref={sectionRef}
      className="max-w-3xl mx-auto px-6 py-12 text-center"
      sx={{ userSelect: 'none' }}
    >
      {/* Bold white text */}
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: 'bold', color: '#fff' }}
        className="mb-4"
      >
        Instant integration with the whole stack
      </Typography>

      {/* Normal light pink text */}
      <Typography
        variant="body1"
        sx={{ color: '#fbcfe8' }} // Tailwind pink-300 hex color approx
      >
        Out-of-the-box connections and flexible APIs make setup a breeze.
      </Typography>
    </Box>
  );
};

export default IntegrationSection;
