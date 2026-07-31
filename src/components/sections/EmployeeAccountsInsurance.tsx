"use client";

import { UserCheck, DollarSign, ShieldCheck, Calendar, Percent } from "lucide-react";
import MockBrowserWindow from "../ui/MockBrowserWindow";
import { AccountsScreen } from "../ui/SoftwareScreens";

export default function EmployeeAccountsInsurance({ hideCards = false, hideAccounts = false }: { hideCards?: boolean; hideAccounts?: boolean }) {
  const accountsHighlights = [
    { title: "Daily Fixed Rates", icon: DollarSign, desc: "For visiting consultants on set daily stipends." },
    { title: "Monthly Retainer Salaries", icon: Calendar, desc: "For full-time medical officers and HODs." },
    { title: "Per-Patient Percentage Splits", icon: Percent, desc: "Custom percentage shares (e.g. 70% doctor / 30% hospital)." },
  ];

  return (
    <section id="modules" className="py-10 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 ${!hideAccounts && !hideCards ? 'space-y-36 sm:space-y-44 lg:space-y-52' : ''}`}>
        {/* Sub-Section 1: Accounts & Doctor Earnings — hidden on home page when hideAccounts=true */}
        {!hideAccounts && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center" id="accounts">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              <span className="inline-block whitespace-nowrap">Know Where Every</span> <br />
              <span className="text-[#224183] inline-block whitespace-nowrap">Number Comes From.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Eliminate revenue disputes between hospital owners and consultant doctors. PAKHIMS automatically calculates earnings based on your specific doctor agreements.
            </p>

            {/* Feature Cards with Icons */}
            <div className="space-y-3 pt-2">
              {accountsHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-[#224183]/60 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/80 text-[#CE2433] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#CE2433] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading group-hover:text-[#224183] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-600 font-sans mt-0.5 leading-normal truncate sm:whitespace-normal">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Invoice Screen Showcase Window with Permanent Heavy Shadow */}
          <div className="lg:col-span-7 relative shadow-[0_30px_70px_-15px_rgba(34,65,131,0.35)] rounded-2xl border border-slate-200/90 bg-white">
            <MockBrowserWindow
              url="app.pakhims.com/accounts/doctor-ledger"
              title="PAKHIMS Doctor Share Ledger & Revenue Allocation"
            >
              <img
                src="/img/accounts.png"
                alt="Know Where Every Number Comes From."
                className="w-full h-auto object-cover rounded-xl shadow-xs"
              />
            </MockBrowserWindow>
          </div>
        </div>
        )}

        {/* Sub-Section 2: Employee RBAC & Insurance Dual Cards Grid — hidden on /features page */}
        {!hideCards && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Employee Management (Brand Navy Blue #224183) */}
          <div className="bg-[#224183] text-white p-8 sm:p-9 rounded-3xl space-y-4 shadow-lg hover:shadow-[0_25px_60px_-15px_rgba(34,65,131,0.55)] hover:-translate-y-2 transition-all duration-300 text-left border border-blue-900/40 group">
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 text-white flex items-center justify-center font-bold shadow-xs transition-transform group-hover:scale-110">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-blue-200">
              Staff & Security
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">Keep Your Hospital Team Organized.</h3>
            <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed font-sans">
              Add staff members, assign role-based access control (RBAC), and define exact screen permissions for doctors, nurses, accountants, receptionists, and system administrators.
            </p>
            <ul className="space-y-2 text-xs text-white font-semibold font-sans pt-1">
              <li className="flex items-center gap-2">✓ Strict role-based screen access</li>
              <li className="flex items-center gap-2">✓ Staff login activity logs</li>
              <li className="flex items-center gap-2">✓ Shift & duty scheduling</li>
            </ul>
          </div>

          {/* Card 2: Online Appointment Management (Brand Crimson Red #CE2433) */}
          <div className="bg-[#CE2433] text-white p-8 sm:p-9 rounded-3xl space-y-4 shadow-lg hover:shadow-[0_25px_60px_-15px_rgba(206,36,51,0.55)] hover:-translate-y-2 transition-all duration-300 text-left border border-rose-900/40 group">
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 text-white flex items-center justify-center font-bold shadow-xs transition-transform group-hover:scale-110">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-rose-200">
              Online Appointment
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">Make Patient Booking Simpler & Faster.</h3>
            <p className="text-rose-100/90 text-xs sm:text-sm leading-relaxed font-sans">
              Enable seamless 24/7 online doctor booking, instant time slot allocation, automated SMS/WhatsApp appointment reminders, and zero queue delays.
            </p>
            <ul className="space-y-2 text-xs text-white font-semibold font-sans pt-1">
              <li className="flex items-center gap-2">✓ 24/7 online doctor booking portal</li>
              <li className="flex items-center gap-2">✓ Real-time slot availability & reminders</li>
              <li className="flex items-center gap-2">✓ Direct OPD token queue integration</li>
            </ul>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}

