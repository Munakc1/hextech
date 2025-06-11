"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";

const cards = [
  {
    title: "Next.js 14",
    description: "The power of full-stack to the frontend. Read the release notes.",
    image: (
      <img
        src="https://nextjs.org/static/favicon/favicon-32x32.png"
        alt="Next.js logo"
        className="w-20 h-20 object-contain"
      />
    ),
  },
  {
    title: "React 19",
    description: "Unlock new possibilities with React's latest version.",
    image: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React logo"
        className="w-20 h-20 object-contain"
      />
    ),
  },
  {
    title: "Tailwind CSS 3",
    description: "Build modern UIs effortlessly with Tailwind CSS.",
    image: (
      <img
        src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype.e1f7bb77.svg"
        alt="Tailwind CSS logo"
        className="w-20 h-20 object-contain"
      />
    ),
  },
  {
    title: "TypeScript 5",
    description: "Type safety and better tooling with TypeScript 5.",
    image: (
      <img
        src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
        alt="TypeScript logo"
        className="w-20 h-20 object-contain"
      />
    ),
  },
  {
    title: "GSAP 4",
    description: "Smooth animations powered by GSAP 4.",
    image: (
      <img
        src="https://greensock.com/uploads/logo-gsap.svg"
        alt="GSAP logo"
        className="w-20 h-20 object-contain"
      />
    ),
  },
  {
    title: "Material UI 5",
    description: "Beautiful React components out of the box.",
    image: (
      <img
        src="https://mui.com/static/logo.png"
        alt="Material UI logo"
        className="w-20 h-20 object-contain"
      />
    ),
  },
];

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-4 w-4 text-white stroke-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
);

const GlowingStarsCard: React.FC<{
  title: string;
  description: string;
  image: React.ReactNode;
  index: number;
}> = ({ title, description, image, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.15,
        }
      );
    }
  }, [index]);

  return (
    <Box
      ref={cardRef}
      className="bg-black bg-opacity-90 rounded-xl p-8 max-w-xs flex flex-col justify-between shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
      sx={{ width: 350, height: 420, borderStyle: "solid", borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.1)" }}
    >
      {/* Upper image section */}
      <Box className="flex justify-center mb-6">{image}</Box>

      {/* Lower text section */}
      <Typography
        variant="h5"
        component="h3"
        className="text-white font-extrabold mb-4"
      >
        {title}
      </Typography>
      <Typography variant="body2" className="text-pink-300 mb-6">
        {description}
      </Typography>

      <Box className="flex items-center justify-end bg-white/10 rounded-full h-8 w-8 cursor-pointer hover:bg-white/20 transition-colors duration-300">
        <Icon />
      </Box>
    </Box>
  );
};

export function GlowingStarsGrid() {
  return (
    <Box
      className="bg-black min-h-screen flex flex-col items-center justify-center py-20 px-4"
      sx={{ minHeight: "100vh" }}
    >
      {/* Grid for cards */}
      <Box
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-7xl w-full"
        sx={{ maxWidth: 1200 }}
      >
        {cards.map((card, i) => (
          <GlowingStarsCard
            key={i}
            title={card.title}
            description={card.description}
            image={card.image}
            index={i}
          />
        ))}
      </Box>
    </Box>
  );
}
