"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Dr. Zahid",
      role: "Cardiologist — Heart Specialist",
      location: "Rahim Yar Khan",
      quote: "PAKHIMS has revolutionized how I manage my practice. The seamless appointment system and patient management tools have increased my efficiency by 40%. It's truly the future of healthcare management.",
      rating: 5,
      initials: "DZ",
      color: "bg-[#224183]",
    },
    {
      id: 2,
      name: "Dr. Zahoor Ahmad",
      role: "Peads Surgeon",
      location: "Rahim Yar Khan",
      quote: "Finding the right doctor was always a challenge until I discovered PAKHIMS. The platform made it incredibly easy to book appointments and access my medical records. Outstanding service!",
      rating: 5,
      initials: "ZA",
      color: "bg-[#CE2433]",
    },
    {
      id: 3,
      name: "Dr. Sultan Mahmood",
      role: "Pediatrician — Child Healthcare",
      location: "Islamabad",
      quote: "The patient communication features and scheduling system have transformed my practice. Parents can easily book appointments and track their children's health records. Highly recommended!",
      rating: 5,
      initials: "SM",
      color: "bg-[#224183]",
    },
    {
      id: 4,
      name: "Muhammad Azhar Sattar",
      role: "Patient",
      location: "Rawalpindi",
      quote: "PAKHIMS saved me time and stress during my pregnancy. Easy appointment booking, timely reminders, and access to all my reports in one place. Exceptional healthcare platform!",
      rating: 5,
      initials: "MA",
      color: "bg-emerald-700",
    },
    {
      id: 5,
      name: "Dr. Farooq Bhutta",
      role: "Otolaryngologist — Bone & Joint Care",
      location: "Peshawar",
      quote: "The analytics and patient management features help me provide better care. The platform's reliability and user-friendly interface make it indispensable for modern medical practice.",
      rating: 5,
      initials: "FB",
      color: "bg-purple-700",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic continuous carousel auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white text-slate-900 relative border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-left max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight pb-2">
              <span className="inline-block whitespace-nowrap">Trusted By Doctors & Patients</span> <br />
              <span>Across </span>
              <span className="relative inline-block text-[#224183]">
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
              </span>
              .
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Read verified feedback from healthcare specialists, surgeons, and patients across Pakistan using PAKHIMS every day.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#224183] hover:bg-[#224183] hover:text-white hover:border-[#224183] shadow-md transition-all duration-300 flex items-center justify-center group active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#224183] hover:bg-[#224183] hover:text-white hover:border-[#224183] shadow-md transition-all duration-300 flex items-center justify-center group active:scale-95"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Cards Container */}
        <div className="relative overflow-hidden pt-2 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {[0, 1, 2].map((offset) => {
                const itemIndex = (currentIndex + offset) % reviews.length;
                const rev = reviews[itemIndex];
                return (
                  <div
                    key={`${rev.id}-${offset}`}
                    className="bg-white border border-slate-200/90 p-8 rounded-3xl space-y-5 shadow-sm hover:border-[#224183]/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left"
                  >
                    <div className="space-y-4">
                      {/* Top Row: Stars & Quote Icon */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>

                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#224183] flex items-center justify-center">
                          <Quote className="w-4 h-4 text-[#CE2433]" />
                        </div>
                      </div>

                      {/* Review Quote Text */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans italic min-h-[96px]">
                        &ldquo;{rev.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Info Banner */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                      <div className={`w-11 h-11 rounded-2xl ${rev.color} text-white flex items-center justify-center font-extrabold text-sm shrink-0 font-mono shadow-xs group-hover:scale-105 transition-transform`}>
                        {rev.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base font-heading truncate group-hover:text-[#224183] transition-colors">
                          {rev.name}
                        </h3>
                        <div className="text-xs text-[#CE2433] font-medium font-sans truncate">
                          {rev.role}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-sans mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>{rev.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-[#224183]"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

