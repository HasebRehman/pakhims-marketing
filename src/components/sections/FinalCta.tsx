"use client";

import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";

interface FinalCtaProps {
  onOpenDemo: () => void;
}

export default function FinalCta({ onOpenDemo }: FinalCtaProps) {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#077dd3] to-[#0564aa] rounded-3xl p-8 sm:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
            <Sparkles className="w-4 h-4 text-[#CE2433]" />
            TRANSFORM YOUR HOSPITAL OPERATIONS
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Ready to Make Hospital <br />
            <span className="text-[#CE2433]">Management Simpler?</span>
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Discover how PAKHIMS can bring your hospital&apos;s essential operations together in one connected digital platform. Schedule a live personalized product demonstration today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-9 py-4 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-base font-bold rounded-2xl shadow-xl shadow-red-600/40 flex items-center justify-center gap-3 transition-all hover:scale-105 group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-semibold rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Talk to Our Team</span>
            </button>
          </div>

          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fully Functional System
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Custom Sample Data
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Commitment Required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
