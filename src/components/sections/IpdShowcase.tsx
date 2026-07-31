"use client";

import { BedDouble, Activity, Stethoscope, Receipt, FileCheck } from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";
import { IpdScreen } from "../ui/SoftwareScreens";

export default function IpdShowcase() {
  const ipdFeatures = [
    { title: "Ward Bed Assignment", icon: BedDouble, desc: "Real-time occupancy tracking for General Ward, Private Rooms, and ICU beds." },
    { title: "Vitals & Nursing Charts", icon: Activity, desc: "Hourly blood pressure, heart rate, temperature, and IV administration logs." },
    { title: "Surgeries & Emergency", icon: Stethoscope, desc: "Pre-op checklists, OT schedules, anesthesia notes, and emergency admission tags." },
    { title: "Running Billing Ledger", icon: Receipt, desc: "Room rent, nursing charges, medicines, and doctor fees accumulate transparently." },
    { title: "Discharge & Medical Summary", icon: FileCheck, desc: "Complete medical summary export, discharge clearance, and official records retention." },
  ];

  return (
    <section id="ipd" className="py-20 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Screen Showcase Window with Permanent Heavy Shadow Behind */}
          <div className="lg:col-span-6 relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white">
            <MockBrowserWindow
              url="app.pakhims.com/ipd/admissions"
              title="PAKHIMS IPD Ward & Bed Management Engine"
              badgeText="IPD ACTIVE"
            >
              <IpdScreen />
            </MockBrowserWindow>
          </div>

          {/* Right Text & Features Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              <span className="inline-block whitespace-nowrap">Manage the Complete</span> <br />
              <span className="text-[#224183] inline-block whitespace-nowrap">Admitted Patient Journey.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Track admitted patients seamlessly from emergency/routine admission through daily ward rounds, vitals tracking, surgical procedures, and final discharge clearance.
            </p>

            {/* Feature Cards with Icons */}
            <div className="space-y-3 pt-2">
              {ipdFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#224183]/60 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#224183] transition-colors">
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

