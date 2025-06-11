"use client";
import React, { useEffect, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { gsap } from 'gsap';

const GetStartedPlans: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBtnRef = useRef<HTMLButtonElement>(null);
  const rightBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (leftBtnRef.current && rightBtnRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });
      tl.from(leftBtnRef.current, { x: -50, opacity: 0 })
        .from(rightBtnRef.current, { x: 50, opacity: 0 }, '-=0.8');
    }
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: '#000',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4,
        maxWidth: 1100,
        mx: 'auto',
        px: 6,
        py: 8,
        flexWrap: 'wrap',
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          minWidth: 280,
          pr: { xs: 0, md: 4 },
          borderRight: { xs: 'none', md: '1px solid #333' },
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Getting started is easy.
        </Typography>
        <Typography variant="body1" mb={2} sx={{ color: '#ccc' }}>
          Connect Hex to your data warehouse and do more with it immediately.
        </Typography>
        <Button
          ref={leftBtnRef}
          variant="contained"
          color="primary"
          size="large"
        >
          Get Started
        </Button>
      </Box>

      {/* Right Section */}
      <Box sx={{ flex: 1, minWidth: 280, pl: { xs: 0, md: 4 } }}>
        <Typography variant="h6" fontWeight="medium" gutterBottom>
          Check out all of our plans to fit your team or organization.
        </Typography>
        <Button
          ref={rightBtnRef}
          variant="outlined"
          color="secondary"
          size="large"
          sx={{ color: 'white', borderColor: '#888' }}
        >
          View Plans
        </Button>
      </Box>
    </Box>
  );
};

export default GetStartedPlans;
