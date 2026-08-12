"use client";

interface Mock3dPhoneProps {
  className?: string;
}

export default function Mock3dPhone({ className = "" }: Mock3dPhoneProps) {

  return (
    <a
      href="https://play.google.com/store/search?q=apni%20appointment&c=apps"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative phone-3d-tilt z-30 group/phone block cursor-pointer hover:scale-[1.02] active:scale-98 transition-all ${className}`}
    >
      {/* 3D Phone Outer Shell */}
      <div className="w-[270px] sm:w-[290px] h-[540px] bg-slate-900 rounded-[44px] p-3 shadow-2xl shadow-slate-900/60 border-4 border-slate-700/80 relative overflow-hidden">
        {/* Side Buttons */}
        <div className="absolute -left-[7px] top-24 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
        <div className="absolute -left-[7px] top-38 w-[3px] h-12 bg-slate-600 rounded-l-sm" />
        <div className="absolute -right-[7px] top-28 w-[3px] h-14 bg-slate-600 rounded-r-sm" />

        {/* Phone Screen Notch */}
        <div className="w-full bg-slate-950 pt-2 pb-1.5 px-4 flex justify-between items-center z-30 relative shrink-0 border-b border-slate-800 rounded-t-[32px]">
          <span className="text-[10px] font-bold text-slate-400 font-mono">09:41 AM</span>
          <div className="w-16 h-3.5 bg-slate-900 rounded-full flex items-center justify-center gap-1 border border-slate-800">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <span>5G</span>
          </div>
        </div>

        {/* Phone Screen — Real Screenshot */}
        <div className="w-full h-[470px] rounded-b-[32px] overflow-hidden relative border border-slate-800">
          <img
            src="/img/pakhims-mobile.png"
            alt="Apni Appointment Mobile App Screenshot"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </a>
  );
}
