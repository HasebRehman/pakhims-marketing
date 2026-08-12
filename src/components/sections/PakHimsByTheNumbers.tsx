"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, UserCheck, Calendar, Clock } from "lucide-react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);

      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function PakHimsByTheNumbers() {
  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "Partner Hospitals",
      desc: "Trusted healthcare facilities",
      icon: Building2,
      iconBg: "bg-blue-600 text-white shadow-blue-500/25",
      numColor: "text-blue-600",
    },
    {
      value: 500,
      suffix: "+",
      label: "Verified Doctors",
      desc: "Licensed medical professionals",
      icon: UserCheck,
      iconBg: "bg-emerald-600 text-white shadow-emerald-500/25",
      numColor: "text-emerald-600",
    },
    {
      value: 50000,
      suffix: "+",
      label: "Appointments Booked",
      desc: "Successful consultations",
      icon: Calendar,
      iconBg: "bg-purple-600 text-white shadow-purple-500/25",
      numColor: "text-purple-600",
    },
    {
      value: 100,
      suffix: "%",
      label: "System Uptime",
      desc: "Reliable 24/7 service",
      icon: Clock,
      iconBg: "bg-orange-600 text-white shadow-orange-500/25",
      numColor: "text-orange-600",
    },
  ];

  return (
    <section className="py-12 sm:py-24 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight pb-3">
            <span className="relative inline-block text-[#077dd3]">
              PAKHIMS
              {/* Animated Hand-Drawn Red Marker Underline SVG */}
              <motion.svg
                className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-4 sm:h-5 overflow-visible pointer-events-none"
                viewBox="0 0 160 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
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
            by the Numbers
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Trusted by thousands of patients and healthcare providers across Pakistan
          </p>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-8 text-center flex flex-col items-center justify-between space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Icon Badge Container */}
                <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} shadow-lg flex items-center justify-center font-bold transition-transform group-hover:scale-110 duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Animated Stat Counter */}
                <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight font-heading ${stat.numColor}`}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Stat Labels */}
                <div className="space-y-1">
                  <h3 className="font-extrabold text-slate-900 text-base font-heading">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
