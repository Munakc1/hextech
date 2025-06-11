'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const logos = [
  { name: 'Reddit', src: '/images/reddit-logo.svg' },
  { name: 'Notion', src: '/images/notion.svg' },
  { name: 'Anthropic', src: '/images/AllTrails.svg' },
  { name: 'SeatGeek', src: '/images/SeatGeek.svg' },
  { name: 'ClickUp', src: '/images/clickup-logo.svg' },
  { name: 'Algolia', src: '/images/algolia.svg' },
  { name: 'AllTrails', src: '/images/alltrails.svg' },
  { name: 'Modern Treasury', src: '/images/moderntreasury.svg' },
  { name: 'Ramp', src: '/images/ramp-logo.svg' },
  { name: 'Sedgwick', src: '/images/sedgwick-logo.svg' },
  { name: 'Chesapeake', src: '/images/chesapeake-energy-logo.svg' },
  { name: 'Calendly', src: '/images/calendly_logo.svg' },
  { name: 'StubHub', src: '/images/stubhub-logo.svg' },
  { name: 'Greenhouse', src: '/images/Greenhouse.svg' },
  { name: 'OM1', src: '/images/om-logo-svg.svg' },
  { name: 'Paytronix', src: '/images/paytronix.svg' },
  { name: 'Huckberry', src: '/images/huckberry.svg' },
  { name: 'Duolingo', src: '/images/duolingo.svg' },
];

export default function TrustedBySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const logosElements = sectionRef.current.querySelectorAll('.logo-item');
    gsap.fromTo(
      logosElements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  return React.createElement(
    'section',
    {
      ref: sectionRef,
      className: 'bg-black py-2 px-4 sm:px-8 lg:px-20 text-white mt-[1px]',
    },
    React.createElement(
      'div',
      {
        className:
          'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-items-center',
      },
      logos.map((logo, idx) =>
        React.createElement(
          'div',
          { key: idx, className: 'logo-item opacity-0' },
          React.createElement('img', {
            src: logo.src,
            alt: logo.name,
            width: logo.name === 'Notion' ? 60 : 80, // 👈 Smaller size for Notion
            height: logo.name === 'Notion' ? 24 : 30,
            loading: 'lazy',
            style: {
              objectFit: 'contain',
              filter: 'grayscale(100%)',
              transition: 'filter 0.3s',
              cursor: 'pointer',
            },
            onMouseEnter: (e) => {
              (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0)';
            },
            onMouseLeave: (e) => {
              (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%)';
            },
          })
        )
      )
    ),
    React.createElement('hr', {
      className: 'border-t border-gray-700 mt-6 -mx-4 sm:-mx-8 lg:-mx-20',
    })
  );
}
