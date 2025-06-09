"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const announcements = [
  {
    emoji: "🚀",
    heading: "Announcing Hex's $70M Series C:",
    text: "doubling down on the new era of agentic analytics",
    url: "https://hex.tech/blog/series-c/",
  },
  {
    emoji: "🎟",
    heading: "In SF June 2-4 for Summit?",
    text: "join us at Club Hex!",
    url: "https://hex.tech/club-hex/",
  },
  {
    emoji: "❄",
    heading: "Snowflake Summit 2025:",
    text: "how modern data teams are ditching legacy tools and playbooks",
    url: "https://hex.tech/resources/hex-at-snowflake-summit-2025/",
  },
];

const RightArrowIcon: React.FC = () => (
  <svg
    className="ml-1 w-3 h-2 inline-block"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 7"
    aria-hidden="true"
    focusable="false"
    style={{ fill: "yellow" }}
  >
    <path d="m6.146 5.146-.353.354.707.707.354-.353zM8.5 3.5l.354.354.353-.354-.353-.354zM6.854 1.146 6.5.793l-.707.707.353.354zm0 4.708 2-2-.708-.708-2 2zm2-2.708-2-2-.708.708 2 2zM8.5 3H0v1h8.5z" />
  </svg>
);

const AnnouncementBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    content.innerHTML += content.innerHTML; // duplicate content for infinite scroll
    const totalWidth = content.scrollWidth / 2;

    gsap.to(content, {
      x: -totalWidth,
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });

    return () => {
      gsap.killTweensOf(content);
    };
  }, []);

  const renderAnnouncements = () =>
    announcements.map(({ emoji, heading, text, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center font-semibold whitespace-nowrap
          mx-4 sm:mx-6 md:mx-8
          hover:underline
          text-xs sm:text-xs md:text-sm
        "
      >
        <span
          className="mr-1 text-base sm:text-lg text-white"
          aria-hidden="true"
        >
          {emoji}
        </span>
        <span className="text-white font-bold mr-1 text-xs sm:text-sm md:text-sm">
          {heading}
        </span>
        <span className="text-[#f8bbd0] text-xs sm:text-sm md:text-sm">
          {text}
        </span>
        <RightArrowIcon />
      </a>
    ));

  return (
    <div
      className="
        announcement-bar
        bg-[#424242]
        h-6 sm:h-7 md:h-8
        flex items-center overflow-hidden relative
        px-2 sm:px-4 md:px-6
        border border-[#d7ccc8]
      "
      aria-label="announcements"
      role="marquee"
      ref={containerRef}
    >
      <div
        className="announcement-content flex whitespace-nowrap"
        aria-hidden="true"
        ref={contentRef}
        style={{ willChange: "transform" }}
      >
        {renderAnnouncements()}
      </div>
    </div>
  );
};

export default AnnouncementBar;
