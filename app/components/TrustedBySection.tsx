'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const logos = [
  { name: 'Reddit', src: '/images/reddit.png' },
  { name: 'Notion', src: '/images/notion.png' },
  { name: 'Anthropic', src: '/images/anthropic.png' },
  { name: 'SeatGeek', src: '/images/seatgeek.png' },
  { name: 'ClickUp', src: '/images/clickup.png' },
  { name: 'Algolia', src: '/images/algolia.png' },
  { name: 'AllTrails', src: '/images/alltrails.png' },
  { name: 'Modern Treasury', src: '/images/moderntreasury.png' },
  { name: 'Ramp', src: '/images/ramp.png' },
  { name: 'Sedgwick', src: '/images/sedgwick.png' },
  { name: 'Chesapeake', src: '/images/chesapeake.png' },
  { name: 'Calendly', src: '/images/calendly.png' },
  { name: 'StubHub', src: '/images/stubhub.png' },
  { name: 'Greenhouse', src: '/images/greenhouse.png' },
  { name: 'OM1', src: '/images/om1.png' },
  { name: 'Paytronix', src: '/images/paytronix.png' },
  { name: 'Huckberry', src: '/images/huckberry.png' },
  { name: 'Duolingo', src: '/images/duolingo.png' },
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
            width: 120,
            height: 40,
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
      className: 'border-t border-gray-700 mt-6 w-full',
    })
  );
}
