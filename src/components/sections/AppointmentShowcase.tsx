"use client";

import { Calendar, Clock, MessageSquare, CheckCircle2 } from "lucide-react";

export default function AppointmentShowcase() {
  const appointmentSteps = [
    {
      id: "portal",
      name: "24/7 Booking via Apni Appointment",
      desc: "Patients can search doctors and book appointments 24/7 through the Apni Appointment website or mobile app, fully synced with PAKHIMS.",
      icon: Calendar,
    },
    {
      id: "slots",
      name: "Real-Time Slot Allocation",
      desc: "Prevents double-booking by locking time slots instantly across hospital reception and online portals.",
      icon: Clock,
    },
    {
      id: "reminders",
      name: "Instant Confirmations",
      desc: "Sends instant confirmation details and appointment slot information directly to patients.",
      icon: MessageSquare,
    },
    {
      id: "sync",
      name: "Direct OPD Queue Sync",
      desc: "Confirmed appointments automatically sync directly with hospital OPD token counters.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="online-appointments" className="py-12 sm:py-28 bg-slate-50 text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Text & Feature Steps Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#224183] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block font-mono">
              ONLINE APPOINTMENT
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Smart 24/7 Patient Booking &amp; Scheduling.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Provide your patients with a seamless online appointment booking experience via the{" "}
              <strong className="font-bold text-slate-900 mr-1">Apni Appointment</strong>
              patient portal, while keeping your hospital&apos;s OPD queue perfectly synchronized in real time.
            </p>

            {/* Step Cards with Icons */}
            <div className="space-y-3 pt-2">
              {appointmentSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#224183]/60 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#224183] transition-colors">
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

          {/* Right Product Showcase Column - Phone with Real Screenshot */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <a
              href="https://play.google.com/store/search?q=apni%20appointment&c=apps"
              target="_blank"
              rel="noopener noreferrer"
              className="relative phone-3d-tilt z-10 select-none block cursor-pointer hover:scale-[1.02] active:scale-98 transition-all"
            >
              {/* Ambient glow */}
              <div className="absolute -inset-2.5 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-[46px] blur-xl opacity-75" />

              {/* Phone Frame */}
              <div className="w-[280px] sm:w-[300px] h-[580px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl border-4 border-slate-800/90 relative overflow-hidden flex flex-col">
                {/* Hardware Volume Buttons */}
                <div className="absolute -left-[4px] top-24 w-[3px] h-10 bg-slate-700 rounded-l-sm" />
                <div className="absolute -left-[4px] top-38 w-[3px] h-12 bg-slate-700 rounded-l-sm" />
                <div className="absolute -right-[4px] top-28 w-[3px] h-14 bg-slate-700 rounded-r-sm" />

                {/* Status Bar */}
                <div className="w-full bg-slate-950 pt-2 pb-2 px-4 flex justify-between items-center z-30 relative shrink-0 rounded-t-[32px]">
                  <span className="text-[10px] font-bold text-slate-400 font-mono">09:41 AM</span>
                  <div className="w-16 h-3.5 bg-slate-900 rounded-full flex items-center justify-center gap-1 border border-slate-800/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">5G</span>
                </div>

                {/* Phone Screen — Real PAKHIMS Screenshot */}
                <div className="w-full flex-1 rounded-b-[32px] overflow-hidden border border-slate-800">
                  <img
                    src="/img/pakhims-mobile.png"
                    alt="PAKHIMS Mobile App"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
