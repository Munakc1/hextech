"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = (): JSX.Element => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    if (footerRef.current) {
      const columns = footerRef.current.querySelectorAll(".footer-column");
      gsap.from(columns, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
      });

      const emojis = footerRef.current.querySelectorAll(".emoji");
      gsap.to(emojis, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#141217] text-[#FAD8C0] pt-12 pb-16 border-t-2 border-t-[#574D57]"
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        <div>
          <h1 className="text-3xl font-bold font-mono mb-2">HEX</h1>
          <p className="text-[#BCAAA4]">
            Made with <span className="emoji text-orange-500 inline-block">🥨</span> on{" "}
            <span className="emoji text-blue-400 inline-block">🌍</span>.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="text-[#FAD8C0] font-bold mb-2 uppercase text-xs tracking-wider">
            Company
          </h3>
          <ul className="space-y-1">
            <li>Careers</li>
            <li>Customers</li>
            <li>Media kit</li>
            <li>Newsroom</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="text-[#FAD8C0] font-bold mb-2 uppercase text-xs tracking-wider">
            Product
          </h3>
          <ul className="space-y-1">
            <li>Notebooks</li>
            <li>Explore</li>
            <li>Hex Magic</li>
            <li>Enterprise</li>
            <li>For Teams</li>
            <li>App Builder</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="text-[#FAD8C0] font-bold mb-2 uppercase text-xs tracking-wider">
            Resources
          </h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Docs</li>
            <li>Quickstart</li>
            <li>Resources</li>
            <li>Templates</li>
            <li>Changelog</li>
            <li>Trust Center</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="text-[#FAD8C0] font-bold mb-2 uppercase text-xs tracking-wider">
            Contact
          </h3>
          <ul className="space-y-1">
            <li>Support</li>
            <li>Sales</li>
            <li>Twitter</li>
            <li>Email us</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-6 text-xs text-[#BCAAA4] flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8">
        <p>© 2025 Hex Technologies Inc.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Modern slavery statement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
