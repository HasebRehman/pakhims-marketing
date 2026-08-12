"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/ui/DemoModal";

export default function PrivacyPolicyPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden selection:bg-[#CE2433] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content */}
      <section className="pt-36 sm:pt-44 pb-20 bg-slate-50 text-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Main Legal Content Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100/50 p-8 sm:p-12 md:p-16 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#077dd3] font-extrabold">
                Legal Information
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
                Privacy Policy
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm">
                Last Updated: August 12, 2026
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed font-sans text-sm sm:text-base border-t border-slate-100 pt-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview</h2>
                <p>
                  Welcome to the PAKHIMS Hospital Management Platform. This Privacy Policy details how data is managed, processed, and protected within the PAKHIMS software ecosystem.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">2. Software Service Scope</h2>
                <p>
                  PAKHIMS is a software management platform sold as a service directly to doctors, clinics, and hospital administrators (the "Healthcare Providers"). We provide the digital infrastructure to manage patient records, token counters, IPD ward boards, and financial sheets.
                </p>
                <p className="mt-2 text-slate-600 font-medium">
                  Important Disclaimer: Because we only provide the software tools to registered doctors and clinics, the administration and management of all clinical inputs, diagnosis records, and patient files remain the responsibility of the doctor. We do not inspect, edit, or control the medical choices entered into our system.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">3. Data Security & Hosting</h2>
                <p>
                  To secure the data processed by our tools, we implement industry-standard encryption protocols:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-slate-600">
                  <li>Full SSL/HTTPS encryption on all data transfers across token counters, reception desks, and diagnostic terminals.</li>
                  <li>Role-Based Access Control (RBAC) allowing doctors to define exact screen-level access for nurses, receptionists, and accountants.</li>
                  <li>Automatic security backups to protect database records from sudden hardware failures.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">4. Clinical & Patient Responsibility</h2>
                <p>
                  We are not responsible for the accuracy, legality, or completeness of any patient health data entered into the system. All diagnostic parameters, vitals entries, laboratory reports, and prescription histories are inputted by the hospital staff under the direct supervision of their licensed healthcare provider.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">5. Data Deletion & Accounts</h2>
                <p>
                  Doctors and clinics retain full ownership of their database instances. Upon official termination of the service agreement, the system will prepare a structured database backup copy containing the patient histories, logs, and billing ledger entries for the clinic's local retention.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
