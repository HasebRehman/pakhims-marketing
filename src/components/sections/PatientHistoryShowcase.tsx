"use client";

import { motion } from "framer-motion";
import { UserPlus, Stethoscope, Droplet, BedDouble, CheckCircle2 } from "lucide-react";

export default function PatientHistoryShowcase() {
  const journeyStages = [
    {
      step: "01",
      title: "Registration & MRN",
      subtitle: "Step 01 — Patient Entry",
      desc: "Instant patient registration. A permanent Medical Record Number (MRN) is generated to anchor all lifetime visits.",
      icon: UserPlus,
      badge: "Universal MRN",
      color: "bg-blue-50 text-[#224183] border-blue-200",
      accent: "bg-[#224183]",
    },
    {
      step: "02",
      title: "OPD Consultation",
      subtitle: "Step 02 — Out-Patient Care",
      desc: "Doctors record symptoms, issue digital prescriptions, and order diagnostic lab panels directly during consultation.",
      icon: Stethoscope,
      badge: "Digital Consultation",
      color: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "bg-amber-600",
    },
    {
      step: "03",
      title: "Lab & Blood Sync",
      subtitle: "Step 03 — Diagnostics Sync",
      desc: "Automated lab results and 5-marker blood bag screening records instantly link under the patient's permanent MRN.",
      icon: Droplet,
      badge: "Verified Diagnostics",
      color: "bg-red-50 text-[#CE2433] border-red-200",
      accent: "bg-[#CE2433]",
    },
    {
      step: "04",
      title: "IPD Ward & Bed Care",
      subtitle: "Step 04 — In-Patient Care",
      desc: "Ward bed assignments, hourly nursing vitals, surgeries, and daily room ledgers track seamlessly during admitted care.",
      icon: BedDouble,
      badge: "Admitted Journey",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accent: "bg-indigo-600",
    },
    {
      step: "05",
      title: "Billing & Discharge",
      subtitle: "Step 05 — Settlement",
      desc: "Automated doctor percentage splits, itemized invoices, and complete medical discharge summaries are archived permanently.",
      icon: CheckCircle2,
      badge: "Clean Settlement",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accent: "bg-emerald-600",
    },
  ];

  // Repeat single 180px ECG cycle across width
  const ecgPatternWidth = 180;
  const numCycles = 16;

  // Build repeating path string matching reference image ECG waveform
  let repeatingPath = "";
  for (let i = 0; i < numCycles; i++) {
    const offset = i * ecgPatternWidth;
    repeatingPath += ` M ${offset + 0} 36 L ${offset + 40} 36 Q ${offset + 48} 26 ${offset + 56} 36 L ${offset + 68} 36 L ${offset + 74} 42 L ${offset + 82} 4 L ${offset + 92} 64 L ${offset + 100} 36 L ${offset + 110} 36 Q ${offset + 122} 22 ${offset + 134} 36 L ${offset + 180} 36`;
  }

  return (
    <section id="records" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Every Patient Story, <br />
            <span className="text-[#224183]">In One Connected Record.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Your hospital&apos;s history shouldn&apos;t disappear into dusty paperwork. PAKHIMS anchors every prescription, lab result, admission history, and billing invoice under one permanent Medical Record Number (MRN).
          </p>
        </div>

        {/* 5-Step Connected Timeline Pipeline */}
        <div className="relative">
          {/* Horizontal Continuously Moving ECG Heartbeat Line for Desktop */}
          <div className="hidden lg:block absolute top-[70px] left-[-5%] right-[-5%] h-[72px] pointer-events-none z-0 overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={{ x: [-ecgPatternWidth, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
            >
              <svg
                width={numCycles * ecgPatternWidth}
                height="72"
                viewBox={`0 0 ${numCycles * ecgPatternWidth} 72`}
                className="overflow-visible"
              >
                {/* Glowing Outer Shadow Path */}
                <path
                  d={repeatingPath}
                  fill="none"
                  stroke="#CE2433"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-25 blur-[3px]"
                />
                {/* Crisp Main ECG Line */}
                <path
                  d={repeatingPath}
                  fill="none"
                  stroke="#CE2433"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_8px_rgba(206,36,51,0.8)]"
                />
              </svg>
            </motion.div>
          </div>

          {/* Vertical Connecting Timeline Line for Mobile/Tablet */}
          <div className="lg:hidden absolute top-8 bottom-8 left-8 w-1 bg-gradient-to-b from-[#224183] via-[#CE2433] to-emerald-600 rounded-full z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {journeyStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 relative flex flex-col justify-between group hover:border-[#224183]/80 hover:shadow-xl transition-all duration-300 shadow-sm"
                >
                  {/* Top Accent Strip & Stage Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`w-8 h-8 rounded-xl ${stage.accent} text-white flex items-center justify-center font-extrabold text-xs font-mono shadow-xs ring-4 ring-white`}>
                      {stage.step}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${stage.color}`}>
                      {stage.badge}
                    </span>
                  </div>

                  {/* Icon Container & Titles */}
                  <div className="text-left space-y-2 mb-2">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold mb-3 transition-transform group-hover:scale-110 ${stage.color}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    <h4 className="font-extrabold text-base text-slate-900 font-heading group-hover:text-[#224183] transition-colors">
                      {stage.title}
                    </h4>
                    <div className="text-[11px] font-mono text-slate-400 font-medium">
                      {stage.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
