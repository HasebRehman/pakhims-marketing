"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, HeartPulse, Droplet, FileText, DollarSign } from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";
import { OpdScreen, IpdScreen, BloodBankScreen, BillingInvoiceScreen, AccountsScreen } from "../ui/SoftwareScreens";

interface InteractiveDemoProps {
  onOpenDemo?: () => void;
}

export default function InteractiveDemo({}: InteractiveDemoProps) {
  const [activeTab, setActiveTab] = useState<"opd" | "ipd" | "bloodbank" | "billing" | "accounts">("opd");

  const tabs = [
    { id: "opd", label: "OPD & Tokens", icon: Activity, url: "app.pakhims.com/opd/consultation" },
    { id: "ipd", label: "IPD & Wards", icon: HeartPulse, url: "app.pakhims.com/ipd/beds" },
    { id: "bloodbank", label: "Blood Bank", icon: Droplet, url: "app.pakhims.com/bloodbank/stock" },
    { id: "billing", label: "Billing Engine", icon: FileText, url: "app.pakhims.com/billing/receipts" },
    { id: "accounts", label: "Doctor Accounts", icon: DollarSign, url: "app.pakhims.com/accounts/ledger" },
  ];

  return (
    <section id="demo" className="py-20 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#224183] tracking-tight font-heading leading-tight pb-3">
            See{" "}
            <span className="relative inline-block text-[#224183]">
              PAKHIMS
              {/* Animated Hand-Drawn Red Marker Underline SVG */}
              <motion.svg
                className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-4 sm:h-5 overflow-visible pointer-events-none"
                viewBox="0 0 160 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.path
                  d="M 3,10 C 35,3 105,2 157,7 M 18,17 C 65,11 125,10 159,14"
                  stroke="#CE2433"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 0.85, ease: "easeInOut", delay: 0.25 }
                    }
                  }}
                />
              </motion.svg>
            </span>{" "}
            <span className="text-slate-900">In Action.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Click across the modules below to inspect actual software interfaces, live queues, bed managers, blood bank registers, and billing engines.
          </p>
        </div>

        {/* Sleek Tab Button Control Bar (Strictly One Single Line) */}
        <div className="p-1.5 bg-slate-100/90 border border-slate-200/90 rounded-2xl sm:rounded-full flex items-center justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12 w-fit max-w-full mx-auto overflow-x-auto no-scrollbar whitespace-nowrap shadow-2xs">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 relative shrink-0 whitespace-nowrap ${
                  isActive
                    ? "bg-[#224183] text-white shadow-md shadow-[#224183]/20"
                    : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/70"
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors shrink-0 ${isActive ? "text-[#CE2433]" : "text-slate-500"}`} />
                <span className="font-heading whitespace-nowrap">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Display Window Container with Permanent Heavy Shadow */}
        <div className="max-w-5xl mx-auto relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.99 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <MockBrowserWindow
                url={tabs.find((t) => t.id === activeTab)?.url}
                title={`PAKHIMS — ${tabs.find((t) => t.id === activeTab)?.label} Module`}
                badgeText="INTERACTIVE PREVIEW"
              >
                {activeTab === "opd" && <OpdScreen />}
                {activeTab === "ipd" && <IpdScreen />}
                {activeTab === "bloodbank" && <BloodBankScreen />}
                {activeTab === "billing" && <BillingInvoiceScreen />}
                {activeTab === "accounts" && <AccountsScreen />}
              </MockBrowserWindow>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
