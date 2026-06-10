"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
      style={{
        background: "linear-gradient(90deg, #4f9cf9, #a855f7, #22d3ee)",
        scaleX: progress / 100,
        transformOrigin: "0%",
      }}
    />
  );
}
