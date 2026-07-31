"use client";

import { Receipt, Pill, Building2, ShieldCheck } from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";
import { BillingInvoiceScreen } from "../ui/SoftwareScreens";

export default function BillingShowcase() {
  const billingHighlights = [
    { title: "OPD Consultation Receipts", icon: Receipt, desc: "Instant token receipts printed directly from reception or doctor desk." },
    { title: "Medicine & Pharmacy Invoices", icon: Pill, desc: "Itemized medicine billing synchronized with stock inventory." },
    { title: "Cumulative IPD Master Invoices", icon: Building2, desc: "Consolidated room rent, nursing, OT, and medical charges at discharge." },
    { title: "Insurance Panel Invoicing", icon: ShieldCheck, desc: "Formal receipts formatted to panel claim submission specifications." },
  ];

  return (
    <section id="billing" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              <span className="inline-block whitespace-nowrap">Billing That Works With Your</span> <br />
              <span className="text-[#224183] inline-block whitespace-nowrap">Hospital Workflow.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              No more manual Excel calculations or lost charges. Relevant invoices and receipts are generated, printed, downloaded, and securely retained in the system instantly.
            </p>

            {/* Feature Cards with Icons */}
            <div className="space-y-3 pt-2">
              {billingHighlights.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#224183]/60 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#224183] transition-colors">
                        {b.title}
                      </div>
                      <div className="text-xs text-slate-600 font-sans mt-0.5 leading-normal truncate sm:whitespace-normal">
                        {b.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Invoice Screen Showcase Window with Permanent Heavy Shadow */}
          <div className="lg:col-span-7 relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white">
            <MockBrowserWindow
              url="app.pakhims.com/billing/invoice/print"
              title="PAKHIMS Printable Invoice & Invoicing Engine"
            >
              <img
                src="/img/billing.png"
                alt="Billing That Works With Your Hospital Workflow."
                className="w-full h-auto object-cover rounded-xl shadow-xs"
              />
            </MockBrowserWindow>
          </div>
        </div>
      </div>
    </section>
  );
}

