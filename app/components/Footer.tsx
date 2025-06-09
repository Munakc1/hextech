'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      const columns = footerRef.current.querySelectorAll('.footer-column');
      gsap.from(columns, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
      });

      // Bouncing animation removed since emoji is now static
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#141217] text-[#FAD8C0] pt-12 pb-16"
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-start px-4 sm:px-8 space-x-8">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
                      gap-6 sm:gap-8 md:gap-10
                      text-sm w-full max-w-[900px]`}
        >
          {renderColumn()}
          {renderList('Company', [
            'Careers',
            'Customers',
            'Media kit',
            'Newsroom',
          ])}
          {renderList('Product', [
            'Notebooks',
            'Explore',
            'Hex Magic',
            'Enterprise',
            'For Teams',
            'App Builder',
            'Pricing',
            'Integrations',
            'Security',
          ])}
          {renderList('Resources', [
            'Blog',
            'Docs',
            'Quickstart',
            'Resources',
            'Templates',
            'Changelog',
            'Trust Center',
          ])}
          {renderList('Contact', ['Support', 'Sales', 'Twitter', 'Email us'])}
        </div>

        {/* HitCounter Box on the right */}
        <div className="hit-counter-container select-none">
          <div className="HitCounter__DigitWrapper-sc-g45cjz-3 iveCzJ">
            <div className="HitCounter__Col-sc-g45cjz-4 ytQlX">
              <div className="HitCounter__Line-sc-g45cjz-5 jtWfTS"></div>
              <div className="HitCounter__Line-sc-g45cjz-5 jtWfTS"></div>
            </div>
            <div className="HitCounter__Col-sc-g45cjz-4 cBGzoS">
              <div className="HitCounter__Line-sc-g45cjz-5 lnrQBe"></div>
              <div className="HitCounter__Line-sc-g45cjz-5 lnrQBe"></div>
              <div className="HitCounter__Line-sc-g45cjz-5 lnrQBe"></div>
            </div>
            <div className="HitCounter__Col-sc-g45cjz-4 ytQlX">
              <div className="HitCounter__Line-sc-g45cjz-5 jtWfTS"></div>
              <div className="HitCounter__Line-sc-g45cjz-5 jtWfTS"></div>
            </div>
          </div>
          {/* Add more digit wrappers as needed */}
        </div>
      </div>

      <div
        className={`
          mt-16 pt-6 text-xs text-[#BCAAA4]
          flex flex-col md:flex-row
          justify-between items-center
          px-4 sm:px-8
          max-w-[1200px] mx-auto
          w-full
          space-y-3 md:space-y-0
        `}
      >
        <p>© 2025 Hex Technologies Inc.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Terms & conditions
          </a>
          <a href="#" className="hover:underline">
            Modern slavery statement
          </a>
        </div>
      </div>

      <style jsx>{`
        .hit-counter-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 140px;
          user-select: none;
        }
        .HitCounter__DigitWrapper-sc-g45cjz-3 {
          display: flex;
          gap: 4px;
        }
        .HitCounter__Col-sc-g45cjz-4 {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .HitCounter__Line-sc-g45cjz-5 {
          width: 10px;
          height: 4px;
          background-color: #fad8c0;
          border-radius: 1px;
        }
        .jtWfTS {
          background-color: #fad8c0;
        }
        .lnrQBe {
          background-color: #bcaaa4;
        }
      `}</style>
    </footer>
  );
};

function renderColumn() {
  return (
    <div>
      <h1 className="text-3xl font-bold font-mono mb-2">HEX</h1>
      <p className="text-[#BCAAA4]">
        Made with{' '}
        <span className="text-orange-500 inline-block">🥨</span> on{' '}
        <span className="text-blue-400 inline-block">🌍</span>.
      </p>
    </div>
  );
}

function renderList(title: string, items: string[]) {
  return (
    <div className="footer-column" key={title}>
      <h3 className="text-[#FAD8C0] font-bold mb-2 uppercase text-xs tracking-wider">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={`${title}-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
