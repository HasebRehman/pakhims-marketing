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
  Activity,
  Calendar,
  UserCheck,
  ShieldCheck,
  FlaskConical
} from "lucide-react";

export default function SignatureEcosystemAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const modules = [
    {
      id: "appointment",
      title: "Online Appointment",
      desc: "Instant Scheduling & Booking",
      icon: Calendar,
      color: "bg-sky-600",
      initialX: -450,
      initialY: -220,
      targetX: -300,
      targetY: -180,
    },
    {
      id: "opd",
      title: "OPD & Token Flow",
      desc: "Instant Queue & Prescriptions",
      icon: Activity,
      color: "bg-blue-600",
      initialX: -480,
      initialY: -70,
      targetX: -320,
      targetY: -60,
    },
    {
      id: "lab",
      title: "Lab & Pathology",
      desc: "Diagnostic Reports & Tests",
      icon: FlaskConical,
      color: "bg-teal-600",
      initialX: -480,
      initialY: 70,
      targetX: -320,
      targetY: 60,
    },
    {
      id: "employee",
      title: "Employee Management",
      desc: "Staff RBAC & Duty Rosters",
      icon: UserCheck,
      color: "bg-indigo-600",
      initialX: -450,
      initialY: 220,
      targetX: -300,
      targetY: 180,
    },
    {
      id: "ipd",
      title: "IPD & Bed Journey",
      desc: "Ward Admissions & Vitals",
      icon: HeartPulse,
      color: "bg-[#077dd3]",
      initialX: 450,
      initialY: -220,
      targetX: 300,
      targetY: -180,
    },
    {
      id: "blood",
      title: "Blood Bank Operations",
      desc: "Testing & Bag Verification",
      icon: Droplet,
      color: "bg-[#CE2433]",
      initialX: 480,
      initialY: -70,
      targetX: 320,
      targetY: -60,
    },
    {
      id: "accounts",
      title: "Doctor Shared Accounts",
      desc: "Automated Percentage Splits",
      icon: DollarSign,
      color: "bg-emerald-600",
      initialX: 480,
      initialY: 70,
      targetX: 320,
      targetY: 60,
    },
    {
      id: "insurance",
      title: "Insurance & Panels",
      desc: "Policy Verification & Claims",
      icon: ShieldCheck,
      color: "bg-purple-600",
      initialX: 450,
      initialY: 220,
      targetX: 300,
      targetY: 180,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cardEls = cardsRef.current.filter(Boolean);
      const isMobile = window.innerWidth < 768;

      cardEls.forEach((card, idx) => {
        const mod = modules[idx];
        const initialX = isMobile ? (mod.initialX < 0 ? -160 : 160) : mod.initialX;
        const initialY = isMobile ? mod.initialY * 0.5 : mod.initialY;

        gsap.set(card, {
          x: initialX,
          y: initialY,
          opacity: 0.5,
          scale: isMobile ? 0.85 : 0.88,
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
        const isMiddleRow = mod.id === "opd" || mod.id === "lab" || mod.id === "blood" || mod.id === "accounts";
        const mobileTargetX = isMiddleRow ? (mod.targetX < 0 ? -116 : 116) : (mod.targetX < 0 ? -92 : 92);
        const mobileTargetY = mod.targetY * 0.7;

        const targetX = isMobile ? mobileTargetX : mod.targetX;
        const targetY = isMobile ? mobileTargetY : mod.targetY;

        tl.to(
          card,
          {
            x: targetX,
            y: targetY,
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
          scale: isMobile ? 1.02 : 1.05,
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
      className="relative py-16 sm:py-28 bg-slate-950 text-white flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-b border-slate-800/80"
    >
      {/* Background Ambient Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#077dd3]/30 via-red-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

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
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 pt-2 sm:pt-8 mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white leading-tight">
          One Unified Platform. <br />
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-red-500 bg-clip-text text-transparent">
            Your Entire Hospital, Connected.
          </span>
        </h2>
      </div>

      {/* Centered Ecosystem Hub Stage */}
      <div className="relative w-full max-w-6xl h-[480px] sm:h-[600px] flex items-center justify-center mx-auto">
        {/* Radial Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <line x1="50%" y1="50%" x2="18%" y2="18%" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="16%" y2="38%" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="16%" y2="62%" stroke="rgba(20, 184, 166, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="18%" y2="82%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />

          <line x1="50%" y1="50%" x2="82%" y2="18%" stroke="rgba(34, 65, 131, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="84%" y2="38%" stroke="rgba(206, 36, 51, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="84%" y2="62%" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="82%" y2="82%" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* CENTRAL PAKHIMS PLATFORM CORE BOX */}
        <div
          ref={coreRef}
          className="relative z-30 w-28 h-28 sm:w-52 sm:h-52 rounded-2xl sm:rounded-3xl bg-slate-900/95 border-2 border-[#077dd3] shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center p-2 sm:p-4 text-center transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,65,131,0.7)] hover:border-blue-400 group"
        >
          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Logo Image */}
            <img
              src="/img/pakhims-logo.png"
              alt="PAKHIMS Central Platform Core"
              className="h-6 sm:h-12 w-auto object-contain mb-1 sm:mb-2 drop-shadow-md"
            />

            {/* Continuous Hospital Heart Rate ECG Line */}
            <div className="w-full my-0.5 sm:my-2 px-1 overflow-hidden relative">
              <svg className="w-full h-3.5 sm:h-7" viewBox="0 0 200 40" preserveAspectRatio="none">
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

            <p className="text-[8px] sm:text-[10px] text-slate-400 font-medium leading-tight">
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
              className="absolute z-20 w-[114px] sm:w-64 p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-slate-900/95 border border-slate-700/90 shadow-2xl backdrop-blur-md flex items-center gap-1.5 sm:gap-3 hover:border-slate-500 transition-all hover:scale-105 group"
            >
              <div
                className={`w-6 h-6 sm:w-10 sm:h-10 rounded-md sm:rounded-xl ${mod.color} text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <span className="text-[9px] sm:text-sm font-bold text-white block leading-tight font-heading">
                  {mod.title}
                </span>
                <p className="text-[7.5px] sm:text-[11px] text-slate-400 leading-tight mt-0.5">
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
