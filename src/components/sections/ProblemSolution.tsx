"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  FileX,
  Clock,
  DollarSign,
  ShieldAlert,
  ArrowDown,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function ProblemSolution() {
  const painPoints = [
    {
      icon: FileX,
      title: "Paperwork & Lost File Overload",
      desc: "Physical folders get misplaced between OPD and IPD wards, creating delays in patient care and lost history.",
      iconBg: "bg-red-50 text-[#CE2433] border-red-100",
    },
    {
      icon: Clock,
      title: "Long Token & Waiting Queues",
      desc: "Manual registration leads to patient dissatisfaction and overcrowded reception waiting rooms.",
      iconBg: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: DollarSign,
      title: "Un-tracked Revenue & Doctor Shares",
      desc: "Calculating doctor percentages manually in Excel leads to disputes and missed financial accounting.",
      iconBg: "bg-blue-50 text-[#077dd3] border-blue-100",
    },
    {
      icon: ShieldAlert,
      title: "Disconnected Blood Bank & Labs",
      desc: "Untested or un-verified blood bag records pose severe liability risks and communication gaps.",
      iconBg: "bg-rose-50 text-rose-600 border-rose-100",
    },
  ];

  return (
    <section className="py-12 sm:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl pt-2 sm:pt-14 font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Hospital Management <br />
            <span className="text-[#077dd3]">Shouldn&apos;t Be Complicated.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Hospitals struggle with fragmented manual processes that cause administrative burnout, financial leakage, and delayed patient treatment.
          </p>
        </div>

        {/* 4 Clean Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-200/90 p-6 sm:p-7 rounded-3xl relative group hover:border-[#077dd3] hover:bg-white hover:shadow-[0_20px_45px_-10px_rgba(34,65,131,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-2xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading group-hover:text-[#077dd3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Downward Transition Indicator */}
        <div className="flex flex-col items-center justify-center my-10">
          <div className="w-11 h-11 rounded-full bg-[#CE2433] text-white flex items-center justify-center shadow-lg shadow-red-500/20 animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>

        {/* Solution Banner in Light Grey Box with Heavy Shadow Behind */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
                <span>THE PAKHIMS SOLUTION</span>
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#077dd3] tracking-tight font-heading leading-tight">
                Meet{" "}
                <span className="relative inline-block text-[#077dd3]">
                  PAKHIMS
                  {/* Animated Hand-Drawn Red Marker Underline SVG */}
                  <motion.svg
                    className="absolute -bottom-2.5 sm:-bottom-3 left-0 w-full h-4 sm:h-5 overflow-visible pointer-events-none"
                    viewBox="0 0 160 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <motion.path
                      d="M 3,10 C 35,3 105,2 157,7 M 18,17 C 65,11 125,10 159,14"
                      stroke="#CE2433"
                      strokeWidth="7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: {
                          pathLength: 1,
                          opacity: 1,
                          transition: { duration: 0.85, ease: "easeInOut", delay: 0.25 }
                        }
                      }}
                    />
                  </motion.svg>
                </span>
                . One Digital Platform for Your Whole Hospital.
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                PAKHIMS replaces paper friction with real-time digital sync. Online appointments, employee management, insurance panel tracking, doctor accounts, lab diagnostics, OPD token queues, IPD bed vitals, and blood bank verification exist in one clean digital environment.
              </p>

              {/* Stats Highlights inside White Boxes */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black text-[#077dd3] font-mono">100%</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Digital Record Traceability</div>
                </div>
                <div className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
                  <div className="text-2xl sm:text-3xl font-black text-[#CE2433] font-mono">3x</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Faster OPD Patient Processing</div>
                </div>
                <div className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">Zero</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Revenue Leakage</div>
                </div>
              </div>
            </div>

            {/* Hospital Photography */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Modern Hospital Facility"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent flex items-end p-5 text-white text-xs sm:text-sm font-semibold text-left">
                <span>Clean, modern digital hospital operations across Pakistan.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


