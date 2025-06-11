"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent, Typography, Box as MUIBox } from "@mui/material";
import {
  Box,
  Lock,
  Search,
  Settings,
  Sparkles,
  Shield,
  Lightbulb,
  Cloud,
} from "lucide-react";
import gsap from "gsap";

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

type CardInfo = {
  area: string;
  icon: React.ReactElement;
  title: string;
  description: string;
};

const cards: CardInfo[] = [
  {
    area: "md:[grid-area:1/1/2/5]",
    icon: React.createElement(Box, {
      className: "h-5 w-5 text-white",
    }),
    title: "Structured Creativity",
    description: "Innovation meets organization in your workflow.",
  },
  {
    area: "md:[grid-area:1/5/3/9]",
    icon: React.createElement(Settings, {
      className: "h-5 w-5 text-white",
    }),
    title: "Next-Gen Tools",
    description: "Powerful configurations at your fingertips.",
  },
  {
    area: "md:[grid-area:1/9/2/13]",
    icon: React.createElement(Lock, {
      className: "h-5 w-5 text-white",
    }),
    title: "Security at Core",
    description: "Engineered to safeguard every interaction.",
  },
  {
    area: "md:[grid-area:2/1/4/4]",
    icon: React.createElement(Sparkles, {
      className: "h-5 w-5 text-white",
    }),
    title: "Brilliant Design",
    description: "UI that stuns and performs.",
  },
  {
    area: "md:[grid-area:2/4/3/8]",
    icon: React.createElement(Shield, {
      className: "h-5 w-5 text-white",
    }),
    title: "Fortified Platform",
    description: "Defense-in-depth for modern infrastructure.",
  },
  {
    area: "md:[grid-area:3/8/4/13]",
    icon: React.createElement(Search, {
      className: "h-5 w-5 text-white",
    }),
    title: "Blazing Search",
    description: "Find what you need in milliseconds.",
  },
  {
    area: "md:[grid-area:4/1/5/7]",
    icon: React.createElement(Lightbulb, {
      className: "h-5 w-5 text-white",
    }),
    title: "Smart Suggestions",
    description: "Context-aware help that adapts to you.",
  },
  {
    area: "md:[grid-area:4/7/5/13]",
    icon: React.createElement(Cloud, {
      className: "h-5 w-5 text-white",
    }),
    title: "Cloud Ready",
    description: "Scale seamlessly without lifting a finger.",
  },
];

const GlowingEffectDemo: React.FC = () => {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.from(cardRefs.current.filter(Boolean), {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  return React.createElement(
    "ul",
    {
      className:
        "grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:auto-rows-[minmax(14rem,auto)] lg:gap-4 xl:max-h-[40rem] p-4",
    },
    cards.map((card, index) =>
      React.createElement(
        "li",
        {
          key: index,
          ref: (el: HTMLLIElement | null) => {
            cardRefs.current[index] = el;
          },
          className: cn("list-none min-h-[14rem]", card.area),
        },
        React.createElement(
          Card,
          {
            elevation: 3,
            className:
              "relative h-full rounded-2xl border border-gray-700 p-2 bg-black",
          },
          React.createElement(
            CardContent,
            {
              className:
                "h-full flex flex-col justify-between gap-6 p-6",
            },
            React.createElement(
              "div",
              { className: "flex flex-col gap-4" },
              React.createElement(
                MUIBox,
                {
                  className:
                    "w-fit rounded-lg border border-gray-600 p-2",
                },
                card.icon
              ),
              React.createElement(
                "div",
                { className: "space-y-2" },
                React.createElement(
                  Typography,
                  {
                    variant: "h6",
                    className: "text-white font-semibold",
                  },
                  card.title
                ),
                React.createElement(
                  Typography,
                  {
                    variant: "body2",
                    className:
                      "text-sm md:text-base text-white",
                  },
                  card.description
                )
              )
            )
          )
        )
      )
    )
  );
};

export default GlowingEffectDemo;
