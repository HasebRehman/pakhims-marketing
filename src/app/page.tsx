"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SignatureEcosystemAnimation from "@/components/sections/SignatureEcosystemAnimation";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ProductEcosystem from "@/components/sections/ProductEcosystem";
import PakHimsByTheNumbers from "@/components/sections/PakHimsByTheNumbers";
import AppointmentShowcase from "@/components/sections/AppointmentShowcase";
import OpdShowcase from "@/components/sections/OpdShowcase";
import IpdShowcase from "@/components/sections/IpdShowcase";
import PatientHistoryShowcase from "@/components/sections/PatientHistoryShowcase";
import BillingShowcase from "@/components/sections/BillingShowcase";
import BloodBankShowcase from "@/components/sections/BloodBankShowcase";
import EmployeeAccountsInsurance from "@/components/sections/EmployeeAccountsInsurance";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import WhyPakHims from "@/components/sections/WhyPakHims";
import PricingBanner from "@/components/sections/PricingBanner";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/ui/DemoModal";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-[#CE2433] selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Hero Section */}
      <Hero onOpenDemo={handleOpenDemo} />

      {/* Signature Ecosystem Converging Animation */}
      <SignatureEcosystemAnimation />

      {/* Problem Storytelling Section */}
      <ProblemSolution />

      {/* Meet PAKHIMS Ecosystem Graph */}
      <ProductEcosystem />

      {/* Online Appointment Booking Section */}
      <AppointmentShowcase />

      {/* PAKHIMS by the Numbers Animated Metrics */}
      <PakHimsByTheNumbers />

      {/* Feature Deep Dives */}
      <PatientHistoryShowcase />
      <EmployeeAccountsInsurance hideAccounts />

      {/* Interactive Software Browser Demo */}
      <InteractiveDemo onOpenDemo={handleOpenDemo} />

      {/* Why PAKHIMS ROI Benefits */}
      <WhyPakHims />

      {/* Pricing Highlight Banner */}
      <PricingBanner onOpenDemo={handleOpenDemo} />

      {/* Verified Customer Reviews & Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Lead Capture Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
