"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Tag,
  Stethoscope,
  Activity,
  HeartPulse,
  Building2,
  Pill,
  Plus
} from "lucide-react";

interface PricingBannerProps {
  onOpenDemo?: () => void;
}

export default function PricingBanner({ onOpenDemo }: PricingBannerProps) {
  return (
    <section className="py-8 sm:py-16 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Sleek Dark Medical Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#0b1830] via-[#224183] to-[#0f244a] text-white p-6 sm:p-9 lg:p-11 overflow-hidden shadow-2xl border border-blue-900/50"
        >
          {/* Ambient Background Glows */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle Dim Medical & Stethoscope Background Artwork */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Dim Decorative Stethoscopes & Medical Icons */}
            <Stethoscope className="absolute top-2 left-1/3 w-36 h-36 text-sky-400 opacity-[0.08] -rotate-12 pointer-events-none" />
            <Stethoscope className="absolute bottom-2 right-1/4 w-32 h-32 text-red-400 opacity-[0.08] rotate-45 pointer-events-none" />
            <HeartPulse className="absolute bottom-3 left-8 w-28 h-28 text-red-400 opacity-[0.06] rotate-6 pointer-events-none" />
            <Building2 className="absolute top-4 left-4 w-20 h-20 text-sky-200 opacity-[0.05] pointer-events-none" />
            <Activity className="absolute bottom-6 right-10 w-36 h-36 text-emerald-400 opacity-[0.06] pointer-events-none" />
            <Pill className="absolute top-4 right-12 w-20 h-20 text-indigo-300 opacity-[0.06] rotate-45 pointer-events-none" />
            <Plus className="absolute bottom-8 right-6 w-16 h-16 text-white opacity-[0.05] pointer-events-none" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column: Text & Action Buttons */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Header with Stethoscope Icon Badge */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 text-[#CE2433] flex items-center justify-center shadow-lg shrink-0 group">
                  <Stethoscope className="w-6 h-6 text-[#CE2433] animate-pulse" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
                  Complete Hospital System <br />
                  <span className="text-sky-200">Starting at Only </span>
                  <span className="text-[#CE2433] font-black">5,000 PKR / mo.</span>
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans max-w-xl">
                Get the complete hospital management system for only 5,000 PKR/mo, or choose only the specific modules your hospital needs. <strong className="text-white">Save 5,000 PKR instantly</strong> on our 6-Month Package!
              </p>

              {/* Quick Perks Row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-xs text-slate-200 font-medium font-sans">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Suite or Individual Modules</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                  <Tag className="w-4 h-4 text-red-400 shrink-0" />
                  <span>5,000 PKR Discount on 6 Months</span>
                </div>
              </div>

              {/* CTA Action Buttons on Left Side (With Generous Top Spacing) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-6 sm:pt-8 border-t border-white/10 mt-5">
                <Link
                  href="/pricing"
                  scroll={true}
                  className="py-3.5 px-6 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-xl shadow-red-950/60 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 group border border-red-400/40"
                >
                  <span>View Full Pricing & Packages</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={onOpenDemo}
                  className="py-3.5 px-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Request Free Demo</span>
                </button>
              </div>
            </div>

            {/* Right Side: Sleek Hospital Software Window Image */}
            <div className="lg:col-span-5 relative group">
              {/* Dim Stethoscope Artwork Behind Right Window */}
              <Stethoscope className="absolute -top-10 -right-10 w-44 h-44 text-sky-400 opacity-[0.12] -rotate-12 pointer-events-none" />
              <Stethoscope className="absolute -bottom-8 -left-8 w-36 h-36 text-red-500 opacity-[0.10] rotate-45 pointer-events-none" />

              <div className="relative z-10 rounded-2xl border border-white/20 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 group-hover:scale-[1.02] ring-4 ring-blue-500/20">
                <img
                  src="/img/pricing-banner-ui.jpg"
                  alt="PAKHIMS Complete Hospital Management Platform"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
