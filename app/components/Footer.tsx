'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      const columns = footerRef.current.querySelectorAll(".footer-column");
      gsap.from(columns, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
      });

      // Only animate the 🥨 emoji
      const pretzelEmoji = footerRef.current.querySelectorAll(".emoji-bounce");
      gsap.to(pretzelEmoji, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    }
  }, []);

  return React.createElement(
    'footer',
    {
      ref: footerRef,
      className: 'bg-[#141217] text-[#FAD8C0] pt-12 pb-16 border-t-1 border-t-[#574D57]'
    },
    React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'div',
        { className: 'max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm' },
        renderColumn(),
        renderList('Company', ['Careers', 'Customers', 'Media kit', 'Newsroom']),
        renderList('Product', ['Notebooks', 'Explore', 'Hex Magic', 'Enterprise', 'For Teams', 'App Builder', 'Pricing', 'Integrations', 'Security']),
        renderList('Resources', ['Blog', 'Docs', 'Quickstart', 'Resources', 'Templates', 'Changelog', 'Trust Center']),
        renderList('Contact', ['Support', 'Sales', 'Twitter', 'Email us'])
      ),
      React.createElement(
        'div',
        { className: 'mt-16 pt-6 text-xs text-[#BCAAA4] flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8' },
        React.createElement('p', null, '© 2025 Hex Technologies Inc.'),
        React.createElement(
          'div',
          { className: 'flex space-x-4 mt-2 md:mt-0' },
          React.createElement('a', { href: '#' }, 'Privacy policy'),
          React.createElement('a', { href: '#' }, 'Terms & conditions'),
          React.createElement('a', { href: '#' }, 'Modern slavery statement')
        )
      )
    )
  );
};

// Column for HEX title and emojis
function renderColumn() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', { className: 'text-3xl font-bold font-mono mb-2' }, 'HEX'),
    React.createElement(
      'p',
      { className: 'text-[#BCAAA4]' },
      'Made with ',
      React.createElement('span', { className: 'emoji-bounce text-orange-500 inline-block' }, '🥨'),
      ' on ',
      React.createElement('span', { className: 'text-blue-400 inline-block' }, '🌍'),
      '.'
    )
  );
}

// Generic list section
function renderList(title: string, items: string[]) {
  return React.createElement(
    'div',
    { className: 'footer-column' },
    React.createElement(
      'h3',
      { className: 'text-[#FAD8C0] font-bold mb-2 uppercase text-xs tracking-wider' },
      title
    ),
    React.createElement(
      'ul',
      { className: 'space-y-1' },
      ...items.map((item, i) => React.createElement('li', { key: `${title}-${i}` }, item))
    )
  );
}

export default Footer;
