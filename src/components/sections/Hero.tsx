"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, ShieldCheck, Zap, Droplet } from "lucide-react";
import gsap from "gsap";
import MockBrowserWindow from "../ui/MockBrowserWindow";
import Mock3dPhone from "../ui/Mock3dPhone";
import { DesktopProfileShowcase } from "../ui/PakhimsProfileShowcase";

interface HeroProps {
  onOpenDemo?: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const [laptopHovered, setLaptopHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle float animation for hero cards
      gsap.to(card1Ref.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      gsap.to(card2Ref.current, {
        y: 12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      });
      gsap.to(card3Ref.current, {
        y: -8,
        duration: 2.8,
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
      className="relative pt-36 sm:pt-36 md:pt-44 pb-24 sm:pb-36 md:pb-48 bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
            <span className="font-bold text-[#224183] flex items-center gap-1.5 text-[11px] sm:text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#CE2433]" />
              FULLY FUNCTIONAL HOSPITAL PLATFORM
            </span>
          </div>
        </motion.div>

        {/* Hero Headlines & Crisp Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08] font-heading"
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
            className="text-sm sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans px-2 sm:px-0"
          >
            One clean digital platform connecting your entire hospital—streamlining Online Appointments, Employee Management, Insurance Panel Tracking, Doctor Accounts, Lab Diagnostics, OPD Token Queues, IPD Ward Care, and Blood Bank Operations.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3 sm:pt-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-red-600/25 flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Request Free Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://profile.pakhims.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 text-sm sm:text-base font-bold rounded-full shadow-2xs flex items-center justify-center gap-2.5 transition-all hover:border-slate-400"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#224183] text-white flex items-center justify-center">
                <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white ml-0.5" />
              </div>
              <span>Explore Live</span>
            </a>
          </motion.div>

          {/* Social Proof Avatar Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs text-slate-600 font-medium"
          >
            <div className="flex -space-x-2 sm:-space-x-2.5">
              <img
                src="/img/avatars/doc1.jpg"
                alt="Male Nurse in Scrubs"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc2.jpg"
                alt="Female Doctor Specialist"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc3.jpg"
                alt="Consultant Physician"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc4.jpg"
                alt="Clinical Nurse Specialist"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc5.jpg"
                alt="Senior Medical Director"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
              <img
                src="/img/avatars/doc6.jpg"
                alt="Hospital Administrator"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-100"
              />
            </div>
            <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">
              Trusted by Hospital Owners, Directors & Administrators
            </span>
          </motion.div>
        </div>

        {/* HERO SHOWCASE WITH REFERENCE DEEP OFFSET SHADOW & 3D TILT-TO-STRAIGHT MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 sm:mt-18 relative max-w-5xl mx-auto"
        >
          {/* Main Desktop Software Frame */}
          <div
            className="rounded-2xl border border-slate-200 bg-white shadow-reference-offset overflow-hidden relative group/laptop cursor-pointer"
            onMouseEnter={() => setLaptopHovered(true)}
            onMouseLeave={() => setLaptopHovered(false)}
          >
            <MockBrowserWindow
              url="https://profile.pakhims.com/"
              title="PAKHIMS — Official Profile Website Showcase"
            >
              <div className="w-full h-[460px] sm:h-[540px] overflow-hidden relative bg-white">
                <div
                  className={`w-full relative transition-transform duration-[8000ms] ease-in-out ${
                    laptopHovered ? "-translate-y-[62%]" : "translate-y-0"
                  }`}
                >
                  <DesktopProfileShowcase />
                </div>
              </div>
            </MockBrowserWindow>
          </div>

          {/* 3D Mobile Smartphone (Shifted right on desktop) */}
          <div className="absolute -right-8 sm:-right-14 md:-right-18 -bottom-10 sm:-bottom-14 z-30 hidden md:block">
            <Mock3dPhone />
          </div>

          {/* Floating Badge 1: Upper Center (Visible on lg screens) */}
          <div
            ref={card3Ref}
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-6 z-40 bg-white border border-slate-200/90 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl items-center gap-2 text-[11px] sm:text-sm font-bold text-slate-900 backdrop-blur-md whitespace-nowrap"
          >
            <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-[#224183]" />
            <span className="font-heading tracking-tight">100% Doctor Share Ledger Accuracy</span>
          </div>

          {/* Desktop Floating Badges (Visible on lg screens) */}
          <div
            ref={card1Ref}
            className="hidden lg:flex absolute -left-10 top-12 z-40 bg-white/95 border border-slate-200/90 p-4 px-5 rounded-3xl shadow-2xl items-center gap-3.5 text-sm text-slate-800 backdrop-blur-md max-w-xs"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#224183] text-white flex items-center justify-center shrink-0 font-bold shadow-md">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm font-heading leading-snug">OPD Token Queue</div>
              <div className="text-slate-500 text-xs font-medium">Instant Token & Prescriptions</div>
              <div className="mt-0.5 text-xs text-emerald-700 font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Queue Speed: &lt; 2 Mins
              </div>
            </div>
          </div>

          <div
            ref={card2Ref}
            className="hidden lg:flex absolute -left-10 bottom-12 z-40 bg-white/95 border border-slate-200/90 p-4 px-5 rounded-3xl shadow-2xl items-center gap-3.5 text-sm text-slate-800 backdrop-blur-md"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#CE2433] text-white flex items-center justify-center shrink-0 shadow-md">
              <Droplet className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm font-heading leading-snug">Blood Bank Operations</div>
              <div className="text-xs text-emerald-700 font-mono font-bold">5-Marker Screened: 142 Units</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
