"use client";
import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

const MaskCursor = ({ children }: { children: React.ReactNode }) => {
  const { x, y } = useMousePosition();

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Masked white layer */}
      <motion.div
        className="absolute inset-0 bg-white"
        style={{
          WebkitMaskImage: `radial-gradient(
            120px at ${x}px ${y}px,
            black 0%,
            black 45%,
            transparent 70%
          )`,
          maskImage: `radial-gradient(
            120px at ${x}px ${y}px,
            black 0%,
            black 45%,
            transparent 70%
          )`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 text-white mix-blend-difference">
        {children}
      </div>
    </div>
  );
};

export default MaskCursor;
