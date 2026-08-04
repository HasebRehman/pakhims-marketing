"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Activity,
  HeartPulse,
  Droplet,
  FileText,
  DollarSign,
  ShieldCheck,
  UserCheck,
  Calendar,
  FlaskConical,
  ArrowRight
} from "lucide-react";

export default function ProductEcosystem() {
  const modules = [
    {
      id: "appointment",
      title: "Online Appointment",
      icon: Calendar,
      desc: "Instant patient scheduling, online booking portals, and doctor time slot management.",
      tag: "24/7 Booking",
    },
    {
      id: "opd",
      title: "OPD & Token Flow",
      icon: Activity,
      desc: "Instant patient registration, token generation, in-person doctor consultation, digital prescriptions & instant OPD receipts.",
      tag: "Queue Speed: 3x Faster",
    },
    {
      id: "lab",
      title: "Lab & Pathology",
      icon: FlaskConical,
      desc: "Diagnostic test catalog, sample collection tracking, automated lab test reports & printable diagnostic invoices.",
      tag: "Fast Diagnostics",
    },
    {
      id: "ipd",
      title: "IPD & Patient Journey",
      icon: HeartPulse,
      desc: "Complete admitted patient management from ward bed assignment, surgery/medical logs, vitals chart to discharge summary.",
      tag: "Complete Record Lock",
    },
    {
      id: "bloodbank",
      title: "Blood Bank Operations",
      icon: Droplet,
      desc: "Donation collection, 5-marker screening, laboratory cross-matching, verified barcode bag stickers & issuance tracking.",
      tag: "Safety Compliant",
    },
    {
      id: "accounts",
      title: "Doctor Shared Accounts",
      icon: DollarSign,
      desc: "Configurable doctor earnings ledgers: Daily fixed, monthly fixed, or per-patient consultation percentage splits.",
      tag: "Financial Transparency",
    },
    {
      id: "insurance",
      title: "Insurance & Panels",
      icon: ShieldCheck,
      desc: "Panel patient verification, insurance coverage limits, pre-authorization record tracking & claim invoicing.",
      tag: "Quick Reconciliation",
    },
    {
      id: "employees",
      title: "Employee Management",
      icon: UserCheck,
      desc: "Role-Based Access Control (RBAC) defining exact permissions for doctors, nurses, accountants, receptionists & admins.",
      tag: "Enterprise RBAC",
    },
  ];

  return (
    <section id="ecosystem" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Everything Your Hospital Needs. <br />
            <span className="text-[#224183]">Connected in One Platform.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Explore the 8 core pillars that power PAKHIMS and eliminate operational silos in your hospital.
          </p>
        </div>

        {/* Simple & Clean 8 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {modules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white text-slate-800 flex flex-col justify-start space-y-4 h-full group hover:-translate-y-1 hover:border-[#224183] hover:shadow-xl transition-all duration-300"
              >
                {/* Header Icon & Tag Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold bg-blue-50 text-[#224183] border border-blue-100/80 group-hover:bg-[#CE2433] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-2xs group-hover:scale-105">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/80">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#224183] transition-colors font-heading leading-tight min-h-[2.75rem] flex items-center">
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

        {/* Redirect CTA Button to Detailed Features Page */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/features"
            scroll={true}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-red-600/20 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Explore All Detailed Features</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
