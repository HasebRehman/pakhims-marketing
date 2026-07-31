"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
              PAKHIMS simplifies hospital operations into one connected digital environment—managing OPD, IPD, Blood Bank, Doctor Accounts, Billing, and Staff Permissions with complete transparency.
            </p>
          </div>

          {/* Core Modules (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading tracking-wide">
              Core Modules
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              {[
                { name: "OPD & Token Management", href: "/features#opd" },
                { name: "IPD & Patient Care", href: "/features#ipd" },
                { name: "Central Billing Engine", href: "/features#billing" },
                { name: "Blood Bank Operations", href: "/features#bloodbank" },
                { name: "Doctor Revenue Accounts", href: "/features#accounts" },
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
                { name: "Why PAKHIMS", href: "/#why-pakhims" },
                { name: "Interactive Demo", href: "/#demo" },
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

          {/* Call to Action (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading tracking-wide">
              Get Started
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Experience live interactive workflows tailored for your hospital.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 px-5 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-sm font-bold rounded-xl shadow-lg shadow-red-950/40 transition-all duration-200 hover:scale-102 flex items-center justify-center gap-2 border border-red-500/30 active:scale-98 cursor-pointer whitespace-nowrap"
              >
                <span>Request Free Demo</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
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
