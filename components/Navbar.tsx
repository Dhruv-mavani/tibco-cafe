"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const navLinks = [
    { href: "#menu", label: "Menu" },
    { href: "#story", label: "Our Story" },
    { href: "#about-us", label: "Our People" },
    { href: "#locations", label: "Locations" },
  ];

  return (
    <>
      <m.nav
        style={{ backgroundColor }}
        className="fixed top-0 w-full z-[100] px-6 lg:px-20 py-6 flex justify-between items-center backdrop-blur-md border-b border-black/[0.05]"
      >
        <m.div className="flex items-center gap-3">
          <Image src="/images/tibcoLogo_nobg.png" alt="Tibco Logo" width={48} height={48} className="h-12 w-auto object-contain" priority />
          <span className="text-[#111111] font-black tracking-tighter text-2xl mt-1">TIBCO.</span>
        </m.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-[#111111] text-xs font-bold uppercase tracking-widest">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-[#C9A063] transition-colors py-2">{link.label}</a>
            ))}
          </div>
          <a href="https://wa.me/917069369000" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#111] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#C9A063] transition-all duration-300 shadow-md hover:shadow-lg">
            Order Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 relative w-10 h-10 items-center justify-center"
          aria-label="Toggle menu"
        >
          <m.div
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0 }}
            className="w-6 h-0.5 bg-[#111] origin-center"
          />
          <m.div
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0 }}
            className="w-6 h-0.5 bg-[#111] origin-center"
          />
        </button>
      </m.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[88px] left-0 right-0 z-[99] bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-xl md:hidden"
          >
            <div className="flex flex-col px-8 py-6 gap-1">
              {navLinks.map((link, i) => (
                <m.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-[#111] text-sm font-bold uppercase tracking-widest py-3 border-b border-black/5 hover:text-[#C9A063] transition-colors"
                >
                  {link.label}
                </m.a>
              ))}
              <m.a
                href="https://wa.me/917069369000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 px-6 py-3 bg-[#111] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C9A063] transition-all text-center shadow-md"
              >
                Order Now
              </m.a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}