"use client";

import { Heart, Users, Star, Shield, Stethoscope, Calendar, Activity, Building2, Droplets, Lock, Settings, ArrowRight, Clock, CheckCircle2, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

/* ────────────────────────────────────────────────────────
   Desktop-class faithful replica of profile.pakhims.com
   Matches the real site's layout, colors, typography
   ──────────────────────────────────────────────────────── */
export function DesktopProfileShowcase() {
  return (
    <div className="w-full bg-white text-gray-900 font-sans text-xs select-none overflow-hidden">

      {/* ═══════ HEADER / NAVBAR ═══════ */}
      <div className="bg-white border-b border-blue-100/50 px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Heart className="w-5 h-5 text-white fill-white/40" />
          </div>
          <div>
            <div className="font-bold text-base bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PAKHIMS</div>
            <div className="text-[9px] text-gray-500 -mt-0.5">Healthcare Excellence</div>
          </div>
        </div>
        <nav className="flex items-center gap-1">
          {["Home", "Features", "Stats", "Screenshots", "How It Works", "Who It's For", "Testimonials", "Contact"].map((item, i) => (
            <span
              key={item}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-medium ${
                i === 0
                  ? "text-blue-600 bg-blue-50/80 shadow-sm"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item}
            </span>
          ))}
        </nav>
      </div>

      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)" }}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
        <Stethoscope className="absolute top-8 right-8 w-32 h-32 text-white/[0.06]" />
        <Calendar className="absolute bottom-8 left-8 w-24 h-24 text-white/[0.06]" />

        <div className="relative z-10 flex flex-col items-center justify-center px-8 py-16 text-center text-white">
          {/* Top stats pills */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/15 flex items-center gap-1.5 text-xs">
              <Users className="w-3.5 h-3.5" />
              <span className="font-semibold">50K+</span>
              <span className="text-white/70 text-[10px]">Patients</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/15 flex items-center gap-1.5 text-xs">
              <Star className="w-3.5 h-3.5" />
              <span className="font-semibold">4.9</span>
              <span className="text-white/70 text-[10px]">Rating</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/15 flex items-center gap-1.5 text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span className="font-semibold">Secure</span>
              <span className="text-white/70 text-[10px]">Platform</span>
            </div>
          </div>

          {/* Badge */}
          <div className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[11px] font-medium border border-white/20 mb-5">
            🏥 Pakistan&apos;s Leading Healthcare Platform
          </div>

          {/* Main headline */}
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 max-w-xl">
            PAKHIMS: Book Hospital Appointments with Ease
          </h1>

          <p className="text-sm text-blue-100 max-w-md leading-relaxed mb-6 font-light">
            Experience seamless healthcare management with intelligent scheduling, comprehensive medical records, and trusted professional care.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 mb-8">
            <button className="bg-white text-blue-900 px-5 py-2 rounded-xl text-xs font-semibold shadow-lg flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
              <ArrowRight className="w-3 h-3" />
            </button>
            <button className="backdrop-blur-md border-2 border-white/20 text-white px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5" />
              Pakhims Signup
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-5 text-blue-100/80 text-[10px]">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> HIPAA Compliant & Secure</span>
            <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> Trusted by Healthcare Professionals</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 24/7 Emergency Support</span>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES / MODULES SECTION ═══════ */}
      <section className="py-12 px-8 bg-white">
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-semibold border border-blue-100 mb-4">
            🏥 Complete Healthcare Management System
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            PAKHIMS Core <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">Modules</span>
          </h2>
          <p className="text-[11px] text-gray-600 max-w-md mx-auto leading-relaxed">
            Comprehensive healthcare management platform with 9 core integrated modules for appointments, employee management, insurance, pathology, authentication, and complete patient care.
          </p>
        </div>

        {/* Module circles in heart pattern */}
        <div className="relative max-w-md mx-auto h-72">
          {/* Heart SVG outline */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-10">
            <path d="M50,25 C50,15 35,5 25,15 C15,5 0,15 0,25 C0,35 25,60 50,85 C75,60 100,35 100,25 C100,15 85,5 75,15 C65,5 50,15 50,25 Z" fill="none" stroke="url(#hg)" strokeWidth="0.5" />
            <defs>
              <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Module nodes */}
          {[
            { icon: Calendar, color: "from-blue-500 to-blue-600", label: "Appointments", x: "25%", y: "45%" },
            { icon: Users, color: "from-green-500 to-green-600", label: "Employee", x: "75%", y: "30%" },
            { icon: Shield, color: "from-purple-500 to-purple-600", label: "Insurance", x: "18%", y: "25%" },
            { icon: Activity, color: "from-red-500 to-red-600", label: "Pathology", x: "80%", y: "50%" },
            { icon: Settings, color: "from-gray-500 to-gray-600", label: "Settings", x: "50%", y: "20%" },
            { icon: Stethoscope, color: "from-teal-500 to-teal-600", label: "OPD", x: "35%", y: "65%" },
            { icon: Building2, color: "from-orange-500 to-orange-600", label: "IPD", x: "65%", y: "65%" },
            { icon: Lock, color: "from-indigo-500 to-indigo-600", label: "Authentication", x: "50%", y: "78%" },
            { icon: Droplets, color: "from-rose-500 to-rose-600", label: "Blood Bank", x: "50%", y: "48%" },
          ].map((mod) => {
            const Icon = mod.icon;
            return (
              <div key={mod.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: mod.x, top: mod.y }}>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${mod.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-semibold text-gray-700 shadow-md border border-gray-200/50 whitespace-nowrap">
                  {mod.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ STATS SECTION ═══════ */}
      <section className="py-10 px-8 bg-gray-50 border-t border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Platform Performance</h2>
          <p className="text-[10px] text-gray-500">Trusted healthcare metrics across Pakistan</p>
        </div>
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          {[
            { value: "50K+", label: "Active Patients", color: "text-blue-600" },
            { value: "99.8%", label: "System Uptime", color: "text-emerald-600" },
            { value: "4.9★", label: "User Rating", color: "text-amber-600" },
            { value: "24/7", label: "Live Support", color: "text-purple-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-200/80 p-3 rounded-xl text-center shadow-sm">
              <div className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-[9px] text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ HOW IT WORKS SECTION ═══════ */}
      <section className="py-10 px-8 bg-white border-t border-gray-100">
        <div className="text-center mb-6">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-semibold border border-blue-100 mb-3">
            ✨ Simple Process
          </div>
          <h2 className="text-lg font-bold text-gray-900">How PAKHIMS Works</h2>
        </div>
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          {[
            { step: "01", title: "Register", desc: "Create secure account", icon: Users, color: "bg-blue-500" },
            { step: "02", title: "Find Doctor", desc: "Search verified specialists", icon: Stethoscope, color: "bg-green-500" },
            { step: "03", title: "Book Slot", desc: "Choose available time", icon: Calendar, color: "bg-purple-500" },
            { step: "04", title: "Get Care", desc: "Receive treatment", icon: Heart, color: "bg-red-500" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="text-center space-y-2">
                <div className={`w-10 h-10 ${s.color} rounded-full flex items-center justify-center mx-auto shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-[10px] font-bold text-gray-500 font-mono">{s.step}</div>
                <div className="text-xs font-bold text-gray-900">{s.title}</div>
                <div className="text-[9px] text-gray-500">{s.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ TESTIMONIALS SECTION ═══════ */}
      <section className="py-10 px-8 bg-gray-50 border-t border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">What Our Users Say</h2>
        </div>
        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
          {[
            { name: "Dr. Ahmed Khan", role: "Cardiologist", text: "PAKHIMS has completely transformed how we manage patient records and appointments." },
            { name: "Nurse Fatima", role: "Head Nurse", text: "The blood bank module is incredibly efficient. Real-time tracking saves critical time." },
            { name: "Admin Director", role: "Hospital Admin", text: "Insurance claims processing went from days to hours with the integrated workflow." },
          ].map((t) => (
            <div key={t.name} className="bg-white border border-gray-200/80 p-3 rounded-xl shadow-sm space-y-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-[10px] text-gray-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div>
                <div className="text-[10px] font-bold text-gray-900">{t.name}</div>
                <div className="text-[9px] text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ CONTACT / FOOTER SECTION ═══════ */}
      <section className="py-8 px-8 bg-gray-900 text-white border-t border-gray-800">
        <div className="flex items-start justify-between max-w-lg mx-auto">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white/40" />
              </div>
              <span className="font-bold text-sm">PAKHIMS</span>
            </div>
            <p className="text-[9px] text-gray-400 max-w-xs leading-relaxed">
              Pakistan&apos;s leading healthcare information management system connecting patients, doctors, and healthcare providers.
            </p>
          </div>
          <div className="space-y-1.5 text-[10px] text-gray-400">
            <div className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> +92 300 000 0000</div>
            <div className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> support@pakhims.com</div>
            <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Pakistan</div>
          </div>
        </div>
        <div className="text-center text-[9px] text-gray-500 mt-5 pt-4 border-t border-gray-800">
          © 2025 PAKHIMS. All rights reserved. | Privacy Policy | Terms of Service
        </div>
      </section>
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   Mobile-class faithful replica of profile.pakhims.com
   ──────────────────────────────────────────────────────── */
export function MobileProfileShowcase() {
  return (
    <div className="w-full bg-white text-gray-900 font-sans text-[10px] select-none overflow-hidden">

      {/* Mobile Header */}
      <div className="bg-white border-b border-blue-100/50 px-3 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <Heart className="w-4 h-4 text-white fill-white/40" />
          </div>
          <span className="font-bold text-sm bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PAKHIMS</span>
        </div>
        <div className="flex flex-col gap-[3px] w-5">
          <div className="w-full h-[2px] bg-gray-600 rounded-full" />
          <div className="w-full h-[2px] bg-gray-600 rounded-full" />
          <div className="w-full h-[2px] bg-gray-600 rounded-full" />
        </div>
      </div>

      {/* Mobile Hero */}
      <section className="relative overflow-hidden px-4 py-10 text-center text-white" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)" }}>
        <div className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-medium border border-white/20 inline-block mb-4">
          🏥 Pakistan&apos;s Leading Healthcare Platform
        </div>
        <h1 className="text-lg font-bold leading-snug mb-3">
          PAKHIMS: Book Hospital Appointments with Ease
        </h1>
        <p className="text-[10px] text-blue-100 leading-relaxed mb-4">
          Experience seamless healthcare management with intelligent scheduling and trusted professional care.
        </p>
        <div className="flex flex-col gap-2">
          <button className="bg-white text-blue-900 px-4 py-2 rounded-xl text-[10px] font-semibold shadow-lg flex items-center gap-1.5 justify-center mx-auto">
            <Calendar className="w-3 h-3" /> Book Appointment <ArrowRight className="w-2.5 h-2.5" />
          </button>
          <button className="backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-[10px] font-semibold flex items-center gap-1.5 justify-center mx-auto">
            <Stethoscope className="w-3 h-3" /> Pakhims Signup
          </button>
        </div>
      </section>

      {/* Mobile Features */}
      <section className="py-6 px-4 bg-white">
        <div className="text-center mb-4">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[9px] font-semibold border border-blue-100 mb-2">
            🏥 Complete Healthcare System
          </div>
          <h2 className="text-sm font-bold text-gray-900">
            PAKHIMS Core <span className="text-red-500">Modules</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Calendar, label: "Appointments", color: "from-blue-500 to-blue-600" },
            { icon: Users, label: "Employee", color: "from-green-500 to-green-600" },
            { icon: Shield, label: "Insurance", color: "from-purple-500 to-purple-600" },
            { icon: Stethoscope, label: "OPD", color: "from-teal-500 to-teal-600" },
            { icon: Building2, label: "IPD", color: "from-orange-500 to-orange-600" },
            { icon: Droplets, label: "Blood Bank", color: "from-rose-500 to-rose-600" },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="flex flex-col items-center gap-1.5 p-2 bg-gray-50 rounded-xl border border-gray-100">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${m.color} flex items-center justify-center shadow`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-[9px] font-semibold text-gray-700">{m.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="py-5 px-4 bg-gray-50 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-2">
          {[
            { value: "50K+", label: "Active Patients", color: "text-blue-600" },
            { value: "4.9★", label: "User Rating", color: "text-amber-600" },
            { value: "99.8%", label: "Uptime", color: "text-emerald-600" },
            { value: "24/7", label: "Support", color: "text-purple-600" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-200/80 p-2.5 rounded-xl text-center shadow-sm">
              <div className={`text-sm font-bold font-mono ${s.color}`}>{s.value}</div>
              <div className="text-[8px] text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Testimonial */}
      <section className="py-5 px-4 bg-white border-t border-gray-100">
        <div className="bg-gray-50 border border-gray-200/80 p-3 rounded-xl space-y-1.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />)}
          </div>
          <p className="text-[9px] text-gray-600 leading-relaxed">&ldquo;PAKHIMS has transformed how we manage patient records and hospital operations.&rdquo;</p>
          <div className="text-[9px] font-bold text-gray-900">Dr. Ahmed Khan • Cardiologist</div>
        </div>
      </section>

      {/* Mobile Footer */}
      <section className="py-5 px-4 bg-gray-900 text-white text-center border-t border-gray-800">
        <div className="flex items-center gap-2 justify-center mb-2">
          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
            <Heart className="w-3 h-3 text-white fill-white/40" />
          </div>
          <span className="font-bold text-xs">PAKHIMS</span>
        </div>
        <p className="text-[8px] text-gray-400 mb-2">Pakistan&apos;s leading healthcare information management system.</p>
        <div className="text-[8px] text-gray-500">© 2025 PAKHIMS. All rights reserved.</div>
      </section>
    </div>
  );
}
