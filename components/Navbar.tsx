"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();

  // Navbar background opacity: transparent at top, solid white after 100px
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 w-full z-[100] px-6 lg:px-20 py-6 flex justify-between items-center backdrop-blur-md border-b border-black/[0.05]"
    >
      <motion.div className="flex items-center gap-3">
        {/* ADDED TIBCO LOGO HERE */}
        <img src="/images/tibcoLogo_nobg.png" alt="Tibco Logo" className="h-12 w-auto object-contain" />
        <span className="text-[#111111] font-black tracking-tighter text-2xl mt-1">TIBCO.</span>
      </motion.div>

      <div className="flex gap-8 text-[#111111] text-xs font-bold uppercase tracking-widest hidden md:flex">
        <a href="#menu" className="hover:text-[#C9A063] transition-colors py-2">Menu</a>
        <a href="#story" className="hover:text-[#C9A063] transition-colors py-2">Our Story</a>
        <a href="#about-us" className="hover:text-[#C9A063] transition-colors py-2">Our People</a>
        <a href="#locations" className="hover:text-[#C9A063] transition-colors py-2">Locations</a>
      </div>

      {/* Mobile Menu Toggle (Visual only for MVP) */}
      <div className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2">
        <div className="w-6 h-0.5 bg-[#111]"></div>
        <div className="w-6 h-0.5 bg-[#111]"></div>
      </div>
    </motion.nav>
  );
}