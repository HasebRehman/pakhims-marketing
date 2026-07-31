"use client";

import { Activity, HeartPulse, Bell, Search, User, Stethoscope } from "lucide-react";

interface Mock3dPhoneProps {
  className?: string;
}

export default function Mock3dPhone({ className = "" }: Mock3dPhoneProps) {
  return (
    <div className={`relative phone-3d-tilt z-30 cursor-pointer ${className}`}>
      {/* 3D Phone Outer Shell */}
      <div className="w-[270px] sm:w-[290px] h-[540px] bg-slate-900 rounded-[44px] p-3 shadow-2xl shadow-slate-900/60 border-4 border-slate-700/80 relative">
        {/* Side Buttons */}
        <div className="absolute -left-[7px] top-24 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
        <div className="absolute -left-[7px] top-38 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
        <div className="absolute -right-[7px] top-28 w-[3px] h-14 bg-slate-600 rounded-r-sm" />

        {/* Screen Container */}
        <div className="w-full h-full bg-slate-950 rounded-[34px] overflow-hidden relative flex flex-col justify-between border border-slate-800 text-white font-sans text-xs">
          {/* Top Speaker Notch */}
          <div className="w-full bg-slate-950 pt-2.5 pb-1 px-4 flex justify-between items-center z-20 shrink-0">
            <span className="text-[10px] font-bold text-slate-400 font-mono">09:41 AM</span>
            <div className="w-20 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-1 border border-slate-800">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
              <span>5G</span>
              <div className="w-3.5 h-2 bg-emerald-500 rounded-xs" />
            </div>
          </div>

          {/* App Header */}
          <div className="px-3.5 py-2 bg-[#224183] text-white flex items-center justify-between border-b border-blue-900/40">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-black text-[10px]">
                H
              </div>
              <div>
                <div className="font-bold text-[11px] leading-tight">PAKHIMS Mobile</div>
                <div className="text-[8px] text-blue-200">Doctor & Admin App</div>
              </div>
            </div>
            <Bell className="w-3.5 h-3.5 text-red-400" />
          </div>

          {/* Phone Screen Main Body */}
          <div className="p-3 flex-1 overflow-y-auto space-y-2.5 text-[11px] bg-slate-900">
            {/* Search Bar */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 text-slate-400">
              <Search className="w-3 h-3 text-slate-500" />
              <span className="text-[10px]">Search Patient MRN / Token...</span>
            </div>

            {/* Quick Status Stats */}
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-[#224183]/30 border border-blue-500/30 p-2 rounded-xl">
                <div className="text-[9px] text-blue-300">OPD TOKENS</div>
                <div className="text-sm font-bold text-white font-mono">14 Active</div>
              </div>
              <div className="bg-[#CE2433]/20 border border-red-500/30 p-2 rounded-xl">
                <div className="text-[9px] text-red-300">EMERGENCY ICU</div>
                <div className="text-sm font-bold text-white font-mono">3 Critical</div>
              </div>
            </div>

            {/* Active Token Ticket Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 space-y-1">
              <div className="flex items-center justify-between text-[9px] text-slate-400">
                <span className="font-mono font-bold text-[#CE2433]">TOKEN #OPD-2048</span>
                <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-semibold">
                  NOW CALLING
                </span>
              </div>
              <div className="font-bold text-white text-xs">Muhammad Ali</div>
              <div className="text-[9px] text-slate-400 flex items-center justify-between">
                <span>Dr. Sarah (Cardiology)</span>
                <span>Room 12</span>
              </div>
            </div>

            {/* Vitals Summary Strip */}
            <div className="p-2 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
              <div className="text-[9px] font-bold text-slate-400 flex items-center gap-1">
                <HeartPulse className="w-3 h-3 text-red-400" />
                <span>Patient Vitals Log</span>
              </div>
              <div className="grid grid-cols-2 gap-1 text-[10px] font-mono">
                <div className="text-emerald-400 font-bold">BP: 120/80</div>
                <div className="text-red-400 font-bold">HR: 78 bpm</div>
              </div>
            </div>
          </div>

          {/* Bottom Nav Bar */}
          <div className="bg-slate-950 px-4 py-2 border-t border-slate-800 flex justify-between items-center text-slate-400 text-[10px]">
            <div className="flex flex-col items-center text-[#CE2433] font-bold">
              <Activity className="w-3.5 h-3.5" />
              <span className="text-[8px] mt-0.5">OPD</span>
            </div>
            <div className="flex flex-col items-center hover:text-white">
              <HeartPulse className="w-3.5 h-3.5" />
              <span className="text-[8px] mt-0.5">IPD</span>
            </div>
            <div className="flex flex-col items-center hover:text-white">
              <Stethoscope className="w-3.5 h-3.5" />
              <span className="text-[8px] mt-0.5">Rx</span>
            </div>
            <div className="flex flex-col items-center hover:text-white">
              <User className="w-3.5 h-3.5" />
              <span className="text-[8px] mt-0.5">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
