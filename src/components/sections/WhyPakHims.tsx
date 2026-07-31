"use client";

import { motion } from "framer-motion";
import { Zap, Layers, BarChart3, Database, ShieldCheck, Award } from "lucide-react";

export default function WhyPakHims() {
  const benefits = [
    {
      title: "One Connected System",
      desc: "Eliminate fragmented software tools. Patient records, OPD, IPD, Blood Bank, and Accounts talk to each other automatically.",
      icon: Layers,
    },
    {
      title: "Zero Manual Paperwork",
      desc: "Digital token issuance, electronic prescriptions, and instant invoice receipts reduce administrative delay by up to 70%.",
      icon: Zap,
    },
    {
      title: "100% Financial Visibility",
      desc: "Know exact revenue split between hospital retention and doctor consultation shares without manual accounting errors.",
      icon: BarChart3,
    },
    {
      title: "Longitudinal Medical History",
      desc: "Never lose a patient's treatment story. Every visit, prescription, lab result, and invoice is tied permanently to their MRN.",
      icon: Database,
    },
    {
      title: "Blood Bank Safety & Compliance",
      desc: "Track blood bags from volunteer collection and 5-marker screening to cross-match verification and barcode bag issuing.",
      icon: ShieldCheck,
    },
    {
      title: "Rapid Staff Adoption",
      desc: "Clean, intuitive user interface designed specifically for hospital staff, requiring minimal training to get started.",
      icon: Award,
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
            <span className="relative inline-block text-[#224183]">
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
            PAKHIMS is built to solve real operational bottlenecks faced by healthcare administrators every day.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200/90 p-8 rounded-3xl space-y-4 hover:border-[#224183]/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group shadow-sm text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center font-bold shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#224183] transition-colors">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

