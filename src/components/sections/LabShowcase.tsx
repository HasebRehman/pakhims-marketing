"use client";

import { motion } from "framer-motion";
import { FlaskConical, FileText, CheckCircle2, ShieldCheck } from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";

export default function LabShowcase() {
  const labHighlights = [
    {
      title: "Diagnostic Test Catalog",
      desc: "Pre-configured pathology test rates, normal range values, and sample collection guidelines.",
      icon: FlaskConical,
    },
    {
      title: "Sample Barcode Tracking",
      desc: "Generates unique barcode labels for blood and tissue vials to prevent sample mix-ups.",
      icon: CheckCircle2,
    },
    {
      title: "Automated Report Printing",
      desc: "Pathologist verification screen with instant printable PDF reports.",
      icon: FileText,
    },
    {
      title: "Dedicated Lab Billing & MRN",
      desc: "Dedicated lab billing engine with instant diagnostic receipts linked directly under patient MRN.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="lab-pathology" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Screen Showcase Window (Ordered SECOND on mobile, FIRST on desktop) */}
          <div className="lg:col-span-7 relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white order-2 lg:order-1">
            <MockBrowserWindow
              url="app.pakhims.com/lab/diagnostics"
              title="PAKHIMS Laboratory Diagnostics & Pathology Engine"
            >
              <img
                src="/img/opd-img.png"
                alt="PAKHIMS Lab & Diagnostics Management"
                className="w-full h-auto object-cover rounded-xl shadow-xs"
              />
            </MockBrowserWindow>
          </div>

          {/* Right Text & Feature Cards Column (Ordered FIRST on mobile, SECOND on desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block font-mono">
              LAB & PATHOLOGY MODULE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Fast, Error-Free Diagnostic & Lab Operations.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Streamline pathology test ordering, sample barcode tracking, result entry, and report printing in your hospital laboratory.
            </p>

            {/* Feature Cards with Icons */}
            <div className="space-y-3 pt-2">
              {labHighlights.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#077dd3]/60 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#077dd3] transition-colors">
                        {feat.title}
                      </div>
                      <div className="text-xs text-slate-600 font-sans mt-0.5 leading-normal truncate sm:whitespace-normal">
                        {feat.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
