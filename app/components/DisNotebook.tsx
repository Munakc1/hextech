'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DisNotebook = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.left-section', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.left-section',
          start: 'top 80%',
        },
      });

      gsap.from('.right-section', {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.right-section',
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row w-full h-auto items-center justify-between px-4 md:px-20 py-10 gap-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Section - With Spacing */}
      <div className="left-section w-full md:w-1/3 flex flex-col justify-between text-white min-h-[300px] p-4">
        {/* Top Text */}
        <div>
          <Typography variant="h5" className="font-bold mb-4">
            SQL and Python living together in harmony
          </Typography>
          <Typography variant="body1" className="text-gray-300">
            Go back and forth between query and script without jumping between tools.
          </Typography>
        </div>

        {/* Bottom Button */}
        <div className="pt-6">
          <Button
            variant="outlined"
            className={`w-fit border-white text-white normal-case transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            endIcon={<ArrowForwardIosIcon style={{ fontSize: 14 }} />}
          >
            Discover Notebooks
          </Button>
        </div>
      </div>

      {/* Right Section - Image */}
      <Box className="right-section w-full md:w-2/3 relative border border-white/50">
        <Image
          src="/images/notebook-sample.jpg"
          alt="Notebook Preview"
          width={800}
          height={500}
          className="rounded-lg object-cover w-full h-auto"
        />
      </Box>
    </div>
  );
};

export default DisNotebook;
