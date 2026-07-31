"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/ui/DemoModal";
import OpdShowcase from "@/components/sections/OpdShowcase";
import IpdShowcase from "@/components/sections/IpdShowcase";
import BillingShowcase from "@/components/sections/BillingShowcase";
import BloodBankShowcase from "@/components/sections/BloodBankShowcase";
import EmployeeAccountsInsurance from "@/components/sections/EmployeeAccountsInsurance";

export default function FeaturesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-[#CE2433] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Features Page Hero Header */}
      <section className="pt-36 sm:pt-32 pb-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-200/80 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight pb-2">
              <span className="text-[#224183] relative inline-block">
                PAKHIMS
                {/* Animated Hand-Drawn Red Marker Underline SVG from Image 2 */}
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
              <span className="text-[#224183]">Detailed</span> <br />
              <span className="text-slate-900">Module Showcase.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans mx-auto">
              Explore interactive live queues, admitted patient bed managers, itemized billing engines, blood bank registers, and doctor percentage revenue splits in full detail.
            </p>
          </div>
        </div>
      </section>

      {/* The 5 Detailed Feature Showcase Sections */}
      <OpdShowcase />
      <IpdShowcase />
      <BillingShowcase />
      <BloodBankShowcase />
      <div className="pb-16 sm:pb-24 lg:pb-32 bg-white">
        <EmployeeAccountsInsurance hideCards />
      </div>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Lead Capture Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
