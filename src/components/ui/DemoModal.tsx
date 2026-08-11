"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Building2, User, Mail, Phone, BedDouble, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    address: "",
    city: "",
    state: "",
    role: "Administrator",
    email: "",
    phone: "",
    beds: "50-100",
    modules: ["OPD", "IPD", "Billing"],
    notes: "",
  });

  const handleModuleToggle = (module: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter((m) => m !== module)
        : [...prev.modules, module],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh] sm:max-h-[85vh]"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#224183] to-[#152A56] p-6 text-white relative shrink-0">
              <button
                onClick={resetAndClose}
                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide text-white mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CE2433]" />
                VIP PRODUCT DEMO & CONSULTATION
              </div>
              <h2 className="text-2xl font-bold text-white">Schedule a PAKHIMS Live Demo</h2>
              <p className="text-slate-200 text-sm mt-1">
                See how PAKHIMS can seamlessly digitize your hospital&apos;s OPD, IPD, Blood Bank & Accounts.
              </p>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 no-scrollbar" data-lenis-prevent>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Demo Request Received!</h3>
                  <p className="text-slate-600 mt-2 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our senior PAKHIMS product specialist will contact you at <span className="font-semibold text-slate-900">{formData.phone || formData.email}</span> within 2 hours to arrange a personalized demonstration for <span className="font-semibold text-slate-900">{formData.hospital}</span>.
                  </p>

                  <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-500 max-w-md mx-auto space-y-1">
                    <p className="font-semibold text-slate-700">Request Summary:</p>
                    <p>• Hospital: {formData.hospital}</p>
                    <p>• Address: {formData.address}, {formData.city}, {formData.state}</p>
                    <p>• Hospital Capacity: {formData.beds} Beds</p>
                    <p>• Selected Modules: {formData.modules.join(", ")}</p>
                  </div>

                  <button
                    onClick={resetAndClose}
                    className="mt-6 px-6 py-3 bg-[#224183] text-white font-semibold rounded-xl hover:bg-[#152A56] transition-all shadow-md"
                  >
                    Done & Return to Showcase
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Ahmed Khan"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                        />
                      </div>
                    </div>

                    {/* Hospital Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Hospital / Clinic Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.hospital}
                          onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                          placeholder="City Care Hospital"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Role */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Your Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                      >
                        <option value="Hospital Owner">Hospital Owner / Director</option>
                        <option value="Administrator">Medical Administrator</option>
                        <option value="Medical Director">Medical Director / HOD</option>
                        <option value="Chief Accountant">Chief Accountant / Finance</option>
                        <option value="IT Head">IT Manager / Systems Admin</option>
                        <option value="Senior Doctor">Senior Doctor / Consultant</option>
                      </select>
                    </div>

                    {/* Hospital Capacity / Beds */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Bed Capacity
                      </label>
                      <div className="relative">
                        <BedDouble className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <select
                          value={formData.beds}
                          onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                        >
                          <option value="Under 25 Beds">Under 25 Beds (Clinic / Daycare)</option>
                          <option value="25-50 Beds">25 - 50 Beds</option>
                          <option value="50-100 Beds">50 - 100 Beds</option>
                          <option value="100-250 Beds">100 - 250 Beds</option>
                          <option value="250+ Beds">250+ Beds (Multi-Specialty)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+92 300 1234567"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Official Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="admin@hospital.com"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hospital / Clinic Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Hospital / Clinic Address *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="e.g. Plot 45-C, 24th Commercial Street, Phase II Ext"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* City */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        City *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Karachi"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                        />
                      </div>
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        State / Province *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          placeholder="e.g. Sindh"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Modules of Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Key Modules You Want to Explore
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["OPD & Token Flow", "IPD & Bed Journey", "Blood Bank Operations", "Doctor Shared Accounts", "Invoicing & Billing", "Insurance Verification", "Employee RBAC"].map((mod) => {
                        const isSelected = formData.modules.includes(mod);
                        return (
                          <button
                            key={mod}
                            type="button"
                            onClick={() => handleModuleToggle(mod)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                              isSelected
                                ? "bg-[#224183] text-white border-[#224183]"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {isSelected ? "✓ " : "+ "}{mod}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 bg-[#CE2433] hover:bg-[#E32D3D] text-white font-bold rounded-xl shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all group disabled:opacity-75"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Request Priority Live Demo</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-2">
                      🔒 No commitment required. Zero installation needed for the demo.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
