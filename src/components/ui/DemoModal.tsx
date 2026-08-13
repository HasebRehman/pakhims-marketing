"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, CheckCircle2, Building2, User, Mail, Phone,
  BedDouble, ArrowRight, ShieldCheck, MapPin, AlertCircle, Lock
} from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  pricingPlan?: string | null;
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

const HOSPITAL_CATEGORIES = [
  "Hospitals having 50 or more beds (CAT-I) – Beds: 50+ – Care: Secondary/Tertiary",
  "Hospitals having 1 to 15 beds (CAT-II-C) – Beds: 1-15 – Care: Primary/Secondary",
  "Basic Health Unit (BHU) (CAT-III-BHU) – Beds: 0 – Care: Primary",
  "GP Clinic / Family Physician (CAT-III-GP) – Beds: 0 – Care: Primary",
  "Dental Clinic (CAT-III-DENT) – Beds: 0 – Care: Primary",
  "Homeopath Clinic (CAT-III-HOM) – Beds: 0 – Care: Primary",
  "Matab / Small Maternity Home (CAT-III-MATAB) – Beds: 0-5 – Care: Primary",
  "Rural Health Centre (RHC) (CAT-II-RHC) – Beds: 10-20 – Care: Secondary",
  "Hospitals having 16 to 30 beds (CAT-II-B) – Beds: 16-30 – Care: Secondary",
  "Hospitals having 31 to 49 beds (CAT-II-A) – Beds: 31-49 – Care: Secondary",
  "Imaging / Radiological Diagnostics Center (CAT-III-IMG) – Beds: 0 – Care: Diagnostic",
  "Laboratory (CAT-III-LAB) – Beds: 0 – Care: Diagnostic"
];

const PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Gilgit-Baltistan",
  "Azad Kashmir",
  "Islamabad"
];

const PROVINCE_CITIES: Record<string, string[]> = {
  "Punjab": ["Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Sialkot", "Sargodha", "Bahawalpur", "Gujarat", "Sahiwal", "Jhelum", "Rahim Yar Khan", "Sheikhupura"],
  "Sindh": ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah", "Mirpurkhas", "Jacobabad", "Shikarpur"],
  "Khyber Pakhtunkhwa": ["Peshawar", "Abbottabad", "Mardan", "Mingora", "Kohat", "Bannu", "Dera Ismail Khan", "Swat", "Haripur"],
  "Balochistan": ["Quetta", "Gwadar", "Turbat", "Khuzdar", "Sibi", "Zhob", "Chaman"],
  "Gilgit-Baltistan": ["Gilgit", "Skardu", "Hunza", "Diamer"],
  "Azad Kashmir": ["Muzaffarabad", "Mirpur", "Kotli", "Rawalakot", "Bagh"],
  "Islamabad": ["Islamabad"]
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
          <p className="text-sm font-bold">{isSuccess ? "Form Submitted!" : "Submission Failed"}</p>
          <p className="text-xs mt-0.5 opacity-80 leading-relaxed">{message}</p>
        </div>
        <button onClick={onDismiss} className={`shrink-0 p-1 rounded-full transition-colors ${isSuccess ? "hover:bg-emerald-100" : "hover:bg-red-100"}`}>
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

function CustomSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  icon,
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = () => setIsOpen(false);
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#077dd3] focus:bg-white text-slate-900 flex items-center justify-between text-left transition-all relative ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <span className="absolute left-3 top-3 w-4 h-4 flex items-center justify-center shrink-0">
          {icon}
        </span>
        <span className={`block truncate ${!value ? "text-slate-400" : "text-slate-950 font-medium"}`}>
          {value || placeholder}
        </span>
        <span className="flex items-center shrink-0">
          <svg className={`fill-current h-4 w-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.1 }}
            className="absolute z-[9999] w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto no-scrollbar py-1"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm transition-colors duration-150 ${
                  value === opt
                    ? "bg-[#077dd3]/10 text-[#077dd3] font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DemoModal({ isOpen, onClose, pricingPlan = null }: DemoModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ ...BLANK_FORM });
  const [pricingFormData, setPricingFormData] = useState({
    hospitalName: "",
    email: "",
    phone: "",
    hospitalLicense: "",
    hospitalCategory: "",
    province: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
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

  const handlePricingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pricingFormData.password !== pricingFormData.confirmPassword) {
      showToast("error", "Passwords do not match. Please verify your password entry.");
      return;
    }
    setLoading(true);
    const submittedName = pricingFormData.hospitalName;
    const submittedContact = pricingFormData.phone || pricingFormData.email;
    try {
      const payload = {
        fullName: pricingFormData.hospitalName + " Admin",
        hospitalName: pricingFormData.hospitalName,
        role: "Administrator",
        bedCapacity: pricingFormData.hospitalCategory,
        phone: pricingFormData.phone,
        email: pricingFormData.email,
        address: pricingFormData.address,
        city: pricingFormData.city,
        state: pricingFormData.province,
        modules: [pricingPlan || "Hospital Suite Subscription"],
      };
      
      const res = await fetch("/api/request-demo", {
        method: "POST",
        headers: { accept: "*/*", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded with status ${res.status}`);
      
      setPricingFormData({
        hospitalName: "",
        email: "",
        phone: "",
        hospitalLicense: "",
        hospitalCategory: "",
        province: "",
        city: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
      onClose();
      showToast("success", `Subscription activated successfully for ${submittedName}! Redirecting you to the official PAKHIMS login page...`);
      setTimeout(() => {
        window.location.href = "https://app.pakhims.com/login";
      }, 2000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      showToast("error", `Could not register subscription. ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#077dd3] focus:bg-white text-slate-900";

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
              {pricingPlan ? (
                /* Header for Pricing/Subscription Mode */
                <div className="bg-gradient-to-r from-[#077dd3] to-[#0564aa] p-6 text-white relative shrink-0">
                  <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all" aria-label="Close modal">
                    <X className="w-5 h-5" />
                  </button>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide text-white mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    SECURE SUBSCRIPTION SIGNUP
                  </div>
                  <h2 className="text-2xl font-bold text-white">Subscribe to PAKHIMS</h2>
                  <p className="text-slate-200 text-sm mt-1">Complete the details below to set up your hospital workspace on the selected plan.</p>
                </div>
              ) : (
                /* Header for Demo Mode */
                <div className="bg-gradient-to-r from-[#077dd3] to-[#0564aa] p-6 text-white relative shrink-0">
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
              )}

              <div className="p-6 sm:p-8 overflow-y-auto flex-1 no-scrollbar" data-lenis-prevent>
                {pricingPlan ? (
                  /* Form for Pricing/Subscription Mode */
                  <form onSubmit={handlePricingSubmit} className="space-y-4">
                    {/* Selected Plan Field */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Selected Pricing Plan</label>
                      <div className="relative w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold flex items-center justify-between select-none">
                        <ShieldCheck className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                        <span className="text-[#077dd3] truncate flex-1">
                          {pricingPlan}
                        </span>
                        <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg font-bold shrink-0 text-[11px] sm:text-xs tracking-wide uppercase">
                          + 3 Months Free Trial
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Hospital Name *</label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={pricingFormData.hospitalName}
                            onChange={(e) => setPricingFormData({ ...pricingFormData, hospitalName: e.target.value })}
                            placeholder="e.g. City Care Hospital"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Hospital License (optional)</label>
                        <div className="relative">
                          <ShieldCheck className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            value={pricingFormData.hospitalLicense}
                            onChange={(e) => setPricingFormData({ ...pricingFormData, hospitalLicense: e.target.value })}
                            placeholder="e.g. PMDC-12345"
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Official Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            required
                            value={pricingFormData.email}
                            onChange={(e) => setPricingFormData({ ...pricingFormData, email: e.target.value })}
                            placeholder="admin@hospital.com"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            required
                            value={pricingFormData.phone}
                            onChange={(e) => setPricingFormData({ ...pricingFormData, phone: e.target.value })}
                            placeholder="+92 300 1234567"
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Hospital Category *</label>
                      <CustomSelect
                        label="Hospital Category"
                        placeholder="Select Hospital Category"
                        value={pricingFormData.hospitalCategory}
                        onChange={(val) => setPricingFormData({ ...pricingFormData, hospitalCategory: val })}
                        options={HOSPITAL_CATEGORIES}
                        icon={<Building2 className="w-4 h-4 text-slate-400" />}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Province *</label>
                        <CustomSelect
                          label="Province"
                          placeholder="Select Province"
                          value={pricingFormData.province}
                          onChange={(val) => setPricingFormData({ ...pricingFormData, province: val, city: "" })}
                          options={PROVINCES}
                          icon={<MapPin className="w-4 h-4 text-slate-400" />}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">City *</label>
                        <CustomSelect
                          label="City"
                          placeholder={!pricingFormData.province ? "Select Province First" : "Select City"}
                          value={pricingFormData.city}
                          onChange={(val) => setPricingFormData({ ...pricingFormData, city: val })}
                          options={pricingFormData.province ? PROVINCE_CITIES[pricingFormData.province] : []}
                          icon={<MapPin className="w-4 h-4 text-slate-400" />}
                          disabled={!pricingFormData.province}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Address *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={pricingFormData.address}
                          onChange={(e) => setPricingFormData({ ...pricingFormData, address: e.target.value })}
                          placeholder="e.g. Street Address, Area"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Password *</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="password"
                            required
                            value={pricingFormData.password}
                            onChange={(e) => setPricingFormData({ ...pricingFormData, password: e.target.value })}
                            placeholder="••••••••"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Confirm Password *</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <input
                            type="password"
                            required
                            value={pricingFormData.confirmPassword}
                            onChange={(e) => setPricingFormData({ ...pricingFormData, confirmPassword: e.target.value })}
                            placeholder="••••••••"
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button type="submit" disabled={loading} className="w-full py-3.5 px-6 bg-[#CE2433] hover:bg-[#E32D3D] text-white font-bold rounded-xl shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all group disabled:opacity-75">
                        {loading
                          ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          : <><span>Activate Subscription Plan</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                      </button>
                      <p className="text-center text-xs text-slate-400 mt-2">🔒 Secure connection. Your credentials are fully protected.</p>
                    </div>
                  </form>
                ) : (
                  /* Form for Demo Mode */
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
                        <CustomSelect
                          label="Your Role"
                          placeholder="Select Your Role"
                          value={formData.role}
                          onChange={(val) => setFormData({ ...formData, role: val })}
                          options={[
                            "Hospital Owner / Director",
                            "Medical Administrator",
                            "Medical Director / HOD",
                            "Chief Accountant / Finance",
                            "IT Manager / Systems Admin",
                            "Senior Doctor / Consultant"
                          ]}
                          icon={<User className="w-4 h-4 text-slate-400" />}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Bed Capacity</label>
                        <CustomSelect
                          label="Bed Capacity"
                          placeholder="Select Bed Capacity"
                          value={formData.beds}
                          onChange={(val) => setFormData({ ...formData, beds: val })}
                          options={[
                            "Under 25 Beds (Clinic / Daycare)",
                            "25 - 50 Beds",
                            "50 - 100 Beds",
                            "100 - 250 Beds",
                            "250+ Beds (Multi-Specialty)"
                          ]}
                          icon={<BedDouble className="w-4 h-4 text-slate-400" />}
                        />
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
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${isSelected ? "bg-[#077dd3] text-white border-[#077dd3]" : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"}`}>
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
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
