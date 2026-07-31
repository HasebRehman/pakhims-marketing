"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";

export default function AppointmentShowcase() {
  const appointmentSteps = [
    {
      id: "portal",
      name: "24/7 Online Booking Portal",
      desc: "Patients can search doctors by specialty, view open time slots, and book appointments anytime.",
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
      name: "Automated Reminders",
      desc: "Sends instant SMS and WhatsApp confirmation messages and appointment reminders to patients.",
      icon: MessageSquare,
    },
    {
      id: "sync",
      name: "Direct OPD Queue Sync",
      desc: "Confirmed appointments automatically appear on doctor consultation screens and OPD token counters.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="online-appointments" className="py-12 sm:py-28 bg-slate-50 text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text & Feature Steps Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block font-mono">
              ONLINE APPOINTMENT MODULE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Smart 24/7 Patient Booking & Scheduling.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Provide your patients with a seamless online appointment booking experience while keeping your OPD schedule perfectly organized.
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

          {/* Right Product Showcase Window */}
          <div className="lg:col-span-7 relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white">
            <MockBrowserWindow
              url="app.pakhims.com/appointments/online"
              title="PAKHIMS Online Doctor Appointment Portal"
            >
              <img
                src="/img/opd-img.png"
                alt="PAKHIMS Online Doctor Appointment Booking"
                className="w-full h-auto object-cover rounded-xl shadow-xs"
              />
            </MockBrowserWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
