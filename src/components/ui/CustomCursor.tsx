"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw cursor motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for outer ring follower
  const springConfig = { damping: 26, stiffness: 320, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const touchCheck = window.matchMedia("(pointer: coarse)").matches;
      if (touchCheck) {
        setIsTouchDevice(true);
        return;
      }
    }

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.getAttribute("role") === "button" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.classList.contains("cursor-pointer");

      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeaveWindow = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Outer Smooth Spring Ring & Medical Crosshair Target */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isMouseDown ? 0.75 : isHovered ? 1.9 : 1,
            borderColor: isHovered ? "rgba(206, 36, 51, 0.9)" : "rgba(34, 65, 131, 0.45)",
            backgroundColor: isHovered ? "rgba(206, 36, 51, 0.07)" : "rgba(34, 65, 131, 0.02)",
            boxShadow: isHovered
              ? "0 0 25px rgba(206, 36, 51, 0.45), inset 0 0 12px rgba(206, 36, 51, 0.2)"
              : "0 0 12px rgba(34, 65, 131, 0.12)",
          }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="w-11 h-11 rounded-full border-2 border-[#224183]/45 flex items-center justify-center relative backdrop-blur-[1px]"
        >
          {/* Rotating Pulse Ring on Interactive Hover */}
          {isHovered && (
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0.5 rounded-full border border-dashed border-[#CE2433]/50"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Inner Precision Point (Glowing Crimson Core + Medical Heartbeat Icon) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isMouseDown ? 0.6 : isHovered ? 1.4 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="relative flex items-center justify-center"
        >
          {/* Glowing Red Core Dot */}
          <span className="w-3 h-3 rounded-full bg-[#CE2433] shadow-[0_0_10px_#CE2433]" />

          {/* Ambient Ping Pulse Circle */}
          <span className="absolute w-3 h-3 rounded-full bg-[#CE2433]/60 animate-ping" />

          {/* Interactive Medical Heartbeat Wave / Cross Icon */}
          {isHovered && (
            <motion.svg
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute w-6 h-6 text-[#CE2433] drop-shadow-[0_0_6px_rgba(206,36,51,0.8)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Medical Heartbeat Wave Line */}
              <path d="M3 12h4.5l2-5 3.5 10 2.5-7 1.5 2H21" />
            </motion.svg>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
