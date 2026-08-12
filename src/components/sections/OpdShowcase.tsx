"use client";

import { Activity, UserPlus, Ticket, Stethoscope, Receipt, Database } from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";
import { OpdScreen } from "../ui/SoftwareScreens";

export default function OpdShowcase() {
  const opdSteps = [
    { id: "reg", name: "Registration & MRN", icon: UserPlus, desc: "Quick patient lookup or instant identity registration." },
    { id: "token", name: "Token Generation", icon: Ticket, desc: "Doctor-wise token issuance with live queue display." },
    { id: "consult", name: "Doctor Consultation", icon: Stethoscope, desc: "Digital diagnosis, symptoms & Rx prescription builder." },
    { id: "invoice", name: "OPD Invoicing", icon: Receipt, desc: "Instant consultation receipt generation & payment status." },
    { id: "history", name: "Saved History", icon: Database, desc: "Prescription & visit details permanently added to MRN." },
  ];

  return (
    <section id="opd" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text & Steps Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              <span className="inline-block whitespace-nowrap">Make Every OPD Visit</span> <br />
              <span className="text-[#077dd3]">Simpler and Faster.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              PAKHIMS simplifies patient registration, token-based flow, doctor consultation, digital prescriptions, medicine dispensing, and instant payment receipt generation into a smooth 2-minute workflow.
            </p>

            {/* Sequence Step Cards with Icons */}
            <div className="space-y-3 pt-2">
              {opdSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#077dd3]/60 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#077dd3] transition-colors">
                        {step.name}
                      </div>
                      <div className="text-xs text-slate-600 font-sans mt-0.5 leading-normal truncate sm:whitespace-normal">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Product Showcase Window with Permanent Heavy Shadow Behind */}
          <div className="lg:col-span-7 relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white">
            <MockBrowserWindow
              url="app.pakhims.com/opd/queue"
              title="PAKHIMS OPD Token & Consultation Station"
            >
              <img
                src="/img/opd-img.png"
                alt="Make Every OPD Visit Simpler and Faster."
                className="w-full h-auto object-cover rounded-xl shadow-xs"
              />
            </MockBrowserWindow>
          </div>
        </div>
      </div>
    </section>
  );
}

