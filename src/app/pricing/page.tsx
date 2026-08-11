"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/ui/DemoModal";
import Pricing from "@/components/sections/Pricing";
import { HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  const faqs = [
    {
      q: "How does the 5,000 PKR / month pricing structure work?",
      a: "PAKHIMS offers a transparent subscription of 5,000 PKR / month. There are zero hidden setup fees, zero per-user charges, and zero per-patient costs. Every subscription includes full access to OPD, IPD, Patient History (MRN), Doctor Accounts, and Billing modules.",
    },
    {
      q: "What paid subscription packages do you offer?",
      a: "We offer two paid subscription plans: a 6-Month Semi-Annual Package at 30,000 PKR (equivalent to 5,000 PKR/month) and a 1-Year Annual Package at 50,000 PKR (which saves you 10,000 PKR, equivalent to 4,166 PKR/month). Both packages include complete system setup, doctor share ledger configuration, and full staff onboarding.",
    },
    {
      q: "Are there any hidden installation, database, or server maintenance fees?",
      a: "No! We believe in 100% transparent pricing. Your monthly fee covers cloud server hosting, automated daily backups, feature updates, and 24/7 technical support without any surprise fees.",
    },
    {
      q: "What core hospital modules are included in PAKHIMS standard packages?",
      a: "Standard packages include our core hospital suite: Out-Patient Department (OPD) live token queues & Rx builder, In-Patient Department (IPD) ward bed care manager, Permanent Medical Record Number (MRN) patient history, Doctor percentage share calculator, Itemized Billing receipts, and the 24/7 Online Appointment Booking portal (Apni Appointment).",
    },
    {
      q: "How does the Doctor Percentage Share & Revenue Allocation engine work?",
      a: "PAKHIMS automatically calculates consultant earnings based on your hospital's custom agreements — whether daily fixed stipends, monthly retainer salaries, or per-patient percentage splits (e.g., 70% doctor / 30% hospital). This eliminates end-of-month financial disputes between hospital management and visiting consultants.",
    },
    {
      q: "Can we restrict what receptionist, nursing, and accounting staff can see?",
      a: "Yes! PAKHIMS features strict Role-Based Access Control (RBAC). Hospital owners and administrators can define exact screen permissions for receptionists, ward nurses, doctors, accountants, blood bank technicians, and system administrators.",
    },
    {
      q: "How do we purchase a package or subscribe to PAKHIMS?",
      a: "Subscriptions are configured directly by our official hospital onboarding team to ensure proper system setup. Click any 'Contact Us to Subscribe' or 'Request Free Demo' button on this page. Our specialist will contact you within 1 hour to set up your hospital workspace.",
    },
    {
      q: "How fast can our hospital deploy PAKHIMS?",
      a: "Deployment is fast and seamless! Our technical team configures your hospital profile, ward/room categories, doctor share rates, and trains your staff within 24 to 48 hours.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-[#CE2433] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Hero Header Section for Pricing Page */}
      <section className="pt-36 sm:pt-44 md:pt-48 lg:pt-52 pb-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-200/80 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight pb-2">
              <span className="text-[#224183] relative inline-block">
                PAKHIMS
                {/* Animated Hand-Drawn Red Marker Underline SVG */}
                <motion.svg
                  className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-4 sm:h-5 overflow-visible pointer-events-none"
                  viewBox="0 0 160 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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
              <span className="text-[#224183]">Official Pricing</span> <br />
              <span className="text-slate-900">& Packages.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans mx-auto">
              Straightforward pricing for Pakistani hospitals. Includes a <strong>1-Month Free Trial</strong> and custom module options — pay only for the specific modules you need!
            </p>
          </div>
        </div>
      </section>

      {/* Main Detailed Pricing Section */}
      <Pricing hideHeader onOpenDemo={handleOpenDemo} />

      {/* Frequently Asked Questions Section */}
      <section className="py-8 sm:py-16 bg-slate-50 text-slate-900 relative border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#224183] border border-blue-200 text-xs font-bold font-mono">
              <HelpCircle className="w-4 h-4 text-[#CE2433]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight pb-2">
              Got Questions About Our{" "}
              <span className="relative inline-block text-[#224183]">
                PAKHIMS
                {/* Animated Hand-Drawn Red Marker Underline SVG */}
                <motion.svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3.5 sm:h-4.5 overflow-visible pointer-events-none"
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
              ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-xl mx-auto">
              Everything you need to know about PAKHIMS platform modules, doctor share ledgers, pricing plans, and hospital onboarding.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 font-heading flex items-center justify-between gap-4 hover:text-[#224183] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#CE2433] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#224183]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spacing Gap Before Footer */}
      <div className="py-10 sm:py-16 bg-slate-50 border-t border-slate-200/80" />

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Lead Capture Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
