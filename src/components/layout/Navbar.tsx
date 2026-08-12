"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const pathname = usePathname();

  const navLinks = [
    { name: "Overview", href: "/#hero", id: "hero" },
    { name: "Signature Core", href: "/#signature", id: "signature" },
    { name: "Ecosystem", href: "/#ecosystem", id: "ecosystem" },
    { name: "Online Appointment", href: "/#online-appointments", id: "online-appointments" },
    { name: "Interactive Demo", href: "/#demo", id: "demo" },
    { name: "Why PAKHIMS", href: "/#why-pakhims", id: "why-pakhims" },
    { name: "Pricing", href: "/pricing", id: "pricing" },
  ];

  const sectionToNavMap: Record<string, string> = {
    hero: "hero",
    signature: "signature",
    ecosystem: "ecosystem",
    "online-appointments": "online-appointments",
    modules: "online-appointments",
    records: "online-appointments",
    accounts: "online-appointments",
    opd: "online-appointments",
    ipd: "online-appointments",
    billing: "online-appointments",
    bloodbank: "online-appointments",
    pricing: "pricing",
    "why-pakhims": "why-pakhims",
    demo: "demo",
  };

  useEffect(() => {
    if (pathname === "/pricing") {
      setActiveSection("pricing");
      return;
    }
    if (pathname === "/features") {
      setActiveSection("online-appointments");
      return;
    }

    // Read initial hash if present
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (sectionToNavMap[hash]) {
        setActiveSection(sectionToNavMap[hash]);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 80) {
        setActiveSection("hero");
        return;
      }

      const allSectionIds = Object.keys(sectionToNavMap);
      const scrollPosition = 160;

      for (const secId of allSectionIds) {
        const el = document.getElementById(secId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollPosition && rect.bottom > scrollPosition) {
            setActiveSection(sectionToNavMap[secId]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkId: string, href: string) => {
    setActiveSection(linkId);

    if (typeof window !== "undefined") {
      const isHomePage = window.location.pathname === "/";
      if (isHomePage && href.includes("#")) {
        const targetId = href.split("#")[1];
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const yOffset = -80;
          const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#077dd3]/95 backdrop-blur-md border-b border-blue-900/60 shadow-lg py-2.5 sm:py-3"
          : "bg-[#077dd3] border-b border-blue-900/30 shadow-md py-3.5 sm:py-4.5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "hero", "/#hero")}
          className="flex items-center group py-0.5 transition-all duration-500"
        >
          <img
            src="/img/pak-hims-logo.png"
            alt="PAKHIMS Hospital Management Platform"
            className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
              scrolled ? "h-10 sm:h-12 md:h-13" : "h-12 sm:h-14 md:h-15"
            }`}
          />
        </Link>

        {/* Desktop Nav Links with Active Underline */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.href)}
                className={`text-xs sm:text-sm font-semibold transition-colors relative py-2.5 ${
                  isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                }`}
              >
                <span>{link.name}</span>

                {/* Animated Red Active Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#CE2433] rounded-full shadow-[0_0_10px_rgba(206,36,51,0.85)]"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 32,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 bg-[#CE2433] hover:bg-[#E32D3D] text-white text-xs font-bold rounded-full shadow-md shadow-red-950/40 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border border-red-400/30"
          >
            <span>Request Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1b3469] border-b border-blue-900 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, link.id, link.href);
                    }}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "text-white bg-white/15 font-bold border-l-4 border-[#CE2433] pl-3"
                        : "text-slate-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-3 bg-[#CE2433] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-red-950/30"
                >
                  <span>Request Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
