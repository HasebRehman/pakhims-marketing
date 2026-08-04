"use client";

import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";

interface FooterProps {
  onOpenDemo: () => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  return (
    <footer className="bg-[#0b1329] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/70">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group py-1">
              <img
                src="/img/pak-hims-logo.png"
                alt="PAKHIMS Hospital Management Platform"
                className="h-16 sm:h-20 md:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md font-sans">
              PAKHIMS simplifies hospital operations into one connected digital environment—managing OPD, IPD, Doctor Accounts, Billing, and Staff Permissions with 24/7 Apni Appointment sync.
            </p>
          </div>

          {/* Core Modules (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading tracking-wide">
              Core Modules
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              {[
                { name: "Apni Appointment Sync", href: "/features#appointment" },
                { name: "OPD & Token Management", href: "/features#opd" },
                { name: "IPD & Patient Care", href: "/features#ipd" },
                { name: "Central Billing Engine", href: "/features#billing" },
                { name: "Doctor Revenue Accounts", href: "/features#accounts" },
                { name: "Insurance Panel Tracking", href: "/features#insurance" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Platform (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              {[
                { name: "Overview", href: "/#hero" },
                { name: "Signature Core", href: "/#signature" },
                { name: "Detailed Features", href: "/features" },
                { name: "Interactive Demo", href: "/#demo" },
                { name: "Why PAKHIMS", href: "/#why-pakhims" },
                { name: "Pricing", href: "/pricing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Mobile App (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading tracking-wide">
              Patient Mobile App
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Patients can book doctor appointments 24/7 via the <strong className="text-white">Apni Appointment</strong> mobile app, synced live with your PAKHIMS hospital records.
            </p>

            {/* Request Free Demo Button */}
            <div className="pt-1">
              <button
                onClick={onOpenDemo}
                className="w-full py-3 px-5 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-red-950/40 transition-all duration-200 hover:scale-102 flex items-center justify-center gap-2 border border-red-500/30 active:scale-98 cursor-pointer whitespace-nowrap"
              >
                <span>Request Free Demo</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Official Google Play Store Badge (Under Request Free Demo) */}
            <div>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-black hover:bg-slate-900 border border-slate-700/90 hover:border-slate-500 rounded-xl text-white transition-all duration-200 shadow-md group hover:scale-[1.02] active:scale-95"
              >
                {/* Official Google Play Icon SVG */}
                <svg className="w-6.5 h-6.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.609 1.814L13.793 12 3.61 22.185A2.32 2.32 0 013 20.573V3.427c0-.64.24-1.22.609-1.613z" fill="#00E676"/>
                  <path d="M17.18 8.613l-3.387 3.387 3.387 3.387 3.826-2.186c.866-.495.866-1.907 0-2.402l-3.826-2.186z" fill="#FFD54F"/>
                  <path d="M13.793 12L3.609 1.814A2.38 2.38 0 014.887 1.5c.465 0 .914.129 1.306.353l10.987 6.279-3.387 3.868z" fill="#FF5252"/>
                  <path d="M13.793 12l3.387 3.868-10.987 6.279a2.535 2.535 0 01-1.306.353 2.38 2.38 0 01-1.278-.314L13.793 12z" fill="#448AFF"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-widest text-slate-300 font-sans font-normal">GET IT ON</div>
                  <div className="text-sm font-semibold font-sans text-white tracking-wide">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PAKHIMS Hospital Management Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              System Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
