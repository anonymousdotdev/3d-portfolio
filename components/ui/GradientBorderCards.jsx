"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export default function GradientBorderCards({
  children,
  className,
  gradientSize = 200,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
  gradientOpacity = 0.8,
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }

  return (
    <div
      ref={cardRef}
      className={cn("relative rounded-xl overflow-hidden group", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: 0 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-transparent z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, 
              ${gradientFrom}, 
              ${gradientTo}, 
              transparent 100%
            )
          `,
          opacity: gradientOpacity,
          transition: "opacity 0.3s"
        }}
      />
      {/* Card content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
