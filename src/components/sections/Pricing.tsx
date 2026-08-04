"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface PricingProps {
  onOpenDemo?: () => void;
  hideHeader?: boolean;
}

type TabType = "hospital" | "labs" | "blood-bank";

export default function Pricing({ onOpenDemo, hideHeader = false }: PricingProps) {
  const [activeTab, setActiveTab] = useState<TabType>("hospital");

  const tabsData = {
    hospital: {
      label: "Hospital Care",
      badge: "FULL HOSPITAL PLATFORM",
      features: [
        "Full OPD & Token Queue Engine",
        "IPD Ward & Bed Care Management",
        "Unified MRN & Patient History",
        "Doctor Shared Accounts & Ledger",
        "Itemized Billing & Printable Invoices",
        "Insurance Panel Tracking",
        "24/7 Priority Technical Support",
      ],
    },
    labs: {
      label: "Labs",
      badge: "LAB DIAGNOSTICS MODULE",
      features: [
        "Diagnostic Test Catalog & Custom Rates",
        "Sample Barcode Labeling & Tracking",
        "Pathologist Verification & PDF Reports",
        "Dedicated Lab Billing & MRN Integration",
        "Patient Test Results History & Archives",
        "Automated Reference Range Displays",
        "24/7 Priority Technical Support",
      ],
    },
    "blood-bank": {
      label: "Blood Bank",
      badge: "BLOOD BANK MODULE",
      features: [
        "Volunteer Donor Registration & History",
        "Mandatory 5-Marker Pathogen Screening",
        "Verified Barcode Bag Printing & Expiries",
        "Cross-Matching & Recipient Verification",
        "Blood Stock & Bag Inventory Engine",
        "Emergency Blood Issuance Audit Logs",
        "24/7 Priority Technical Support",
      ],
    },
  };

  const currentFeatures = tabsData[activeTab].features;

  return (
    <section id="pricing" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        {!hideHeader && (
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-mono">
            <Sparkles className="w-4 h-4 text-[#CE2433]" />
            <span>1-MONTH FREE TRIAL AVAILABLE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight pb-3">
            Simple, Transparent <br />
            <span className="relative inline-block text-[#224183]">
              Hospital Pricing.
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
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Start with a <strong className="text-[#224183]">1-Month Free Trial</strong>. Select a package for Hospital Care, Labs, or Blood Bank operations with zero hidden fees.
          </p>
        </div>
        )}

        {/* Interactive Pricing Tabs Switcher */}
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/90 shadow-inner gap-1">
            {(["hospital", "labs", "blood-bank"] as const).map((tabKey) => {
              const active = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-5 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold font-heading rounded-xl transition-all duration-300 ${
                    active
                      ? "bg-[#224183] text-white shadow-md scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {tabsData[tabKey].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Card 1: 1-Month Free Trial Plan */}
          <motion.div
            key={`card1-${activeTab}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-2 border-emerald-500 rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative text-left ring-4 ring-emerald-500/10"
          >
            {/* Free Trial Ribbon Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-extrabold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap tracking-wide border border-emerald-400/40">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              1-MONTH FREE TRIAL
            </div>

            <div>
              {/* Badge & Plan Name */}
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  FREE TRIAL
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  100% Free
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                1-Month Free Trial
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
                Get 1 full month of free access to try PAKHIMS {tabsData[activeTab].label} with zero commitment.
              </p>

              {/* Price Display */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-700 font-heading">
                    FREE
                  </span>
                  <span className="text-base font-bold text-emerald-800 font-heading">
                    TRIAL
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    / 1st month
                  </span>
                </div>
                <div className="text-xs text-emerald-700 font-mono font-semibold mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>100% Free • No credit card required</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading">
                  WHAT&apos;S INCLUDED IN {tabsData[activeTab].label.toUpperCase()}:
                </div>
                {currentFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 sm:py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-emerald-400/40"
              >
                <span>Start 1-Month Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: 6-Month Package Plan */}
          <motion.div
            key={`card2-${activeTab}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-white border-2 border-[#224183] rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative text-left ring-4 ring-blue-500/10"
          >
            <div>
              {/* Badge & Plan Name */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-[#224183] border border-blue-200">
                  SEMI-ANNUAL PACKAGE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                6-Month Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
                Full 6-month subscription for {tabsData[activeTab].label.toLowerCase()} operations.
              </p>

              {/* Price Display */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#224183] font-heading">
                    30,000
                  </span>
                  <span className="text-base font-bold text-[#224183] font-heading">
                    PKR
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    / 6 months
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  Equivalent to 5,000 PKR / month
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#224183] font-heading flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#CE2433]" />
                  <span>WHAT&apos;S INCLUDED IN {tabsData[activeTab].label.toUpperCase()}:</span>
                </div>
                {currentFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-sans font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#224183] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#224183] font-sans font-bold pt-1">
                  <div className="w-5 h-5 rounded-full bg-[#224183] text-white flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>Free Data Migration & System Onboarding</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 sm:py-4 px-6 bg-[#224183] hover:bg-[#1a3366] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Contact Us to Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: 1-Year (12-Month) Package (Save 10,000 PKR Offer) */}
          <motion.div
            key={`card3-${activeTab}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white border-2 border-emerald-600 rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative text-left ring-4 ring-emerald-500/10"
          >
            {/* 1-Year Offer Ribbon Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-extrabold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap tracking-wide border border-emerald-400/40">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              SAVE 10,000 PKR • MAXIMUM SAVINGS
            </div>

            <div>
              {/* Badge & Plan Name */}
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ANNUAL PACKAGE
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  2 Months FREE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                1-Year Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
                Pay for 10 months and get 2 full months completely FREE.
              </p>

              {/* Price Display */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-700 font-heading">
                    50,000
                  </span>
                  <span className="text-base font-bold text-emerald-800 font-heading">
                    PKR
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    / 12 months
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-slate-400 line-through font-mono font-semibold">
                    60,000 PKR
                  </span>
                  <span className="text-xs font-bold text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Instant 10,000 PKR Discount Applied
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  Equivalent to ~4,166 PKR / month
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-heading flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ALL {tabsData[activeTab].label.toUpperCase()} PERKS PLUS:</span>
                </div>
                {currentFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-sans font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-800 font-sans font-bold pt-1">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>Dedicated 24/7 Account Manager & Onboarding</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 sm:py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-emerald-400/40"
              >
                <span>Contact Us for 10,000 PKR Discount</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Purchasing Process Notice Box */}
        <div className="mt-12 max-w-3xl mx-auto p-6 sm:p-7 bg-slate-50 border border-slate-200/90 rounded-3xl text-center space-y-3 shadow-xs">
          <div className="text-xs sm:text-sm font-extrabold text-[#224183] font-heading tracking-wide uppercase">
            HOW TO SUBSCRIBE
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Subscriptions and setup are configured directly by our official hospital onboarding team. Click any button above to contact us or request a live demo. Our specialist will contact you within 1 hour to set up your hospital workspace, configure doctor ledgers, and train your staff.
          </p>
        </div>
      </div>
    </section>
  );
}
