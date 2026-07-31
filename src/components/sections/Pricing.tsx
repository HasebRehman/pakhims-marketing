"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface PricingProps {
  onOpenDemo?: () => void;
  hideHeader?: boolean;
}

export default function Pricing({ onOpenDemo, hideHeader = false }: PricingProps) {
  const planFeatures = [
    "Full OPD & Token Queue Engine",
    "IPD Ward & Bed Care Management",
    "Unified MRN & Patient History",
    "Blood Bank & 5-Marker Screening",
    "Doctor Shared Accounts & Ledger",
    "Itemized Billing & Printable Invoices",
    "Insurance Panel Tracking",
    "24/7 Priority Technical Support",
  ];

  return (
    <section id="pricing" className="py-12 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        {!hideHeader && (
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
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
            No hidden setup fees or surprise charges. Choose a simple monthly subscription or save 5,000 PKR with our 6-month package.
          </p>
        </div>
        )}

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Card 1: 1-Month Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative text-left"
          >
            <div>
              {/* Badge & Plan Name */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  STANDARD MONTHLY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                1-Month Access
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
                Flexible pay-as-you-go monthly subscription for clinics & hospitals.
              </p>

              {/* Price Display */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
                    5,000
                  </span>
                  <span className="text-base font-bold text-[#224183] font-heading">
                    PKR
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    / month
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  Billed monthly • Cancel anytime
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading">
                  WHAT&apos;S INCLUDED:
                </div>
                {planFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-[#224183] flex items-center justify-center shrink-0 border border-blue-100">
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
                className="w-full py-3.5 sm:py-4 px-6 bg-slate-900 hover:bg-[#224183] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Contact Us to Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: 6-Month Special Offer Plan (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border-2 border-[#224183] rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative text-left ring-4 ring-blue-500/10"
          >
            {/* Special Offer Ribbon Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#CE2433] text-white text-[11px] font-extrabold px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap tracking-wide border border-red-400/40">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              SAVE 5,000 PKR • POPULAR OFFER
            </div>

            <div>
              {/* Badge & Plan Name */}
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-red-50 text-[#CE2433] border border-red-200">
                  SEMI-ANNUAL PACKAGE
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Save 17%
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                6-Month Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
                Pay for 5 months and get 1 month completely FREE.
              </p>

              {/* Price Display */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#224183] font-heading">
                    25,000
                  </span>
                  <span className="text-base font-bold text-[#224183] font-heading">
                    PKR
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    / 6 months
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-slate-400 line-through font-mono font-semibold">
                    30,000 PKR
                  </span>
                  <span className="text-xs font-bold text-[#CE2433] font-mono bg-red-50 px-2 py-0.5 rounded border border-red-100">
                    Instant 5,000 PKR Discount
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-1">
                  Equivalent to ~4,166 PKR / month
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#224183] font-heading flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#CE2433]" />
                  <span>ALL STANDARD FEATURES PLUS:</span>
                </div>
                {planFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-sans font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#CE2433] text-white flex items-center justify-center shrink-0 shadow-2xs">
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
                className="w-full py-3.5 sm:py-4 px-6 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-red-400/40"
              >
                <span>Contact Us for 5,000 PKR Discount</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: 1-Year (12-Month) Package (10,000 PKR Discount Offer) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
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
                  <span>ALL STANDARD & 6-MONTH PERKS PLUS:</span>
                </div>
                {planFeatures.map((feat) => (
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
        <div className="mt-12 max-w-3xl mx-auto p-5 sm:p-6 bg-slate-50 border border-slate-200/90 rounded-2xl text-center space-y-2 shadow-xs">
          <div className="text-xs sm:text-sm font-extrabold text-[#224183] font-heading tracking-wide uppercase">
            HOW TO SUBSCRIBE TO PAKHIMS
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Subscriptions and setup are configured directly by our official hospital onboarding team. Click any button above to contact us or request a live demo. Our specialist will guide you through setup, doctor ledger configurations, and staff training.
          </p>
        </div>
      </div>
    </section>
  );
}
