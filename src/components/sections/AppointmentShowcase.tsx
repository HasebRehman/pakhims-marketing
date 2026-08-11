"use client";

import { useState } from "react";
import { Calendar, Clock, MessageSquare, CheckCircle2, Search, MapPin, Star } from "lucide-react";

export default function AppointmentShowcase() {
  const [phoneHovered, setPhoneHovered] = useState(false);

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
              ONLINE APPOINTMENT MODULE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              Smart 24/7 Patient Booking & Scheduling.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Provide your patients with a seamless online appointment booking experience via the <strong className="font-bold text-slate-900">Apni Appointment</strong> patient portal, while keeping your hospital&apos;s OPD queue perfectly synchronized in real time.
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

          {/* Right Product Showcase Column - Interactive Mobile App Mockup */}
          <div className="lg:col-span-7 flex justify-center items-center">
            {/* 3D Tilted Phone Mockup Container */}
            <div 
              className="relative phone-3d-tilt z-10 cursor-pointer group/phone select-none"
              onMouseEnter={() => setPhoneHovered(true)}
              onMouseLeave={() => setPhoneHovered(false)}
            >
              {/* Outer soft ambient glow around the phone */}
              <div className="absolute -inset-2.5 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-[46px] blur-xl opacity-75 group-hover/phone:opacity-100 transition-all duration-500" />
              
              {/* Phone Frame */}
              <div className="w-[280px] sm:w-[300px] h-[580px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl border-4 border-slate-800/90 relative overflow-hidden flex flex-col">
                {/* Hardware Volume Buttons */}
                <div className="absolute -left-[4px] top-24 w-[3px] h-10 bg-slate-700 rounded-l-sm" />
                <div className="absolute -left-[4px] top-38 w-[3px] h-12 bg-slate-700 rounded-l-sm" />
                <div className="absolute -right-[4px] top-28 w-[3px] h-14 bg-slate-700 rounded-r-sm" />

                {/* Top Notch Status Bar */}
                <div className="w-full bg-slate-950 pt-2 pb-2 px-4 flex justify-between items-center z-30 relative shrink-0 rounded-t-[32px]">
                  <span className="text-[10px] font-bold text-slate-400 font-mono">09:41 AM</span>
                  <div className="w-16 h-3.5 bg-slate-900 rounded-full flex items-center justify-center gap-1 border border-slate-800/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                    <span className="text-[9px]">5G</span>
                  </div>
                </div>

                {/* App Viewscreen Container */}
                <div className="w-full flex-1 bg-slate-50 rounded-b-[32px] overflow-hidden relative border border-slate-800 flex flex-col">
                  
                  {/* Apni Appointment App Header */}
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white shrink-0 relative">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                          <Calendar className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="font-extrabold text-[12px] tracking-tight">Apni Appointment</span>
                      </div>
                      <span className="text-[8px] bg-white/20 px-2 py-0.5 rounded-full border border-white/10 font-bold">Portal Live</span>
                    </div>
                    
                    {/* Selected Location */}
                    <div className="flex items-center gap-1 text-[9px] text-emerald-100">
                      <MapPin className="w-3 h-3 text-emerald-200" />
                      <span>DHA Phase 6, Karachi</span>
                    </div>
                  </div>

                  {/* App Search Bar */}
                  <div className="px-3.5 py-3 bg-white border-b border-slate-100 shrink-0">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                      <input 
                        type="text" 
                        readOnly 
                        placeholder="Search doctors, specialties, clinics..." 
                        className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-[9px] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Scrollable App Body Container */}
                  <div 
                    className="p-3.5 space-y-4 flex-1 overflow-y-auto no-scrollbar"
                    data-lenis-prevent
                  >
                    
                    {/* Specialties horizontal list */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-slate-800">Popular Specialties</span>
                        <span className="text-[9px] text-emerald-600 font-medium hover:underline">See All</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: "Cardio", emoji: "🫀", bg: "bg-red-50 text-red-600 border-red-100/60" },
                          { label: "Pediatrics", emoji: "👶", bg: "bg-blue-50 text-blue-600 border-blue-100/60" },
                          { label: "Physician", emoji: "🩺", bg: "bg-teal-50 text-teal-600 border-teal-100/60" },
                          { label: "Dental", emoji: "🦷", bg: "bg-amber-50 text-amber-600 border-amber-100/60" },
                        ].map((spec) => (
                          <div key={spec.label} className={`flex flex-col items-center p-2 bg-white rounded-xl border ${spec.bg} cursor-pointer hover:scale-102 transition-transform`}>
                            <span className="text-xs mb-1">{spec.emoji}</span>
                            <span className="text-[8px] font-bold text-center leading-none truncate w-full">{spec.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Doctors List */}
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-800">Top Rated Doctors</span>
                        <span className="text-[9px] text-emerald-600 font-medium">Near You</span>
                      </div>

                      {[
                        {
                          name: "Dr. Ahmed Khan",
                          specialty: "Cardiologist",
                          rating: "4.9",
                          reviews: "142",
                          hospital: "City Care Hospital",
                          slot: "Today, 05:30 PM",
                          img: "/img/avatars/doc1.jpg"
                        },
                        {
                          name: "Dr. Sarah Ali",
                          specialty: "Pediatrician",
                          rating: "4.8",
                          reviews: "95",
                          hospital: "Green Hills Hospital",
                          slot: "Tomorrow, 10:00 AM",
                          img: "/img/avatars/doc2.jpg"
                        },
                        {
                          name: "Dr. Muhammad Usman",
                          specialty: "Consultant Physician",
                          rating: "4.7",
                          reviews: "82",
                          hospital: "DHA Medical Center",
                          slot: "Today, 07:00 PM",
                          img: "/img/avatars/doc3.jpg"
                        }
                      ].map((doc, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 rounded-xl p-2.5 shadow-sm space-y-2 hover:border-emerald-500/50 transition-all duration-300">
                          <div className="flex gap-2.5">
                            <img src={doc.img} alt={doc.name} className="w-9 h-9 rounded-full object-cover border border-slate-100 shrink-0" />
                            <div className="min-w-0 flex-1">
                              <div className="text-[10px] font-bold text-slate-800 leading-tight truncate">{doc.name}</div>
                              <div className="text-[8px] text-slate-500 leading-none mt-0.5 truncate">{doc.specialty} • {doc.hospital}</div>
                              <div className="flex items-center gap-1 mt-1">
                                <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                                <span className="text-[8px] font-bold text-slate-700">{doc.rating}</span>
                                <span className="text-[8px] text-slate-400">({doc.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Slot Selector Banner */}
                          <div className="bg-slate-50 rounded-lg p-1.5 flex items-center justify-between border border-slate-100">
                            <div className="flex items-center gap-1 text-[8px] text-slate-600">
                              <Clock className="w-2.5 h-2.5 text-emerald-500" />
                              <span className="font-semibold">{doc.slot}</span>
                            </div>
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-[8px] font-bold px-2 py-0.5 rounded-md transition-colors shadow-2xs">
                              Book Instant
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* App Bottom Navigation Bar */}
                  <div className="bg-white border-t border-slate-200/80 py-2 px-6 flex justify-between items-center shrink-0">
                    <div className="flex flex-col items-center gap-0.5 text-emerald-600 cursor-pointer">
                      <Search className="w-4 h-4" />
                      <span className="text-[7px] font-bold">Search</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-emerald-600 cursor-pointer">
                      <Calendar className="w-4 h-4" />
                      <span className="text-[7px] font-medium">Bookings</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-emerald-600 cursor-pointer">
                      <div className="w-4 h-4 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-[7px] font-bold text-slate-500">U</div>
                      <span className="text-[7px] font-medium">Profile</span>
                    </div>
                  </div>

                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
