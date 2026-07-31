"use client";

import { ReactNode } from "react";
import { Lock, RefreshCw, Layers, CheckCircle } from "lucide-react";

interface MockBrowserWindowProps {
  children: ReactNode;
  url?: string;
  title?: string;
  className?: string;
  badgeText?: string;
  showDepth?: boolean;
}

export default function MockBrowserWindow({
  children,
  url = "app.pakhims.com/dashboard/opd",
  title = "PAKHIMS Hospital Management System",
  className = "",
  badgeText = "LIVE SYSTEM",
  showDepth = true,
}: MockBrowserWindowProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden ${
        showDepth ? "shadow-blue-900/10" : ""
      } ${className}`}
    >
      {/* Top Light Window Bar */}
      <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-3 flex items-center justify-between gap-4">
        {/* Mac Control Dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-xl bg-white border border-slate-200 rounded-lg px-3 py-1 flex items-center justify-between text-xs text-slate-500 shadow-xs">
          <div className="flex items-center gap-2 truncate">
            <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="text-emerald-600 font-semibold">https://</span>
            <span className="text-slate-800 font-medium truncate">{url}</span>
          </div>
          <RefreshCw className="w-3 h-3 text-slate-400 shrink-0" />
        </div>

        {/* Status Badge */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#224183]/10 text-[#224183] border border-[#224183]/20">
            <CheckCircle className="w-3 h-3 text-[#CE2433]" />
            {badgeText}
          </span>
        </div>
      </div>

      {/* Screen Title Sub-bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2 font-semibold">
          <Layers className="w-3.5 h-3.5 text-[#CE2433]" />
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Hospital Server: Connected
          </span>
          <span className="hidden md:inline font-mono">ID: PAK-HOSP-094</span>
        </div>
      </div>

      {/* Main Screen Container */}
      <div className="relative bg-slate-50 p-2 sm:p-4 overflow-hidden min-h-[380px]">
        {children}
      </div>
    </div>
  );
}
