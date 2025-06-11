"use client";
import React, { createElement, useId } from "react";

type Feature = {
  title: string;
  description: string;
};

export function Text() {
  return createElement(
    "div",
    { className: "py-20 lg:py-40" },
    createElement(
      "div",
      {
        className:
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto",
      },
      grid.map((feature: Feature) =>
        createElement(
          "div",
          {
            key: feature.title,
            className:
              "relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden",
          },
          createElement(Grid, { size: 20 }),
          createElement(
            "p",
            {
              className:
                "text-base font-bold text-neutral-800 dark:text-white relative z-20",
            },
            feature.title
          ),
          createElement(
            "p",
            {
              className:
                "text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20",
            },
            feature.description
          )
        )
      )
    )
  );
}

const grid: Feature[] = [
  {
    title: "HIPAA and SOC2 Compliant",
    description:
      "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
  },
  {
    title: "Automated Social Media Posting",
    description:
      "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
  },
  {
    title: "Content Calendar",
    description:
      "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
  },
  {
    title: "Audience Targeting",
    description:
      "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
  },
  {
    title: "Social Listening",
    description:
      "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
  },
  {
    title: "Customizable Templates",
    description:
      "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
  },
  {
    title: "Collaboration Tools",
    description:
      "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
  },
];

type GridProps = {
  pattern?: number[][];
  size?: number;
};

export const Grid = ({ pattern, size }: GridProps) => {
  const p =
    pattern ??
    Array.from({ length: 5 }, () => [
      Math.floor(Math.random() * 4) + 7,
      Math.floor(Math.random() * 6) + 1,
    ]);

  return createElement(
    "div",
    {
      className:
        "pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]",
    },
    createElement(
      "div",
      {
        className:
          "absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100",
      },
      createElement(GridPattern, {
        width: size ?? 20,
        height: size ?? 20,
        x: "-12",
        y: "4",
        squares: p,
        className:
          "absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10",
      })
    )
  );
};

type GridPatternProps = {
  width: number;
  height: number;
  x: string;
  y: string;
  squares: number[][];
  className?: string;
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  className,
}: GridPatternProps) {
  const patternId = useId();

  return createElement(
    "svg",
    { "aria-hidden": "true", className },
    createElement(
      "defs",
      null,
      createElement(
        "pattern",
        {
          id: patternId,
          width,
          height,
          patternUnits: "userSpaceOnUse",
          x,
          y,
        },
        createElement("path", {
          d: `M.5 ${height}V.5H${width}`,
          fill: "none",
        })
      )
    ),
    createElement("rect", {
      width: "100%",
      height: "100%",
      strokeWidth: 0,
      fill: `url(#${patternId})`,
    }),
    createElement(
      "svg",
      { x, y, className: "overflow-visible" },
      squares.map(([xSq, ySq]) =>
        createElement("rect", {
          key: `${xSq}-${ySq}`,
          width: width + 1,
          height: height + 1,
          x: xSq * width,
          y: ySq * height,
          strokeWidth: 0,
        })
      )
    )
  );
}
