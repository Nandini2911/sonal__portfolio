"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Gallary", href: "#Gallary" },

  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.06)] border-b border-brand-gold/40"
          : "bg-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* LOGO */}
        <Link href="#top" onClick={handleNavClick}>
          <span className="font-display text-xl sm:text-2xl text-brand-burgundy tracking-wide">
            Sonal Wankhede
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="font-display text-[15px] text-brand-burgundy/85 hover:text-brand-burgundy relative group"
            >
              {item.label}
              <span className="pointer-events-none absolute left-0 -bottom-1 h-[1.5px] w-0 bg-brand-gold transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-brand-burgundy/40 text-brand-burgundy"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-[5px]">
            <span
              className={`block h-[2px] w-5 rounded-full bg-brand-burgundy transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-brand-burgundy transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-brand-burgundy transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-t border-brand-gold/30 bg-white/98 backdrop-blur-md"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-4 pt-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="font-display text-[15px] text-brand-burgundy/90 py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
