"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  HeartPulse,
  Droplet,
  FileText,
  DollarSign,
  Activity
} from "lucide-react";

export default function SignatureEcosystemAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const modules = [
    {
      id: "opd",
      title: "OPD & Token Flow",
      desc: "Instant Queue & Prescriptions",
      icon: Activity,
      color: "bg-blue-600",
      initialX: -400,
      initialY: -200,
      targetX: -265,
      targetY: -135,
    },
    {
      id: "ipd",
      title: "IPD & Bed Journey",
      desc: "Ward Admissions & Vitals",
      icon: HeartPulse,
      color: "bg-indigo-600",
      initialX: 400,
      initialY: -200,
      targetX: 265,
      targetY: -135,
    },
    {
      id: "patient",
      title: "Patient Identity",
      desc: "Unified MRN & Medical Records",
      icon: Users,
      color: "bg-teal-600",
      initialX: -440,
      initialY: 0,
      targetX: -300,
      targetY: 0,
    },
    {
      id: "blood",
      title: "Blood Bank Operations",
      desc: "Testing & Bag Verification",
      icon: Droplet,
      color: "bg-[#CE2433]",
      initialX: 440,
      initialY: 0,
      targetX: 300,
      targetY: 0,
    },
    {
      id: "billing",
      title: "Invoicing & Billing Engine",
      desc: "Unified Receipt Ledger",
      icon: FileText,
      color: "bg-violet-600",
      initialX: -400,
      initialY: 200,
      targetX: -265,
      targetY: 135,
    },
    {
      id: "accounts",
      title: "Doctor Shared Accounts",
      desc: "Automated Percentage Splits",
      icon: DollarSign,
      color: "bg-emerald-600",
      initialX: 400,
      initialY: 200,
      targetX: 265,
      targetY: 135,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cardEls = cardsRef.current.filter(Boolean);

      cardEls.forEach((card, idx) => {
        const mod = modules[idx];
        gsap.set(card, {
          x: mod.initialX,
          y: mod.initialY,
          opacity: 0.5,
          scale: 0.88,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
      });

      cardEls.forEach((card, idx) => {
        const mod = modules[idx];
        tl.to(
          card,
          {
            x: mod.targetX,
            y: mod.targetY,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
          },
          0
        );
      });

      tl.to(
        coreRef.current,
        {
          scale: 1.05,
          boxShadow: "0 25px 60px -10px rgba(34, 65, 131, 0.6), 0 0 45px rgba(206, 36, 51, 0.35)",
          borderColor: "#3b82f6",
          duration: 0.8,
        },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="signature"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-slate-950 text-white flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-b border-slate-800/80"
    >
      {/* Background Ambient Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#224183]/30 via-red-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Inline ECG CSS Animation */}
      <style jsx>{`
        @keyframes ecgPulseRun {
          0% {
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-ecg-continuous {
          stroke-dasharray: 200 400;
          animation: ecgPulseRun 2.2s linear infinite;
        }
      `}</style>

      {/* Centered Heading with Top Breathing Gap */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4 pt-4 sm:pt-8 mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white leading-tight">
          One Unified Platform. <br />
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-red-500 bg-clip-text text-transparent">
            Your Entire Hospital, Connected.
          </span>
        </h2>
      </div>

      {/* Centered Ecosystem Hub Stage */}
      <div className="relative w-full max-w-5xl h-[460px] sm:h-[520px] flex items-center justify-center mx-auto">
        {/* Radial Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="rgba(206, 36, 51, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* CENTRAL PAKHIMS PLATFORM CORE BOX (Pure Glow Shadow on Hover, No Colored Inner Box) */}
        <div
          ref={coreRef}
          className="relative z-30 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-slate-900/95 border-2 border-[#224183] shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,65,131,0.7)] hover:border-blue-400 group"
        >
          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Logo Image */}
            <img
              src="/img/pak-hims-logo.png"
              alt="PAKHIMS Central Platform Core"
              className="h-10 sm:h-12 w-auto object-contain mb-2 drop-shadow-md"
            />

            {/* Continuous Hospital Heart Rate ECG Line */}
            <div className="w-full my-2 px-1 overflow-hidden relative">
              <svg className="w-full h-7" viewBox="0 0 200 40" preserveAspectRatio="none">
                <path
                  d="M 0 20 L 35 20 L 42 6 L 50 34 L 58 12 L 66 24 L 74 20 L 125 20 L 132 6 L 140 34 L 148 12 L 156 24 L 164 20 L 200 20"
                  fill="none"
                  stroke="#CE2433"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-ecg-continuous"
                />
              </svg>
            </div>

            <p className="text-[10px] text-slate-400 font-medium">
              Real-time Hospital Sync Engine
            </p>
          </div>
        </div>

        {/* SATELLITE DEPARTMENT MODULE MESSAGE BOXES */}
        {modules.map((mod, idx) => {
          const Icon = mod.icon;
          return (
            <div
              key={mod.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="absolute z-20 w-56 sm:w-64 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md flex items-center gap-3 hover:border-slate-500 transition-all hover:scale-105 group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${mod.color} text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <span className="text-xs sm:text-sm font-bold text-white block truncate font-heading">
                  {mod.title}
                </span>
                <p className="text-[11px] text-slate-400 leading-tight truncate">
                  {mod.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



