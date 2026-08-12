"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, CheckCircle2, Building2, User, Mail, Phone,
  BedDouble, ArrowRight, ShieldCheck, MapPin, AlertCircle
} from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BLANK_FORM = {
  name: "",
  hospital: "",
  address: "",
  city: "",
  state: "",
  role: "Administrator",
  email: "",
  phone: "",
  beds: "Under 25 Beds",
  modules: [] as string[],
};

type ToastType = "success" | "error" | null;

function Toast({ type, message, onDismiss }: { type: ToastType; message: string; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 5000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  if (!type) return null;
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: "spring", duration: 0.45 }}
        className={`fixed bottom-6 right-6 z-[9999] flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl border max-w-sm w-full ${
          isSuccess
            ? "bg-emerald-50 border-emerald-200 text-emerald-900"
            : "bg-red-50 border-red-200 text-red-900"
        }`}
      >
        <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${isSuccess ? "bg-emerald-100" : "bg-red-100"}`}>
          {isSuccess
            ? <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            : <AlertCircle className="w-5 h-5 text-red-600" />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold">{isSuccess ? "Demo Request Sent!" : "Submission Failed"}</p>
          <p className="text-xs mt-0.5 opacity-80 leading-relaxed">{message}</p>
        </div>
        <button onClick={onDismiss} className={`shrink-0 p-1 rounded-full transition-colors ${isSuccess ? "hover:bg-emerald-100" : "hover:bg-red-100"}`}>
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ ...BLANK_FORM });
  const [toast, setToast] = useState<{ type: ToastType; message: string }>({ type: null, message: "" });

  const showToast = (type: ToastType, message: string) => setToast({ type, message });
  const dismissToast = () => setToast({ type: null, message: "" });

  const handleModuleToggle = (module: string) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter((m) => m !== module)
        : [...prev.modules, module],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const submittedName = formData.name;
    const submittedContact = formData.phone || formData.email;
    try {
      const payload = {
        fullName: formData.name,
        hospitalName: formData.hospital,
        role: formData.role,
        bedCapacity: formData.beds,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        modules: formData.modules.length > 0 ? formData.modules : ["General"],
      };
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { accept: "*/*", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded with status ${res.status}`);
      setFormData({ ...BLANK_FORM });
      onClose();
      showToast("success", `Your demo request has been received, ${submittedName}. Our specialist will contact ${submittedContact} within 2 hours.`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      showToast("error", `Could not send your request. ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900";

  return (
    <>
      {toast.type && <Toast type={toast.type} message={toast.message} onDismiss={dismissToast} />}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh] sm:max-h-[85vh]"
            >
              <div className="bg-gradient-to-r from-[#224183] to-[#152A56] p-6 text-white relative shrink-0">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all" aria-label="Close modal">
                  <X className="w-5 h-5" />
                </button>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide text-white mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CE2433]" />
                  VIP PRODUCT DEMO &amp; CONSULTATION
                </div>
                <h2 className="text-2xl font-bold text-white">Schedule a PAKHIMS Live Demo</h2>
                <p className="text-slate-200 text-sm mt-1">See how PAKHIMS can seamlessly digitize your hospital&apos;s OPD, IPD, Blood Bank &amp; Accounts.</p>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto flex-1 no-scrollbar" data-lenis-prevent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Dr. Ahmed Khan" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Hospital / Clinic Name *</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input type="text" required value={formData.hospital} onChange={(e) => setFormData({ ...formData, hospital: e.target.value })} placeholder="City Care Hospital" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Role</label>
                      <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900">
                        <option value="Hospital Owner">Hospital Owner / Director</option>
                        <option value="Administrator">Medical Administrator</option>
                        <option value="Medical Director">Medical Director / HOD</option>
                        <option value="Chief Accountant">Chief Accountant / Finance</option>
                        <option value="IT Head">IT Manager / Systems Admin</option>
                        <option value="Senior Doctor">Senior Doctor / Consultant</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Bed Capacity</label>
                      <div className="relative">
                        <BedDouble className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <select value={formData.beds} onChange={(e) => setFormData({ ...formData, beds: e.target.value })} className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#224183] focus:bg-white text-slate-900">
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
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+92 300 1234567" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Official Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="admin@hospital.com" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Hospital / Clinic Address *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input type="text" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="e.g. Plot 45-C, 24th Commercial Street, Phase II Ext" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">City *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input type="text" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} placeholder="e.g. Karachi" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">State / Province *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input type="text" required value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} placeholder="e.g. Sindh" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Key Modules You Want to Explore</label>
                    <div className="flex flex-wrap gap-2">
                      {["OPD & Token Flow", "IPD & Bed Journey", "Blood Bank Operations", "Doctor Shared Accounts", "Invoicing & Billing", "Insurance Verification", "Employee RBAC"].map((mod) => {
                        const isSelected = formData.modules.includes(mod);
                        return (
                          <button key={mod} type="button" onClick={() => handleModuleToggle(mod)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${isSelected ? "bg-[#224183] text-white border-[#224183]" : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"}`}>
                            {isSelected ? "✓ " : "+ "}{mod}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={loading} className="w-full py-3.5 px-6 bg-[#CE2433] hover:bg-[#E32D3D] text-white font-bold rounded-xl shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all group disabled:opacity-75">
                      {loading
                        ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        : <><span>Request Priority Live Demo</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-2">🔒 No commitment required. Zero installation needed for the demo.</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
