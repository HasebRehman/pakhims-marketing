"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  ArrowRight,
  Play,
  Droplet,
  Sparkles,
  Zap,
  ShieldCheck
} from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";
import Mock3dPhone from "../ui/Mock3dPhone";
import { OpdScreen } from "../ui/SoftwareScreens";

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(card1Ref.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      gsap.to(card2Ref.current, {
        y: 8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      });
      gsap.to(card3Ref.current, {
        y: -6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-28 sm:pt-36 md:pt-46 pb-36 sm:pb-48 md:pb-60 bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-[#224183] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#CE2433]" />
              FULLY FUNCTIONAL HOSPITAL PLATFORM
            </span>
          </div>
        </motion.div>

        {/* Hero Headlines & Crisp Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] font-heading"
          >
            The Smarter Way to <br className="hidden sm:inline" />
            <span className="text-[#224183]">
              Run Your <span className="text-[#CE2433]">Hospital.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans"
          >
            One clean digital platform connecting your entire hospital—streamlining OPD tokens, IPD ward admissions, patient vitals, blood bank verification, doctor share accounts, billing and insurance.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-9 py-4 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-base font-bold rounded-full shadow-lg shadow-red-600/25 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Request Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://profile.pakhims.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 text-base font-bold rounded-full shadow-2xs flex items-center justify-center gap-2.5 transition-all hover:border-slate-400"
            >
              <div className="w-6 h-6 rounded-full bg-[#224183] text-white flex items-center justify-center">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              <span>Explore Live</span>
            </a>
          </motion.div>

          {/* Social Proof Avatar Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 font-medium"
          >
            <div className="flex -space-x-2.5 sm:-space-x-3">
              <img
                src="/img/avatars/doc1.jpg"
                alt="Male Nurse in Scrubs"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc2.jpg"
                alt="Female Doctor Specialist"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc3.jpg"
                alt="Consultant Physician"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc4.jpg"
                alt="Clinical Nurse Specialist"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc5.jpg"
                alt="Senior Medical Director"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc6.jpg"
                alt="Hospital Administrator"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
            </div>
            <span className="font-semibold text-slate-700">
              Trusted by Hospital Owners, Medical Directors & Administrators
            </span>
          </motion.div>
        </div>

        {/* HERO SHOWCASE WITH REFERENCE DEEP OFFSET SHADOW & 3D TILT-TO-STRAIGHT MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-14 sm:mt-18 relative max-w-5xl mx-auto"
        >
          {/* Main Desktop Software Frame with Reference Offset Bottom-Right Shadow */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-reference-offset overflow-hidden">
            <MockBrowserWindow
              url="app.pakhims.com/opd/consultation"
              title="PAKHIMS Out-Patient & In-Patient Core Suite"
              badgeText="LIVE DEMO PREVIEW"
            >
              <OpdScreen />
            </MockBrowserWindow>
          </div>

          {/* 3D Mobile Smartphone (Shifted right as per design preference) */}
          <div className="absolute -right-8 sm:-right-14 md:-right-18 -bottom-10 sm:-bottom-14 z-30 hidden md:block">
            <Mock3dPhone />
          </div>

          {/* Floating Badge 1: Upper Center - Half Inside, Half Outside Top Edge */}
          <div
            ref={card3Ref}
            className="absolute left-1/3 -top-5 sm:-top-6 z-40 bg-white border border-slate-200/90 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900 backdrop-blur-md"
          >
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#224183]" />
            <span className="font-heading tracking-tight">100% Doctor Share Ledger Accuracy</span>
          </div>

          {/* Floating Message Box 1: Upper Left - Restored vertical placement (top-10), shifted slightly outside to the left */}
          <div
            ref={card1Ref}
            className="absolute -left-8 sm:-left-12 top-10 sm:top-12 z-40 bg-white/95 border border-slate-200/90 p-3.5 sm:p-4.5 px-4 sm:px-6 rounded-3xl shadow-2xl flex items-center gap-3.5 text-xs sm:text-sm text-slate-800 backdrop-blur-md max-w-sm"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#224183] text-white flex items-center justify-center shrink-0 font-bold shadow-md">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm sm:text-base font-heading leading-snug">OPD Token Queue</div>
              <div className="text-slate-500 text-xs font-medium">Instant Token & Prescriptions</div>
              <div className="mt-0.5 text-xs text-emerald-700 font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Queue Speed: &lt; 2 Minutes
              </div>
            </div>
          </div>

          {/* Floating Message Box 2: Lower Left - Restored vertical placement (bottom-10), shifted slightly outside to the left */}
          <div
            ref={card2Ref}
            className="absolute -left-8 sm:-left-12 bottom-10 sm:bottom-12 z-40 bg-white/95 border border-slate-200/90 p-3.5 sm:p-4.5 px-4 sm:px-6 rounded-3xl shadow-2xl flex items-center gap-3.5 text-xs sm:text-sm text-slate-800 backdrop-blur-md"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#CE2433] text-white flex items-center justify-center shrink-0 shadow-md">
              <Droplet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm sm:text-base font-heading leading-snug">Blood Bank Operations</div>
              <div className="text-xs text-emerald-700 font-mono font-bold">5-Marker Screened: 142 Units</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
