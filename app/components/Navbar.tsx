"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {
  PiPencilSimpleLine,
  PiSquaresFourLight,
  PiMapPinLight,
  PiWarningCircleLight,
  PiSlidersHorizontal,
  PiCaretDownLight,
} from "react-icons/pi";

const navItems = [
  {
    label: "Product",
    icon: PiPencilSimpleLine,
    href: "#",
    dropdown: [
      { label: "Overview", href: "/product/overview" },
      { label: "Features", href: "/product/features" },
      { label: "Integrations", href: "/product/integrations" },
    ],
  },
  {
    label: "Use cases",
    icon: PiSquaresFourLight,
    href: "#",
    dropdown: [
      { label: "Marketing", href: "/use-cases/marketing" },
      { label: "Sales", href: "/use-cases/sales" },
      { label: "Support", href: "/use-cases/support" },
    ],
  },
  {
    label: "Enterprise",
    icon: PiMapPinLight,
    href: "/enterprise",
  },
  {
    label: "Resources",
    icon: PiWarningCircleLight,
    href: "#",
    dropdown: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Docs", href: "/resources/docs" },
      { label: "Tutorials", href: "/resources/tutorials" },
    ],
  },
  {
    label: "Pricing",
    icon: PiSlidersHorizontal,
    href: "/pricing",
  },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    const handleScroll = () => {
      setShowBorder(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full ${
        showBorder ? "border-b-[0.5px] border-[#f8bbd0]" : "border-b-0"
      }`}
    >
      <nav
        ref={navRef}
        className="sticky top-0 z-50 w-full bg-[#16141f] text-[#f3bfc5] font-light text-sm py-4 px-6 flex justify-center transition-all duration-300"
      >
        <div className="flex items-center gap-6 relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const hasDropdown = Array.isArray(item.dropdown);

            return (
              <div
                key={item.label}
                className="relative"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                  className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
                >
                  <Icon className="text-md" />
                  <span>{item.label}</span>
                  {hasDropdown && (
                    <PiCaretDownLight className="ml-1 text-sm" aria-hidden="true" />
                  )}
                </button>

                {hasDropdown && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-40 bg-[#1f1e2a] border border-gray-700 rounded-md shadow-lg z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown!.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block px-4 py-2 text-[#f3bfc5] hover:bg-[#f3bfc5]/20 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="mx-6 text-2xl font-bold tracking-wide select-none">HEX</div>

          <Link
            href="#"
            className="text-[#f3bfc5] hover:text-white transition-colors"
          >
            Log In
          </Link>

          <Link href="#">
            <div className="relative inline-block group px-5 py-2 text-xs font-semibold uppercase text-[#f3bfc5] border border-[#f3bfc5] overflow-visible">
              <span className="absolute -top-[3px] -left-[3px] w-[12px] h-[1px] bg-[#f3bfc5] rounded-full group-hover:rounded-none transition-all duration-300 ease-in-out"></span>
              <span className="absolute -top-[3px] -right-[3px] w-[12px] h-[1px] bg-[#f3bfc5] rounded-full group-hover:rounded-none transition-all duration-300 ease-in-out"></span>
              <span className="absolute -bottom-[3px] -left-[3px] w-[12px] h-[1px] bg-[#f3bfc5] rounded-full group-hover:rounded-none transition-all duration-300 ease-in-out"></span>
              <span className="absolute -bottom-[3px] -right-[3px] w-[12px] h-[1px] bg-[#f3bfc5] rounded-full group-hover:rounded-none transition-all duration-300 ease-in-out"></span>

              <span className="absolute inset-y-[4px] left-[-1px] w-[calc(100%+2px)] bg-[#212121] transition-transform duration-300 ease-in-out group-hover:scale-y-0 origin-top"></span>
              <span className="absolute inset-x-[4px] top-[-1px] h-[calc(100%+2px)] bg-[#212121] transition-transform duration-300 ease-in-out group-hover:scale-x-0 origin-left delay-150"></span>

              <span className="relative z-10">Get started</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
