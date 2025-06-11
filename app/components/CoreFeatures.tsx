"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Typography } from "@mui/material";
import Image from "next/image";

const features = [
  {
    title: "Explore with point— and—click no—code tools",
    description:
      "Hex makes it easy to filter, pivot, and pass results between steps without writing code.",
    image: "/images/hex-feature-1.png", // ✅ Correct path for public folder
  },
  {
    title: "Magical AI, just a prompt away",
    description:
      "Use Hex’s integrated Magic AI tools to get an intelligent assist, wherever you are.",
    image: "/images/hex-feature-2.png",
  },
  {
    title: "Make data a team sport",
    description:
      "Real-time collaboration, commenting, and version control",
    image: "/images/hex-feature-3.png",
  },
];

export default function CoreFeatures() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-[#0a0a0a] px-10 py-14 text-white">
      {/* Shared border and layout */}
      <div className="border-y border-gray-700 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className="p-6 hover:scale-[1.02] transition-transform duration-300"
          >
            <Typography variant="h6" className="text-white font-semibold mb-4">
              {feature.title}
            </Typography>
            <Typography
              variant="body2"
              className="text-[#f3c1bd] font-medium mb-4"
            >
              {feature.description}
            </Typography>
            <div className="relative w-full h-64">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}