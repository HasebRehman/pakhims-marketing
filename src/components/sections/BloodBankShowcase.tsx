"use client";

import { UserPlus, ShieldAlert, CheckCircle2, Barcode, ArrowRightLeft } from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";
import { BloodBankScreen } from "../ui/SoftwareScreens";

export default function BloodBankShowcase() {
  const bloodSteps = [
    { title: "Donor Registration & Collection", icon: UserPlus, desc: "Donor history screening and unique Bag ID tagging." },
    { title: "5-Marker Pathogen Screening", icon: ShieldAlert, desc: "Mandatory HIV, Hepatitis B/C, Syphilis & Malaria testing log." },
    { title: "Laboratory Testing & Approval", icon: CheckCircle2, desc: "Laboratory verification and stock status update (A+, B+, O-, etc)." },
    { title: "Printable Barcode Bag Sticker", icon: Barcode, desc: "Printable barcode sticker with volume, expiry, and clearance markers." },
    { title: "Patient Cross-Match & Issuing", icon: ArrowRightLeft, desc: "Patient recipient cross-match verification before dispatch." },
  ];

  return (
    <section id="bloodbank" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Right Text Column (Ordered FIRST on mobile, SECOND on desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              <span className="inline-block whitespace-nowrap">A Smarter Way to Manage</span> <br />
              <span className="text-[#224183] inline-block whitespace-nowrap">Your Hospital Blood Bank.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Digitize blood collection, mandatory pathogen screening, cross-matching, barcode sticker generation, and issuing history with complete safety compliance.
            </p>

            {/* Feature Cards with Icons */}
            <div className="space-y-3 pt-2">
              {bloodSteps.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#224183]/60 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#224183] transition-colors">
                        {s.title}
                      </div>
                      <div className="text-xs text-slate-600 font-sans mt-0.5 leading-normal truncate sm:whitespace-normal">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Screen Showcase Window (Ordered SECOND on mobile, FIRST on desktop) */}
          <div className="lg:col-span-7 relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white order-2 lg:order-1">
            <MockBrowserWindow
              url="app.pakhims.com/bloodbank/inventory"
              title="PAKHIMS Blood Bank Operations & Barcode Generator"
              badgeText="BLOOD BANK ACTIVE"
            >
              <BloodBankScreen />
            </MockBrowserWindow>
          </div>
        </div>
      </div>
    </section>
  );
}

