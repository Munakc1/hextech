'use client';

import { useEffect, useRef } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.left-quote', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.left-quote',
          start: 'top 80%',
        },
      });

      gsap.from('.right-quote', {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.right-quote',
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full px-6 md:px-20 py-16 bg-[#0D1117] text-white flex flex-col md:flex-row gap-12"
    >
      {/* Left Testimonial */}
      <Box className="left-quote w-full md:w-1/2">
        <Stack direction="row" alignItems="center" spacing={2} className="mb-4">
          <Image src="/images/huckberry-logo.png" alt="Huckberry Logo" width={40} height={40} />
          <Typography variant="h6" className="text-gray-200 font-semibold">
            Huckberry
          </Typography>
        </Stack>
        <Typography variant="h6" className="mb-4 font-medium leading-relaxed text-gray-200">
          “We generated over a million dollars in value from a leaner, more precise replenishment model.”
        </Typography>
        <Typography variant="subtitle2" className="text-gray-400 mt-2">
          Ben S.<br />
          Director, Data & Analytics, Huckberry
        </Typography>
      </Box>

      {/* Right Testimonial */}
      <Box className="right-quote w-full md:w-1/2">
        <Stack direction="row" alignItems="center" spacing={2} className="mb-4">
          <Image src="/images/clickup-logo.png" alt="ClickUp Logo" width={40} height={40} />
          <Typography variant="h6" className="text-gray-200 font-semibold">
            ClickUp
          </Typography>
        </Stack>
        <Typography variant="h6" className="mb-4 font-medium leading-relaxed text-gray-200">
          “We needed a tool with the flexibility for anyone on any team to explore and build segments related to their part of the business. Hex unlocks that for ClickUp and has helped our teams save millions of dollars in churn.”
        </Typography>
        <Typography variant="subtitle2" className="text-gray-400 mt-2">
          Sai S.<br />
          Head of Growth Strategy & Ops, ClickUp
        </Typography>
      </Box>
    </div>
  );
};

export default Testimonials;
