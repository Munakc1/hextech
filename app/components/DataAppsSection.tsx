"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Box, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';

export default function DataAppsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <Box
      ref={sectionRef}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#13141C] text-white px-6 py-16 lg:px-24 lg:py-32"
    >
      {/* Left Section */}
      <Box>
        <Box className="flex items-center gap-2 text-yellow-500 text-sm mb-4">
          <ArrowBackIosNew fontSize="small" className="mt-[2px]" />
          <span className="tracking-widest font-medium">DATA APPS</span>
        </Box>
        <Typography variant="h3" className="font-bold leading-tight text-white">
          Powerful, interactive<br />data apps
        </Typography>
        <Typography className="text-[#E6A5A5] text-lg mt-6 max-w-xl">
          From simple reports to complex workflows, easily build apps that allow business stakeholders to understand and take action.
        </Typography>

        <Box className="mt-12 space-y-8">
          <Typography className="text-xl font-semibold text-gray-400">
            From insight to interface
          </Typography>
          <Typography className="text-xl font-semibold text-gray-400">
            Data experiences that actually do something
          </Typography>
          <Typography className="text-xl font-semibold text-gray-400">
            Shorten the feedback loop
          </Typography>
          <Box className="border-l-2 border-yellow-500 pl-4">
            <Typography className="text-xl font-bold">
              Turn one-offs into building blocks
            </Typography>
            <Typography className="text-[#E6A5A5] mt-2">
              Save and reuse components across apps to scale your work without starting from scratch.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Section - Image with 0.5px border */}
      <Box className="flex justify-center items-center mt-12 lg:mt-0 border-[0.5px] border-white/30 rounded-xl p-1">
        <Image
          src="/images/595e6ecb-6cec-4068-9e60-1e5dccc75a12.png"
          alt="Data Apps Visualization"
          width={800}
          height={600}
          className="rounded-xl shadow-lg"
        />
      </Box>
    </Box>
  );
}
