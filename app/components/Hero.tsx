"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    gsap.from(".hero-subheading", { y: 20, opacity: 0, duration: 1 });
    gsap.from(".hero-heading", { y: 50, opacity: 0, duration: 1, delay: 0.2 });
    gsap.from(".hero-subtext", { y: 30, opacity: 0, duration: 1, delay: 0.4 });
    gsap.from(".hero-buttons", { y: 20, opacity: 0, duration: 1, delay: 0.6 });
    gsap.from(".hero-video", { scale: 0.9, opacity: 0, duration: 1, delay: 0.8 });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    setIsPlaying(!video.paused);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <section className="relative bg-[#0D0D12] text-white pt-12 pb-16 w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div ref={contentRef} className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="hero-heading text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Go deeper than</span> <br />
              <span className="text-[#E9D4CC]">dashboards</span>
            </h1>
            <p className="hero-subtext mt-6 text-lg text-[#B8B3B1]">
              Hex is the AI-powered analytics workspace built for teams driving faster answers and better
              decisions.
            </p>
            <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Get started button */}
              <a
                href="https://app.hex.tech/signup?source=hero"
                className="bg-gradient-to-r from-[#1F1A1A] to-[#3D2D2D] text-white border border-[#453636] px-6 py-3 rounded-xl shadow-md flex items-center gap-2 text-lg no-underline hover:text-white"
              >
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M2.5 11.5L6.75 7L9 9.5L13 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="1"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  ></path>
                  <path
                    d="M10.5 4.5H13.5V7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="1"
                  ></path>
                </svg>
                Get started
              </a>

              {/* Use Client button */}
              <a
                href="/use-client"
                className="bg-gradient-to-r from-[#1F1A1A] to-[#3D2D2D] text-white border border-[#453636] px-6 py-3 rounded-xl shadow-md flex items-center gap-2 text-lg no-underline hover:text-white"
              >
                <ArrowForwardIcon fontSize="small" />
                Request a demo
              </a>

              {/* Request a demo MUI Button */}
           
            </div>
          </div>

          <div
            className="hero-video w-full md:w-1/2 mt-12 md:mt-0 md:ml-12 flex justify-center relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full max-w-2xl p-3 border-4 border-[#4A4A4A] rounded-2xl shadow-2xl relative">
              <video
                ref={videoRef}
                className="w-full rounded-xl border border-[#2A2A2E]"
                controls
                poster="/images/preview-thumbnail.png"
                muted={false}
                loop
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-16 h-16 rounded-full bg-black bg-opacity-50 cursor-pointer"
                onClick={() => {
                  if (!videoRef.current) return;
                  videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
                }}
                aria-label="Toggle Play"
              >
                <PlayCircleOutlineIcon className="text-white" sx={{ fontSize: 36 }} />
                <span
                  className={`absolute inset-0 rounded-full border-4 border-dashed border-white ${
                    isPlaying ? "animate-spin-slow" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full border-t border-[#3A3A3A] relative bg-[#0D0D12] px-4 py-2">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0D0D12] px-3 text-sm text-[#B8B3B1]">
          Trusted by leading data companies
        </span>
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-color: #0d0d12;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
