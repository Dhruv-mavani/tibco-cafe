"use client";

import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import { m, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

// Lazy-load below-fold components to reduce initial bundle size
const InteractiveMenu = dynamic(() => import('@/components/InteractiveMenu'), { ssr: false });
const GalleryCarousel = dynamic(() => import('@/components/GalleryCarousel'), { ssr: false });
const LocationsSection = dynamic(() => import('@/components/LocationsSection'), { ssr: false });
const LocationsShowcase = dynamic(() => import('@/components/LocationsShowcase'), { ssr: false });
const AboutUs = dynamic(() => import('@/components/AboutUs'), { ssr: false });
const FeaturesBento = dynamic(() => import('@/components/FeaturesBento'), { ssr: false });
const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects — disabled on mobile for performance
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  // Mouse tracking for breathing logo (always create hooks, conditionally use values)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  // Always call useTransform (Rules of Hooks), but only apply on desktop
  const logoX = useTransform(springX, [-500, 500], [-30, 30]);
  const logoY = useTransform(springY, [-500, 500], [-30, 30]);
  const logoRotate = useTransform(springX, [-500, 500], [-2, 2]);

  const handleMouseMove = isMobile ? undefined : (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen relative text-[#111111]" onMouseMove={handleMouseMove}>
      <Navbar />

      <main>
        {/* Global Grain Texture */}
        <div className="grain-overlay" />

        {/* HERO SECTION */}
        <section aria-label="Hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

          {/* BREATHING WATERMARK LOGO */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <m.img
              src="/images/tibcoLogo_nobg.png"
              alt="Tibco Background"
              style={isMobile ? {} : {
                x: logoX,
                y: logoY,
                rotate: logoRotate,
              }}
              animate={{
                scale: isMobile ? [1, 1.02, 1] : [1, 1.05, 1],
                opacity: [0.10, 0.15, 0.10],
              }}
              transition={{
                duration: isMobile ? 10 : 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              width={800}
              height={800}
              fetchPriority="high"
              className="w-[90vw] max-w-[800px] h-auto object-contain md:drop-shadow-sm"
            />
          </div>

          <m.div style={isMobile ? {} : { y: heroY }} className="z-10 flex flex-col items-center text-center">

            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#444444]">
                The Independent Brewer's Coffee
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] text-[#111]"
            >
              Pure.<br />
              <span className="text-[#C9A063]">Unfiltered.</span><br />
              Community.
            </m.h1>

            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 text-lg md:text-xl text-[#444] max-w-lg font-light"
            >
              Experience coffee in its most brilliant form, crafted in spaces designed for clarity and connection.
            </m.p>

            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12"
            >
              <a href="https://wa.me/917069369000" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#111] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C9A063] hover:text-white transition-all shadow-xl hover:shadow-2xl inline-block">
                Order Ahead
              </a>
            </m.div>

          </m.div>

          {/* Abstract Floating UI Elements for Depth — hidden on mobile for performance */}
          <m.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 top-1/4 w-96 h-96 bg-[#FAF9F6] rounded-full filter blur-[80px] -z-10 hidden md:block"
          />
          <m.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-10 bottom-1/4 w-[500px] h-[500px] bg-gradient-to-t from-[#fdfbf7] to-white rounded-full filter blur-[100px] -z-10 hidden md:block"
          />
        </section>

        {/* FEATURES / PHILOSOPHY SECTION */}
        <FeaturesBento />

        {/* REVIEWS SECTION */}
        <ReviewsSection />

        {/* THE TIBCO EXPERIENCE (NEW SHOWCASE COMPONENT) */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto text-center mb-8 px-6">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A063] mb-4 block">
              Spaces Designed For You
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111]">
              Our Locations
            </h2>
          </div>
          <LocationsShowcase />
        </section>

        {/* ABOUT US SECTION */}
        <AboutUs />

        {/* INTERACTIVE FULL MENU SECTION */}
        <InteractiveMenu />

        {/* GALLERY CAROUSEL */}
        <GalleryCarousel />

        {/* LOCATIONS SECTION */}
        <LocationsSection />

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  );
}