"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string | undefined;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
  key?: any;
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
  id,
  ...rest
}: any) => {
  const getOffset = (direction: string) => {
    switch (direction) {
      case "up":
        return { y: 50 };
      case "down":
        return { y: -50 };
      case "left":
        return { x: 50 };
      case "right":
        return { x: -50 };
      default:
        return {};
    }
  };

  const initialOffset = getOffset(direction);

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut",
        },
      }}
      // viewport={{ once: true, margin: "-100px" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
