"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast, responsive progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 16) + 10;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a1428] text-white select-none overflow-hidden"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] bg-gradient-to-tr from-[#224183]/40 via-red-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Loader Main Card Container */}
          <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md px-6 text-center">
            {/* Pulsing Logo Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-5 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl mb-6 sm:mb-8 ring-1 ring-blue-500/20 flex flex-col items-center justify-center"
            >
              <img
                src="/img/pak-hims-logo.png"
                alt="PAKHIMS Platform Loading"
                className="h-10 sm:h-14 w-auto object-contain drop-shadow-md mb-3"
              />

              {/* Animated Hospital Heartbeat ECG Line */}
              <div className="w-48 sm:w-60 h-6 sm:h-8 relative overflow-hidden my-1">
                <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                  <motion.path
                    d="M 0 20 L 35 20 L 42 6 L 50 34 L 58 12 L 66 24 L 74 20 L 125 20 L 132 6 L 140 34 L 148 12 L 156 24 L 164 20 L 200 20"
                    fill="none"
                    stroke="#CE2433"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "200 400", strokeDashoffset: 600 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                    className="drop-shadow-[0_0_8px_rgba(206,36,51,0.85)]"
                  />
                </svg>
              </div>

              <div className="text-[10px] sm:text-xs font-bold text-slate-300 font-mono tracking-wider mt-1">
                CONNECTED HOSPITAL PLATFORM
              </div>
            </motion.div>

            {/* Minimal Progress Bar & Percentage */}
            <div className="w-52 sm:w-72 space-y-2.5">
              <div className="h-1.5 w-full bg-slate-800/90 rounded-full overflow-hidden border border-slate-700/60 p-0.5 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#224183] via-[#CE2433] to-red-500 rounded-full shadow-[0_0_12px_rgba(206,36,51,0.8)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
                <span className="truncate pr-2 text-slate-300">
                  {progress < 40
                    ? "Loading Core Engine..."
                    : progress < 85
                    ? "Syncing OPD & IPD..."
                    : "Ready!"}
                </span>
                <span className="font-extrabold text-[#CE2433]">{Math.min(progress, 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
