"use client";

import { motion } from "framer-motion";
import { Building2, Stethoscope, Users, UserCheck } from "lucide-react";

export default function TargetAudience() {
  const audiences = [
    {
      role: "Private & Trust Hospitals",
      desc: "Multi-specialty 25-500 bed hospitals needing unified OPD, IPD, Blood Bank, and Accounts management.",
      icon: Building2,
    },
    {
      role: "Polyclinics & Medical Centers",
      desc: "High-volume outpatient centers requiring fast token queues, digital prescriptions, and instant OPD invoicing.",
      icon: Stethoscope,
    },
    {
      role: "Hospital Owners & Directors",
      desc: "Decision-makers who want 100% financial transparency, doctor share accountability, and stress-free operations.",
      icon: Users,
    },
    {
      role: "Medical Administrators & HODs",
      desc: "Operations heads who need real-time bed occupancy metrics, staff duty logs, and complete patient record safety.",
      icon: UserCheck,
    },
  ];

  return (
    <section id="target" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Built For The People <br />
            <span className="text-[#224183]">Running Healthcare.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Whether you manage a 30-bed clinic or a 300-bed multi-specialty hospital, PAKHIMS scales perfectly to your operational workflow.
          </p>
        </div>

        {/* 4 Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200/90 p-8 rounded-3xl space-y-4 hover:border-[#224183]/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center font-bold mb-4 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-900 font-heading group-hover:text-[#224183] transition-colors mb-2">{item.role}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

