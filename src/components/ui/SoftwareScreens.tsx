"use client";

import {
  Users,
  Activity,
  Droplet,
  FileText,
  DollarSign,
  ShieldCheck,
  Plus,
  Printer,
  CheckCircle2,
  Stethoscope,
  HeartPulse,
  FileSpreadsheet
} from "lucide-react";

/* 1. OPD MODULE SCREEN MOCKUP (Light Theme) */
export function OpdScreen() {
  return (
    <div className="bg-white text-slate-800 rounded-xl p-3 sm:p-5 border border-slate-200 text-xs font-sans shadow-xs">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#224183] text-white flex items-center justify-center font-bold shadow-sm">
            OPD
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#224183]">Out-Patient Department (OPD) Desk</h4>
            <p className="text-slate-500 text-[11px]">Real-time Patient Token & Consultation Manager</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-md font-semibold text-[11px]">
            Queue Active: 14 Patients
          </span>
          <button className="px-3 py-1.5 bg-[#CE2433] hover:bg-red-700 text-white rounded-md font-bold flex items-center gap-1.5 shadow-xs">
            <Plus className="w-3.5 h-3.5" /> Issue Token
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Active Token Queue */}
        <div className="lg:col-span-1 bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-3 text-slate-600 font-semibold border-b border-slate-200 pb-2">
            <span>Today&apos;s Tokens</span>
            <span className="text-[10px] text-slate-500 font-mono">TOKEN #OPD-2048</span>
          </div>

          <div className="space-y-2">
            {[
              { id: "T-101", name: "Muhammad Ali", doctor: "Dr. Sarah (Cardiology)", status: "In Consultation", time: "10:15 AM", active: true },
              { id: "T-102", name: "Zainab Bibi", doctor: "Dr. Hamza (Orthopedics)", status: "Waiting", time: "10:22 AM", active: false },
              { id: "T-103", name: "Usman Ghani", doctor: "Dr. Sarah (Cardiology)", status: "Waiting", time: "10:30 AM", active: false },
              { id: "T-104", name: "Fatima Noor", doctor: "Dr. Bilal (Neurology)", status: "Vital Signs Done", time: "10:35 AM", active: false },
            ].map((pt) => (
              <div
                key={pt.id}
                className={`p-2.5 rounded-lg border transition-all ${
                  pt.active
                    ? "bg-white border-[#224183] text-slate-900 shadow-md shadow-blue-900/5 ring-1 ring-blue-500/20"
                    : "bg-white/60 border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-bold text-[#CE2433]">{pt.id}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      pt.active
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {pt.status}
                  </span>
                </div>
                <div className="font-bold text-slate-900">{pt.name}</div>
                <div className="text-[10px] text-slate-500 flex items-center justify-between mt-1">
                  <span>{pt.doctor}</span>
                  <span>{pt.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Active Consultation Screen */}
        <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#CE2433]" />
              <span className="font-bold text-slate-900">Active Consultation: Muhammad Ali</span>
              <span className="text-[10px] bg-blue-100 text-[#224183] px-2 py-0.5 rounded font-semibold border border-blue-200">
                MRN: 9482-PK
              </span>
            </div>
            <button className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded text-[11px] flex items-center gap-1 shadow-xs font-semibold">
              <Printer className="w-3 h-3 text-slate-500" /> Print Invoice
            </button>
          </div>

          {/* Vitals Summary Strip */}
          <div className="grid grid-cols-4 gap-2 bg-white p-2.5 rounded-lg border border-slate-200 font-mono shadow-2xs">
            <div>
              <div className="text-[10px] text-slate-500 font-sans">BLOOD PRESSURE</div>
              <div className="text-emerald-600 font-bold text-xs">120 / 80 mmHg</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-sans">HEART RATE</div>
              <div className="text-red-600 font-bold text-xs">78 bpm</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-sans">SPO2</div>
              <div className="text-[#224183] font-bold text-xs">98%</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-sans">TEMP</div>
              <div className="text-amber-600 font-bold text-xs">98.6 °F</div>
            </div>
          </div>

          {/* Digital Prescription Builder */}
          <div className="space-y-2">
            <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
              Digital Rx Prescription & Advice
            </label>
            <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-2 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] text-slate-800 font-mono bg-slate-50 p-2 rounded border border-slate-200">
                <span>1. Tab. Capoten 25mg — 1 tablet daily (Morning)</span>
                <span className="text-emerald-700 font-semibold">14 Days</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-800 font-mono bg-slate-50 p-2 rounded border border-slate-200">
                <span>2. Tab. Panadol 500mg — 1 tablet as needed</span>
                <span className="text-emerald-700 font-semibold">5 Days</span>
              </div>
            </div>
          </div>

          {/* OPD Billing Summary */}
          <div className="flex items-center justify-between p-3 bg-blue-50/80 border border-blue-200 rounded-lg">
            <div>
              <div className="text-[10px] text-slate-600">Consultation Fee + OPD Registration</div>
              <div className="font-bold text-[#224183] text-sm">PKR 2,500 <span className="text-xs font-normal text-emerald-600">(Paid - Receipt #OPD-INV-892)</span></div>
            </div>
            <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold flex items-center gap-1 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5" /> Complete Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2. IPD MODULE SCREEN MOCKUP */
export function IpdScreen() {
  return (
    <div className="bg-white text-slate-800 rounded-xl p-3 sm:p-5 border border-slate-200 text-xs font-sans shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#CE2433] text-white flex items-center justify-center font-bold shadow-sm">
            IPD
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#224183]">In-Patient Department (IPD) Admissions</h4>
            <p className="text-slate-500 text-[11px]">Ward Management, Vitals Monitoring & Discharge Ledger</p>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-blue-50 border border-blue-200 text-[#224183] rounded-md font-semibold text-[11px]">
          Occupancy Rate: 86% (43 / 50 Beds)
        </span>
      </div>

      {/* Bed Status Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {[
          { room: "Room 301 - Bed A", patient: "Kamran Akmal", dept: "Surgery", status: "Post-Op Care", color: "border-blue-300 bg-blue-50/60" },
          { room: "Room 302 - Bed B", patient: "Saima Nasir", dept: "Medical", status: "Stable Vitals", color: "border-emerald-300 bg-emerald-50/60" },
          { room: "Room 304 - Bed C", patient: "Tariq Mahmood", dept: "Emergency ICU", status: "Critical Care", color: "border-red-300 bg-red-50/60" },
          { room: "Room 305 - Bed D", patient: "Vacant Bed", dept: "Sanitized", status: "Ready for Admission", color: "border-slate-200 bg-slate-50" },
        ].map((bed, idx) => (
          <div key={idx} className={`p-3 rounded-lg border ${bed.color} space-y-1 shadow-2xs`}>
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span>{bed.room}</span>
              <span className="px-1 bg-white border rounded text-slate-700">{bed.dept}</span>
            </div>
            <div className="font-bold text-slate-900 text-xs">{bed.patient}</div>
            <div className="text-[10px] font-semibold text-slate-600">{bed.status}</div>
          </div>
        ))}
      </div>

      {/* Patient Detailed Treatment Plan */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-900">Admitted Patient Timeline: Tariq Mahmood (ICU Bed 3)</span>
          </div>
          <span className="text-[10px] font-mono bg-red-100 text-red-800 border border-red-200 px-2 py-0.5 rounded font-semibold">
            Admitted: July 27, 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
            <div className="text-slate-600 font-semibold mb-1">Doctor Daily Notes</div>
            <p className="text-slate-700 text-[11px]">
              Patient showing improved oxygenation post surgical procedure. Vitals checked hourly.
            </p>
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
            <div className="text-slate-600 font-semibold mb-1">Medication Admin Log</div>
            <p className="text-slate-700 text-[11px]">
              Inj. Rocephin 1g IV given at 08:00 AM. IV fluids running at 80ml/hr.
            </p>
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
            <div className="text-slate-600 font-semibold mb-1">Running IPD Billing</div>
            <div className="font-mono font-bold text-emerald-600 text-sm">PKR 48,500</div>
            <div className="text-[10px] text-slate-500">Includes Room, Nursing, Surgery & Lab</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. BLOOD BANK MODULE SCREEN MOCKUP */
export function BloodBankScreen() {
  return (
    <div className="bg-white text-slate-800 rounded-xl p-3 sm:p-5 border border-slate-200 text-xs font-sans shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold shadow-sm">
            <Droplet className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#224183]">Blood Bank Operations & Donor Registry</h4>
            <p className="text-slate-500 text-[11px]">Collection → Screening → Testing → Cross-Match → Issuing</p>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-red-50 border border-red-200 text-red-700 rounded-md font-semibold text-[11px]">
          Approved Stock: 142 Units
        </span>
      </div>

      {/* Blood Inventory Status Cards */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-4 font-mono">
        {[
          { type: "A+", units: "42 Units", color: "bg-red-50 border-red-200 text-red-800" },
          { type: "A-", units: "8 Units", color: "bg-slate-50 border-slate-200 text-slate-700" },
          { type: "B+", units: "38 Units", color: "bg-red-50 border-red-200 text-red-800" },
          { type: "B-", units: "5 Units", color: "bg-amber-50 border-amber-200 text-amber-800" },
          { type: "O+", units: "34 Units", color: "bg-red-50 border-red-200 text-red-800" },
          { type: "O-", units: "12 Units", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
          { type: "AB+", units: "10 Units", color: "bg-red-50 border-red-200 text-red-800" },
          { type: "AB-", units: "3 Units", color: "bg-red-100 border-red-300 text-red-900 font-bold" },
        ].map((b, i) => (
          <div key={i} className={`p-2 rounded border text-center shadow-2xs ${b.color}`}>
            <div className="text-sm font-bold">{b.type}</div>
            <div className="text-[10px]">{b.units}</div>
          </div>
        ))}
      </div>

      {/* Step-by-Step Screening & Barcode Sticker Generator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Screening Pipeline */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
          <div className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 flex justify-between">
            <span>Blood Bag Screening Register</span>
            <span className="text-[10px] text-slate-500 font-mono">5 Markers Verified</span>
          </div>
          {[
            { bag: "BAG-8821", donor: "Ahmed Raza", blood: "O+", status: "Tested & Approved", date: "29-Jul-2026" },
            { bag: "BAG-8822", donor: "Bilal Sheikh", blood: "A+", status: "Cross-Match Pending", date: "29-Jul-2026" },
            { bag: "BAG-8823", donor: "Hamza Tariq", blood: "B+", status: "Collection Complete", date: "29-Jul-2026" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 bg-white rounded border border-slate-200 shadow-2xs">
              <div>
                <span className="font-mono font-bold text-red-600">{item.bag}</span>
                <span className="text-slate-800 ml-2 font-medium">{item.donor} ({item.blood})</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-mono font-semibold">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Barcode & Sticker Output Mockup */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-900 font-bold mb-2">
              <span>Verified Blood Bag Label</span>
              <span className="text-[10px] text-emerald-700 font-mono font-bold">STICKER GENERATED</span>
            </div>
            <div className="p-3 bg-white text-slate-900 rounded border border-slate-300 font-mono space-y-1 shadow-sm">
              <div className="flex justify-between items-center border-b pb-1 font-bold">
                <span className="text-red-700 text-lg">O POSITIVE (O+)</span>
                <span className="text-xs text-slate-600">VOL: 450 ML</span>
              </div>
              <div className="text-[11px]">BAG ID: PAK-BB-2026-9041</div>
              <div className="text-[10px] text-slate-600">DONOR: VOLUNTEER #940</div>
              <div className="text-[10px] text-slate-600">SCREENED: ALL 5 MARKERS CLEAR</div>
              <div className="text-[10px] text-slate-600">EXPIRY: 02-SEP-2026</div>
              <div className="pt-2 text-center text-[10px] tracking-widest bg-slate-100 p-1 border font-bold">
                ||||| | |||| ||| ||||||| ||| |||
              </div>
            </div>
          </div>
          <button className="mt-3 w-full py-1.5 bg-[#224183] text-white font-bold rounded flex items-center justify-center gap-1 text-[11px] shadow-xs">
            <Printer className="w-3.5 h-3.5" /> Print Blood Bag Barcode Label
          </button>
        </div>
      </div>
    </div>
  );
}

/* 4. BILLING & INVOICING MODULE SCREEN MOCKUP */
export function BillingInvoiceScreen() {
  return (
    <div className="bg-white text-slate-800 rounded-xl p-3 sm:p-5 border border-slate-200 text-xs font-sans shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#224183]">Central Hospital Billing & Invoicing Engine</h4>
            <p className="text-slate-500 text-[11px]">OPD, IPD, Pharmacy, Blood Bank & Insurance Collections</p>
          </div>
        </div>
        <span className="px-2 py-1 bg-slate-100 border text-slate-700 rounded font-mono font-semibold">
          INV #PK-2026-8819
        </span>
      </div>

      {/* Invoice Document Box */}
      <div className="bg-white text-slate-900 rounded-xl p-4 sm:p-6 shadow-md border border-slate-200 font-sans">
        <div className="flex justify-between items-start border-b pb-4 mb-4">
          <div>
            <div className="text-xl font-black text-[#224183]">PAKHIMS HOSPITAL</div>
            <div className="text-xs text-slate-500">Main Campus, Medical City, Pakistan</div>
            <div className="text-xs text-slate-500 font-mono">NTN: 849204-1 | Reg: HMS-902</div>
          </div>
          <div className="text-right">
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 font-bold rounded text-xs mb-1 border border-emerald-200">
              PAID IN FULL
            </div>
            <div className="text-xs text-slate-600 font-mono">Date: 29-Jul-2026</div>
          </div>
        </div>

        {/* Patient Detail Line */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-slate-50 rounded-lg text-xs mb-4 border border-slate-200">
          <div>
            <span className="text-slate-500 block text-[10px]">PATIENT NAME</span>
            <span className="font-bold text-slate-900">Dr. Hassan Tariq</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">MRN NUMBER</span>
            <span className="font-mono font-bold text-slate-900">MRN-9021</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">CONSULTANT</span>
            <span className="font-semibold text-slate-900">Dr. Sarah Imran</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px]">PAYMENT TYPE</span>
            <span className="font-semibold text-[#CE2433]">Insurance Covered</span>
          </div>
        </div>

        {/* Itemized Table */}
        <table className="w-full text-left text-xs mb-4">
          <thead>
            <tr className="border-b bg-slate-100 text-slate-700 font-bold">
              <th className="py-2 px-2">Description</th>
              <th className="py-2 px-2 text-center">Qty</th>
              <th className="py-2 px-2 text-right">Unit Price</th>
              <th className="py-2 px-2 text-right">Total (PKR)</th>
            </tr>
          </thead>
          <tbody className="divide-y font-mono">
            <tr>
              <td className="py-2 px-2 font-sans">Specialist OPD Consultation Fee</td>
              <td className="py-2 px-2 text-center">1</td>
              <td className="py-2 px-2 text-right">2,000</td>
              <td className="py-2 px-2 text-right font-bold">2,000</td>
            </tr>
            <tr>
              <td className="py-2 px-2 font-sans">Complete Blood Count (CBC) Lab Test</td>
              <td className="py-2 px-2 text-center">1</td>
              <td className="py-2 px-2 text-right">1,200</td>
              <td className="py-2 px-2 text-right font-bold">1,200</td>
            </tr>
            <tr>
              <td className="py-2 px-2 font-sans">ECG & Cardiac Screening</td>
              <td className="py-2 px-2 text-center">1</td>
              <td className="py-2 px-2 text-right">1,800</td>
              <td className="py-2 px-2 text-right font-bold">1,800</td>
            </tr>
          </tbody>
        </table>

        {/* Invoice Subtotal */}
        <div className="flex justify-between items-center border-t pt-3 font-mono">
          <span className="text-xs text-slate-500 font-sans">System Generated Invoice</span>
          <div className="text-right">
            <span className="text-xs text-slate-600 block">TOTAL AMOUNT:</span>
            <span className="text-lg font-black text-[#224183]">PKR 5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. ACCOUNTS & DOCTOR SHARES MOCKUP */
export function AccountsScreen() {
  return (
    <div className="bg-white text-slate-800 rounded-xl p-3 sm:p-5 border border-slate-200 text-xs font-sans shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#224183] text-white flex items-center justify-center font-bold shadow-sm">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#224183]">Doctor Shared Accounts & Revenue Shares</h4>
            <p className="text-slate-500 text-[11px]">Daily Fixed, Monthly Fixed & Per-Patient Percentage Splits</p>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-purple-50 border border-purple-200 text-purple-700 rounded-md font-semibold text-[11px]">
          July Earnings Reconciled
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 font-mono">
        <div className="p-3 bg-slate-50 rounded border border-slate-200">
          <div className="text-slate-500 text-[10px] font-sans">TOTAL HOSPITAL OPD COLLECTION</div>
          <div className="text-lg font-bold text-slate-900">PKR 1,480,000</div>
        </div>
        <div className="p-3 bg-slate-50 rounded border border-slate-200">
          <div className="text-slate-500 text-[10px] font-sans">DOCTORS SHARE TOTAL</div>
          <div className="text-lg font-bold text-emerald-700">PKR 1,036,000</div>
        </div>
        <div className="p-3 bg-slate-50 rounded border border-slate-200">
          <div className="text-slate-500 text-[10px] font-sans">NET HOSPITAL RETENTION (30%)</div>
          <div className="text-lg font-bold text-[#CE2433]">PKR 444,000</div>
        </div>
      </div>

      {/* Doctor Breakdown Table */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
        <div className="font-bold text-slate-900 mb-2">Doctor Share Ledger (Configured Agreements)</div>
        <div className="space-y-2">
          {[
            { doctor: "Dr. Sarah Imran (Cardiology)", shareType: "70% Per Patient", patients: "48 Patients", total: "PKR 168,000" },
            { doctor: "Dr. Hamza Bilal (Orthopedics)", shareType: "Fixed Monthly (PKR 250,000)", patients: "62 Patients", total: "PKR 250,000" },
            { doctor: "Dr. Ayesha Malik (Gynecology)", shareType: "80% Per Surgery", patients: "14 Surgeries", total: "PKR 336,000" },
          ].map((d, idx) => (
            <div key={idx} className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200 text-xs shadow-2xs">
              <div>
                <span className="font-bold text-slate-900">{d.doctor}</span>
                <div className="text-[10px] text-slate-500">{d.shareType} • {d.patients}</div>
              </div>
              <div className="font-mono font-bold text-emerald-700 text-sm">
                {d.total}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
