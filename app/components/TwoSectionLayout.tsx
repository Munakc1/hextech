"use client";
import React, { useEffect, useRef } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { gsap } from 'gsap';

const TwoSectionLayout: React.FC = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.from(leftRef.current, { duration: 1, x: -100, opacity: 0 });
    }
    if (btnRef.current) {
      gsap.from(btnRef.current, { duration: 1, x: 100, opacity: 0, delay: 0.5 });
    }
  }, []);

  return (
    <Box className="flex h-screen">
      <Box
        ref={leftRef}
        className="w-1/2 p-8 bg-black overflow-auto"
        sx={{ color: 'white' }} // White text here
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Go deeper than dashboards
        </Typography>
        <Typography>
          Hex is the AI-powered analytics workspace built for teams driving faster answers and better decisions.
        </Typography>
      </Box>
      <Box
        className="w-1/2 flex justify-center items-center bg-black"
        sx={{ color: 'white' }} // White text here, in case button text or any text is added later
      >
        <Button ref={btnRef} variant="contained" color="primary">
          {/* Empty button */}
        </Button>
      </Box>
    </Box>
  );
};

export default TwoSectionLayout;
