"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "slide-up" | "slide-in" | "scale-in";
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animation = "fade-in",
  duration = 800,
  threshold = 0.1,
  rootMargin = "-50px 0px",
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
    delayMs: 0,
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const animations = {
    "fade-in": "opacity-0 transition-opacity",
    "slide-up": "opacity-0 translate-y-8 transition-all",
    "slide-in": "opacity-0 translate-x-8 transition-all",
    "scale-in": "opacity-0 scale-95 transition-all",
  };

  const shouldAnimate = hasMounted && isIntersecting;

  return (
    <div
      ref={elementRef}
      className={cn(
        animations[animation],
        shouldAnimate && "opacity-100 translate-y-0 translate-x-0 scale-100",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
