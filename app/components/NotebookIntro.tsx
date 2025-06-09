'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Box, Typography } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function NotebookIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.fade-in'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <Box
      ref={sectionRef}
      className="w-full bg-[#141217] text-white px-6 md:px-16 py-16 relative"
    >
      {/* Absolute positioned top-left NOTebooks tag */}
      <Box className="absolute top-4 left-6 md:left-16 flex items-center text-green-500 text-sm font-medium gap-1 fade-in">
        <InsertDriveFileOutlinedIcon fontSize="small" />
        <span>NOTEBOOKS</span>
        <ChevronRightIcon fontSize="small" />
      </Box>

      <Box className="flex flex-col lg:flex-row items-start justify-between gap-12 fade-in w-full mt-6">
        {/* Left Side */}
        <Box className="flex-[1_1_50%] space-y-4">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            Fast, flexible,<br />collaborative analytics
          </Typography>
        </Box>

        {/* Right Side */}
        <Box className="flex-[1_1_50%] text-base leading-relaxed fade-in">
          <Typography component="p" className="text-white font-semibold mb-2">
            Hex's notebooks are built for the analyses that actually matter.{' '}
            <span className="text-[#e0a6a1] font-normal">
              With an integrated toolkit, you no longer need to jump between tools to query, predict, transform, and visualize data.
            </span>
          </Typography>

          <Typography component="p" className="text-white font-semibold mt-4">
            SQL and Python, living together in harmony
            <span className="text-[#e0a6a1] font-normal block">
              Go back and forth between queries and scripts, without jumping between tools.
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
