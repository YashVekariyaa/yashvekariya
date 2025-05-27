"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ClientPageWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export const ClientPageWrapper = ({
  children,
  ...props
}: ClientPageWrapperProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      }}
      {...props} // This spreads className, style, etc. correctly
    >
      {children}
    </motion.div>
  );
};
