"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/ui/DemoModal";
import MockBrowserWindow from "@/components/ui/MockBrowserWindow";
import {
  Calendar,
  UserCheck,
  ShieldCheck,
  DollarSign,
  FlaskConical,
  Activity,
  HeartPulse,
  Droplet,
  Clock,
  MessageSquare,
  CheckCircle2,
  FileText,
  Lock,
  FileCheck,
  TrendingUp,
  Percent,
  Barcode,
  Layers,
  Award
} from "lucide-react";

export default function FeaturesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  const modules = [
    // 1. Appointment (Desktop: Image LEFT, Content RIGHT)
    {
      id: "appointment",
      tag: "ONLINE APPOINTMENT",
      tagColor: "bg-sky-600 text-white font-bold shadow-xs border-0",
      heading: "Smart 24/7 Patient Booking & Scheduling.",
      description: "Provide your patients with a seamless online appointment booking experience while keeping your OPD schedule perfectly organized.",
      image: "/img/tab-img/online-appointment.png",
      url: "app.pakhims.com/appointments/online",
      browserTitle: "PAKHIMS Online Doctor Appointment Portal",
      highlights: [
        { title: "24/7 Booking via Apni Appointment", desc: "Patients can search doctors and book appointments 24/7 through the Apni Appointment website or mobile app, fully synced with PAKHIMS.", icon: Calendar },
        { title: "Real-Time Slot Allocation", desc: "Prevents double-booking by locking time slots instantly across hospital reception and online portals.", icon: Clock },
        { title: "Instant Confirmations", desc: "Sends instant confirmation details and appointment slot information directly to patients.", icon: MessageSquare },
        { title: "Direct OPD Queue Sync", desc: "Confirmed appointments automatically sync directly with hospital OPD token counters.", icon: CheckCircle2 },
      ],
    },
    // 2. Employee (Desktop: Content LEFT, Image RIGHT)
    {
      id: "employee",
      tag: "EMPLOYEE & SECURITY",
      tagColor: "bg-indigo-600 text-white font-bold shadow-xs border-0",
      heading: "Keep Your Hospital Team Organized & Secure.",
      description: "Add staff members, assign Role-Based Access Control (RBAC), and define exact screen permissions for doctors, nurses, accountants, receptionists, and administrators.",
      image: "/img/tab-img/employee.png",
      url: "app.pakhims.com/employee/rbac",
      browserTitle: "PAKHIMS Staff Security & Role Management",
      highlights: [
        { title: "Strict Role-Based Access", desc: "Define granular screen-level read/write access for every staff member across departments.", icon: Lock },
        { title: "Staff Activity Audit Logs", desc: "Track every login, patient record edit, prescription update, and financial transaction timestamp.", icon: FileCheck },
        { title: "User & Role Management", desc: "Easily add staff members and assign customizable system roles with specific administrative privileges.", icon: UserCheck },
        { title: "Multi-Department Security", desc: "Ensure receptionists, nurses, and accountants only access data relevant to their duty.", icon: ShieldCheck },
      ],
    },
    // 3. Accounts (Desktop: Content LEFT, Image RIGHT)
    {
      id: "accounts",
      tag: "DOCTOR ACCOUNTS",
      tagColor: "bg-emerald-600 text-white font-bold shadow-xs border-0",
      heading: "Know Where Every Number Comes From.",
      description: "Eliminate revenue disputes between hospital owners and consultant doctors. PAKHIMS automatically calculates earnings based on your specific doctor agreements.",
      image: "/img/tab-img/accounts.png",
      url: "app.pakhims.com/accounts/doctor-ledger",
      browserTitle: "PAKHIMS Doctor Share Ledger & Revenue Allocation",
      highlights: [
        { title: "Daily Fixed Rates", desc: "For visiting consultants on set daily stipends and consultation fees.", icon: DollarSign },
        { title: "Monthly Retainer Salaries", desc: "For full-time medical officers, department heads, and resident doctors.", icon: Calendar },
        { title: "Per-Patient Percentage Splits", desc: "Custom percentage shares (e.g. 70% doctor / 30% hospital) calculated automatically.", icon: Percent },
        { title: "Automated Revenue Ledger", desc: "Generate transparent monthly payout statements and instant printable doctor revenue slips.", icon: FileText },
      ],
    },
    // 4. Lab (Desktop: Image LEFT, Content RIGHT)
    {
      id: "lab",
      tag: "LAB & PATHOLOGY",
      tagColor: "bg-teal-600 text-white font-bold shadow-xs border-0",
      heading: "Fast, Error-Free Diagnostic & Lab Operations.",
      description: "Streamline pathology test ordering, sample barcode tracking, result entry, and report printing in your hospital laboratory.",
      image: "/img/tab-img/lab.png",
      url: "app.pakhims.com/lab/diagnostics",
      browserTitle: "PAKHIMS Laboratory Diagnostics & Pathology Engine",
      highlights: [
        { title: "Diagnostic Test Catalog", desc: "Pre-configured pathology test rates, normal range values, and reference parameters.", icon: FlaskConical },
        { title: "Sample Barcode Tracking", desc: "Generates unique barcode labels for blood and tissue vials to prevent sample mix-ups.", icon: Barcode },
        { title: "Automated Report Printing", desc: "Pathologist verification screen with instant printable PDF reports.", icon: FileText },
        { title: "Dedicated Lab Billing & MRN", desc: "Dedicated lab billing engine with instant diagnostic receipts linked directly under patient MRN.", icon: CheckCircle2 },
      ],
    },
    // 5. OPD (Desktop: Content LEFT, Image RIGHT)
    {
      id: "opd",
      tag: "OPD & TOKENS",
      tagColor: "bg-blue-600 text-white font-bold shadow-xs border-0",
      heading: "Make Every OPD Visit Simpler and Faster.",
      description: "From initial token generation at reception to digital doctor prescription entry and checkout billing, handle high-volume patient queues with zero friction.",
      image: "/img/tab-img/opd.png",
      url: "app.pakhims.com/opd/queue",
      browserTitle: "PAKHIMS OPD Token & Consultation Station",
      highlights: [
        { title: "1-Click Token Issuance", desc: "Receptionists issue sequential tokens tied to specific doctor clinics in seconds.", icon: Activity },
        { title: "OPD Queue & Vitals Workflow", desc: "Doctors view waiting queue, vitals, medical history, and enter digital prescriptions during in-person patient check-ups.", icon: Clock },
        { title: "Electronic Prescriptions", desc: "Fast drug dosage selection with pre-filled templates and printable RX slips.", icon: FileText },
        { title: "Instant OPD Checkout", desc: "Auto-calculates consultation and procedure fees at checkout with 0 manual typing.", icon: CheckCircle2 },
      ],
    },
    // 6. IPD (Desktop: Image LEFT, Content RIGHT)
    {
      id: "ipd",
      tag: "IPD & WARDS",
      tagColor: "bg-purple-600 text-white font-bold shadow-xs border-0",
      heading: "Manage the Complete Admitted Patient Journey.",
      description: "Track admitted patients from ward bed assignment, daily nursing care logs, surgery records, doctor round notes to final discharge summaries.",
      image: "/img/tab-img/ipd.png",
      url: "app.pakhims.com/ipd/admissions",
      browserTitle: "PAKHIMS IPD Ward & Bed Management Engine",
      highlights: [
        { title: "Real-Time Bed Occupancy", desc: "Visual grid showing vacant, occupied, reserved, and cleaning status for all hospital beds.", icon: Layers },
        { title: "Daily Nursing & Vitals Charts", desc: "Log blood pressure, pulse, temperature, oxygen levels & medication administration.", icon: HeartPulse },
        { title: "Doctor Round Notes", desc: "Record daily progress notes, treatment revisions, and consultant orders digitally.", icon: FileText },
        { title: "Automated Discharge Summaries", desc: "Auto-compiles admission history, lab reports, and vitals into clean discharge documentation.", icon: Award },
      ],
    },
    // 7. Blood Bank (Desktop: Content LEFT, Image RIGHT)
    {
      id: "bloodbank",
      tag: "BLOOD BANK",
      tagColor: "bg-[#CE2433] text-white font-bold shadow-xs border-0",
      heading: "A Smarter Way to Manage Your Hospital Blood Bank.",
      description: "Track blood bags from volunteer collection, 5-marker laboratory screening, cross-matching, barcode sticker generation to emergency issuance.",
      image: "/img/tab-img/blood-bank.png",
      url: "app.pakhims.com/bloodbank/inventory",
      browserTitle: "PAKHIMS Blood Bank Operations & Barcode Generator",
      highlights: [
        { title: "Donor Registration & History", desc: "Record donor vitals, donation history, medical eligibility, and blood group data.", icon: Droplet },
        { title: "5-Marker Mandatory Screening", desc: "Log HIV, Hepatitis B/C, Syphilis, and Malaria lab test results before bag approval.", icon: ShieldCheck },
        { title: "Barcode Bag Labelling", desc: "Print verified barcode stickers with expiry dates, component type, and bag numbers.", icon: Barcode },
        { title: "Cross-Match & Issuance", desc: "Verify recipient compatibility before releasing blood bags for emergency or surgery use.", icon: CheckCircle2 },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-[#CE2433] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Features Page Hero Header */}
      <section className="pt-36 sm:pt-44 md:pt-48 lg:pt-52 pb-12 sm:pb-16 bg-white text-slate-900 border-b border-slate-200/80 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center">
          <div className="max-w-3xl space-y-4 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight pb-2">
              <span className="text-[#077dd3] relative inline-block">
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
              <span className="text-[#077dd3]">Complete</span> <br />
              <span className="text-slate-900">8 Modules Showcase.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans mx-auto">
              Explore interactive online appointment booking, staff security, insurance panels, doctor revenue ledgers, lab diagnostics, OPD queues, IPD bed managers, and blood bank registers in full detail.
            </p>
          </div>
        </div>
      </section>

      {/* Complete 8 Modules Alternating Showcase Grid */}
      {modules.map((mod, idx) => {
        const isImageLeftOnDesktop = idx % 2 === 0;
        const bgClass = idx % 2 === 0 ? "bg-slate-50" : "bg-white";

        return (
          <section
            key={mod.id}
            id={mod.id}
            className={`py-12 sm:py-24 ${bgClass} text-slate-900 relative border-t border-slate-200/80`}
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Content Block (ALWAYS order-1 on Mobile, Alternates Left/Right on Desktop) */}
                <div
                  className={`lg:col-span-5 space-y-6 text-left order-1 ${
                    isImageLeftOnDesktop ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${mod.tagColor} px-3 py-1 rounded-full border inline-block font-mono`}
                  >
                    {mod.tag}
                  </span>

                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                    {mod.heading}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                    {mod.description}
                  </p>

                  {/* Highlights Checklist Cards */}
                  <div className="space-y-3 pt-2">
                    {mod.highlights.map((feat) => {
                      const Icon = feat.icon;
                      return (
                        <div
                          key={feat.title}
                          className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#077dd3]/60 hover:shadow-md transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#077dd3] transition-colors">
                              {feat.title}
                            </div>
                            <div className="text-xs text-slate-600 font-sans mt-0.5 leading-normal truncate sm:whitespace-normal">
                              {feat.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Image Mockup Block (ALWAYS order-2 on Mobile, Alternates Left/Right on Desktop) */}
                <div
                  className={`lg:col-span-7 relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white order-2 ${
                    isImageLeftOnDesktop ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <MockBrowserWindow showAddressBar={false} title={mod.browserTitle} minHeightClass="min-h-0">
                    <img
                      src={mod.image}
                      alt={mod.heading}
                      className="w-full h-auto object-cover rounded-xl shadow-xs"
                    />
                  </MockBrowserWindow>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Spacing Gap Before Footer */}
      <div className="py-10 sm:py-16 bg-white border-t border-slate-200/80" />

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Lead Capture Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
