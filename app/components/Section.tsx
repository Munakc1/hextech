'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gsap from 'gsap';

const LovedSection: React.FC = () => {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      leftCardRef.current,
      { opacity: 0, x: -100, y: 40 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, ease: 'power3.out' }
    );
    gsap.fromTo(
      rightCardRef.current,
      { opacity: 0, x: 100, y: 40 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <Box
      component="section"
      className="bg-black text-white p-10 text-center"
      sx={{ minHeight: '100vh' }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Two Cards Layout
      </Typography>
      <Typography variant="body1" mb={6}>
        Cards aligned left and right with GSAP animation.
      </Typography>

      <div className="flex justify-between max-w-6xl mx-auto flex-wrap gap-6">
        {/* Left Card */}
        <Card
          ref={leftCardRef}
          tabIndex={-1}
          sx={{
            flexBasis: '45%',
            minWidth: 280,
            backgroundColor: '#121212',
            color: '#fff',
            boxShadow: '0 0 15px #00bcd4',
            position: 'relative',
            px: 4,
            py: 5,
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          <StarIcon
            sx={{ position: 'absolute', top: 16, left: 16, color: '#ffeb3b', fontSize: '1.8rem' }}
          />
          <CardContent sx={{ textAlign: 'left', pt: 6 }}>
            <Typography variant="h5" gutterBottom>
              Left Card
            </Typography>
            <Typography variant="body2" mb={3}>
              This card is aligned on the left side.
            </Typography>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />} size="small">
              View
            </Button>
          </CardContent>
        </Card>

        {/* Right Card */}
        <Card
          ref={rightCardRef}
          tabIndex={-1}
          sx={{
            flexBasis: '45%',
            minWidth: 280,
            backgroundColor: '#121212',
            color: '#fff',
            boxShadow: '0 0 15px #00bcd4',
            position: 'relative',
            px: 4,
            py: 5,
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          <StarIcon
            sx={{ position: 'absolute', top: 16, left: 16, color: '#ffeb3b', fontSize: '1.8rem' }}
          />
          <CardContent sx={{ textAlign: 'right', pt: 6 }}>
            <Typography variant="h5" gutterBottom>
              Right Card
            </Typography>
            <Typography variant="body2" mb={3}>
              This card is aligned on the right side.
            </Typography>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon />} size="small">
              View
            </Button>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};

export default LovedSection;
