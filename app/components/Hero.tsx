'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    gsap.from('.hero-subheading', { y: 20, opacity: 0, duration: 1 })
    gsap.from('.hero-heading', { y: 50, opacity: 0, duration: 1, delay: 0.2 })
    gsap.from('.hero-subtext', { y: 30, opacity: 0, duration: 1, delay: 0.4 })
    gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 1, delay: 0.6 })
    gsap.from('.hero-video', { scale: 0.9, opacity: 0, duration: 1, delay: 0.8 })
  }, [])

  // Remove content sliding effect on hover:
  // Commented out or deleted this:
  // useEffect(() => {
  //   if (!contentRef.current) return
  //   if (isHovered) {
  //     gsap.to(contentRef.current, { x: 0, duration: 0.5, ease: 'power2.out' })
  //   } else {
  //     gsap.to(contentRef.current, { x: 30, duration: 0.5, ease: 'power2.out' })
  //   }
  // }, [isHovered])

  useEffect(() => {
    if (!videoRef.current) return

    const video = videoRef.current

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    setIsPlaying(!video.paused)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Optionally pause video on mouse leave if desired
    // if (videoRef.current && !videoRef.current.paused) {
    //   videoRef.current.pause()
    // }
  }

  return (
    <>
      <section className="relative bg-[#0D0D12] text-white pt-12 pb-16 w-full overflow-hidden flex items-center justify-center">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between z-10">
          {/* Left: Text Content */}
          <div
            ref={contentRef}
            className="w-full md:w-1/2 text-center md:text-left transition-transform"
          >
            <p className="hero-subheading text-sm uppercase tracking-widest text-[#B8B3B1] mb-4">
              Trusted by leading data companies
            </p>
            <h1 className="hero-heading text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Go deeper than</span> <br />
              <span className="text-[#E9D4CC]">dashboards</span>
            </h1>
            <p className="hero-subtext mt-6 text-lg text-[#B8B3B1]">
              Hex is the AI-powered analytics workspace built for teams driving faster answers and better decisions.
            </p>
            <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-[#1F1A1A] to-[#3D2D2D] text-white border border-[#453636] px-6 py-3 rounded-xl shadow-md flex items-center gap-2">
                🚀 Get started <ArrowForwardIcon className="text-white" fontSize="small" />
              </Button>
              <Button
                variant="outlined"
                className="border border-dashed border-[#B39E99] px-6 py-3 text-[#E9D4CC] rounded-xl flex items-center gap-2"
              >
                <PlayCircleOutlineIcon className="text-[#E9D4CC]" fontSize="small" />
                Request a demo
              </Button>
            </div>
          </div>

          {/* Right: Video Preview */}
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
                muted={false} // <-- enable sound
                loop
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-16 h-16 rounded-full bg-black bg-opacity-50 cursor-pointer"
                onClick={() => {
                  if (!videoRef.current) return
                  if (videoRef.current.paused) videoRef.current.play()
                  else videoRef.current.pause()
                }}
                aria-label="Toggle Play"
              >
                <PlayCircleOutlineIcon className="text-white" sx={{ fontSize: 36 }} />
                {/* Animated Dotted Circle */}
                <span
                  className={`absolute inset-0 rounded-full border-4 border-dashed border-white ${
                    isPlaying ? 'animate-spin-slow' : ''
                  }`}
                  style={{ transition: 'animation 0.3s ease' }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Full-Width Line with Label (OUTSIDE the section) */}
      <div className="w-full border-t border-[#3A3A3A] relative bg-[#0D0D12] px-4 py-2">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0D0D12] px-3 text-sm text-[#B8B3B1]">
          Trusted by leading data companies
        </span>
      </div>

      <style jsx>{`
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
  )
}
