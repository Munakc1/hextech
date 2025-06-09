"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import {
  BarChart,
  InsertChartOutlined,
  DashboardCustomizeOutlined,
  Security,
  Hub,
  AutoAwesome,
  Group
} from "@mui/icons-material";
import gsap from "gsap";

const features = [
  {
    icon: <InsertChartOutlined sx={{ fontSize: 40, color: "#80cbc4" }} />,
    title: "NOTEBOOKS",
    subtitle: "Deep-dive analysis:",
    description:
      "Explore the new, novel, and gnarly in an AI-powered, multiplayer notebook where Python, SQL, and no-code live together."
  },
  {
    icon: <DashboardCustomizeOutlined sx={{ fontSize: 40, color: "#ffd54f" }} />,
    title: "DATA APPS",
    subtitle: "Publish and share:",
    description:
      "Turn analyses into beautiful experiences for stakeholders to pull insights and provide feedback."
  },
  {
    icon: <BarChart sx={{ fontSize: 40, color: "#ce93d8" }} />,
    title: "SELF-SERVE",
    subtitle: "Self serve exploration:",
    description:
      "Get answers quickly in a point-and-click experience, on top of governed data and semantic models."
  }
];

const pillars = [
  { icon: <AutoAwesome sx={{ fontSize: 30, color: "#f48fb1" }} />, label: "Magic AI" },
  { icon: <Group sx={{ fontSize: 30, color: "#b2dfdb" }} />, label: "Collaboration" },
  { icon: <Hub sx={{ fontSize: 30, color: "#81d4fa" }} />, label: "Integration" },
  { icon: <Security sx={{ fontSize: 30, color: "#fbc02d" }} />, label: "Security" }
];

export default function AnalyticsAndPlatform() {
  const analyticsRef = useRef(null);
  const platformRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      analyticsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      platformRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <>
      {/* Analytics Section */}
      <Box ref={analyticsRef} className="bg-[#0d0d12] text-white py-20 px-6 md:px-20">
        <Typography
          variant="h2"
          className="text-center text-white font-bold text-4xl md:text-5xl mb-6"
        >
          One home for <span className="text-[#f8bbd0]">analytics, AI, and apps</span>
        </Typography>
        <Typography
          variant="body1"
          className="text-center text-[#e0bfc2] max-w-3xl mx-auto text-lg mb-20"
        >
          Hex allows teams to work together across one platform, making it easy to find answers in
          your data, share them with stakeholders, and make decisions with confidence.
        </Typography>

        {/* Added mt-4 to increase spacing between text and cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-4">
          {features.map((feature, index) => (
            <Box
              key={index}
              className="bg-[#1a1a24] p-8 min-h-[300px] rounded-xl shadow-md border border-[#333] hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <Typography
                variant="subtitle2"
                className="text-[#80cbc4] uppercase tracking-widest text-sm mb-1"
              >
                {feature.title}
              </Typography>
              <Typography variant="subtitle1" className="font-bold text-white mb-2">
                {feature.subtitle}
              </Typography>
              <Typography variant="body2" className="text-[#cccccc]">
                {feature.description}
              </Typography>
            </Box>
          ))}
        </div>
      </Box>

      {/* Platform Pillars Section */}
      <Box
        ref={platformRef}
        className="relative bg-[#0a0a0f] text-white py-24 px-4 md:px-8 flex flex-col items-center"
      >
        {/* Connecting vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-16 w-px bg-[#4e4e4e] z-0" />

        {/* Title box */}
        <div className="border border-[#bfaea6] px-5 py-1 text-sm tracking-widest text-[#d7ccc8] mb-16 z-10 bg-[#0a0a0f]">
          UNDERLYING HEX PLATFORM
        </div>

        {/* Pillars grid with middle card aligned */}
        <div className="relative w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-12 z-10">
          {pillars.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center space-y-2 ${
                index === 1 ? "relative z-20" : ""
              }`}
            >
              {/* vertical line behind middle card */}
              {index === 1 && (
                <div className="absolute inset-0 flex justify-center z-0">
                  <div className="w-1 h-full bg-[#4e4e4e]"></div>
                </div>
              )}
              <div className="z-10">{item.icon}</div>
              <Typography variant="body2" className="text-[#d7ccc8] tracking-wide z-10">
                {item.label}
              </Typography>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
}
