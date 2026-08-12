"use client";

import { motion } from "framer-motion";
import { Clock, FileX2, DollarSign, Droplets, ShieldAlert, UserCheck } from "lucide-react";

export default function WhyPakHims() {
  const bottlenecks = [
    {
      bottleneck: "OPD Queue Delays & Paper Tokens",
      fix: "Digital 1-click token queues & real-time patient queue management cut patient wait times by up to 70%.",
      icon: Clock,
      tag: "OPD Bottleneck Fixed",
    },
    {
      bottleneck: "Lost Patient Records & Scattered Files",
      fix: "Unified MRN permanently links all prescriptions, lab reports, and IPD history under 1 searchable patient file.",
      icon: FileX2,
      tag: "Record Loss Fixed",
    },
    {
      bottleneck: "Doctor Revenue & Share Disputes",
      fix: "Automated real-time doctor ledger calculates daily rates, retainers & percentage shares with 0 manual accounting errors.",
      icon: DollarSign,
      tag: "Revenue Leakage Fixed",
    },
    {
      bottleneck: "Blood Bank Screening & Inventory Risks",
      fix: "Mandatory 5-marker screening, barcode bag stickers, and automated donor cross-matching ensure 100% safety compliance.",
      icon: Droplets,
      tag: "Blood Bank Risk Fixed",
    },
    {
      bottleneck: "Delayed Panel & Insurance Claims",
      fix: "Instant insurance panel verification, coverage cap tracking, and 100% panel-compliant auto-invoicing eliminate claim rejections.",
      icon: ShieldAlert,
      tag: "Claim Rejection Fixed",
    },
    {
      bottleneck: "Unauthorized Edits & Security Risks",
      fix: "Strict Role-Based Access Control (RBAC) ensures staff only see and edit screens relevant to their specific duty.",
      icon: UserCheck,
      tag: "Security Risk Fixed",
    },
  ];

  return (
    <section id="why-pakhims" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight pb-3">
            Why Hospital Owners <br />
            Choose{" "}
            <span className="relative inline-block text-[#077dd3]">
              PAKHIMS
              {/* Animated Hand-Drawn Red Marker Underline SVG */}
              <motion.svg
                className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-4 sm:h-5 overflow-visible pointer-events-none"
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
            .
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Eliminate operational delays, financial disputes, lost records, and compliance risks across your hospital.
          </p>
        </div>

        {/* Bottlenecks & Fixes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {bottlenecks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.bottleneck}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200/90 p-7 sm:p-8 rounded-3xl space-y-4 hover:border-[#077dd3]/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group shadow-sm text-left flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Top Header Icon & Tag Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center font-bold shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#CE2433] border border-red-200/80">
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottleneck Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-[#077dd3] transition-colors leading-tight">
                    {item.bottleneck}
                  </h3>

                  {/* PAKHIMS Solution Fix */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.fix}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

