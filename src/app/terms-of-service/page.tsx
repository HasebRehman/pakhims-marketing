"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/ui/DemoModal";

export default function TermsOfServicePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden selection:bg-[#CE2433] selection:text-white">
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
                Terms of Service
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm">
                Last Updated: August 12, 2026
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed font-sans text-sm sm:text-base border-t border-slate-100 pt-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">1. Scope of Service</h2>
                <p>
                  PAKHIMS provides a cloud-hosted SaaS (Software-as-a-Service) platform designed to support clinic and hospital operations. We sell this software service directly to registered healthcare professionals, doctors, and hospital administrators (the "Licensee").
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">2. Liability & Responsibility Disclaimer</h2>
                <p className="text-slate-800 font-bold">
                  IMPORTANT NOTICE: PAKHIMS is solely a software tool provided for healthcare providers. We are NOT a medical entity, and we are not responsible for any clinical choices, diagnosis, vital evaluation, treatments, or prescriptions generated through the platform.
                </p>
                <p className="mt-3">
                  If a doctor or hospital staff member performs any clinical action, procedure, or treatment on a patient, the doctor/hospital is solely responsible for that patient's health outcomes, treatments, and medical care. PAKHIMS does not participate in doctor-patient interactions and carries zero liability for medical malpractice or clinical negligence.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">3. Platform Usage</h2>
                <p>
                  The Licensee agrees to use the platform only for lawful administrative and clinical record-keeping. The hospital administration must ensure that:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-slate-600">
                  <li>Only licensed medical professionals enter prescription details and clinical records.</li>
                  <li>Local printing equipment and internet connectivity are maintained to secure active token workflows.</li>
                  <li>Granular permissions are set up correctly via the Employee RBAC settings.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">4. Uptime & Security</h2>
                <p>
                  While we implement strong security checks and continuous databases backups to host patient record streams securely, the platform is supplied "as-is". We are not responsible for any local data leaks or unauthorized modifications occurring due to credential sharing or weak administrative password habits.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">5. Service Contract & Termination</h2>
                <p>
                  SaaS license agreements are billed on a recurring monthly or yearly subscription as per individual agreements. The software license can be suspended or terminated if outstanding fees are unpaid. Data exports are supplied on contract completion.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer onOpenDemo={handleOpenDemo} />

      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
