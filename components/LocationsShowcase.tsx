"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SHOWCASE_LOCATIONS = [
    {
        id: 1,
        name: "Tibco Daily",
        address: "G12, Eco Commerz, Vesu Canal Rd",
        images: [
            "/tibco daily images/1.jpg",
            "/tibco daily images/2.jpg",
            "/tibco daily images/3.jpg",
            "/tibco daily images/4.jpg",
            "/tibco daily images/5.jpg",
            "/tibco daily images/6.jpg",
            "/tibco daily images/7.jpg",
        ],
        themeColor: "from-black/80 to-transparent",
        href: "#locations"
    },
    {
        id: 2,
        name: "Tibco",
        address: "g2, Anuvrat Dwar Junction, West BRTS",
        images: [
            "/tibco images/1.jpg",
            "/tibco images/2.jpg",
            "/tibco images/3.jpg",
            "/tibco images/4.jpg",
            "/tibco images/5.jpg",
        ],
        themeColor: "from-[#C9A063]/90 to-black/20",
        href: "#locations"
    },
    {
        id: 3,
        name: "TIBCO PLUS",
        address: "G1, SNS ARISTA, opp. HAPPY RESIDENCY",
        images: [
            "/tibco plus images/1.jpg",
            "/tibco plus images/2.jpg",
            "/tibco plus images/3.jpg",
            "/tibco plus images/4.jpg",
            "/tibco plus images/5.jpg",
            "/tibco plus images/6.jpg",
            "/tibco plus images/7.jpg",
        ],
        themeColor: "from-[#111111]/90 to-black/40",
        href: "#locations"
    },
    {
        id: 4,
        name: "Tibco Plus @Aspire",
        address: "sangini aspire, 102-103, Rto road",
        images: [
            "/tibco plus @ aspire images/1.jpg",
            "/tibco plus @ aspire images/2.jpg",
            "/tibco plus @ aspire images/3.jpg",
            "/tibco plus @ aspire images/4.jpg",
            "/tibco plus @ aspire images/5.jpg",
            "/tibco plus @ aspire images/6.jpg",
            "/tibco plus @ aspire images/7.jpg",
        ],
        themeColor: "from-black/70 to-transparent",
        href: "#locations"
    }
];

export default function LocationsShowcase() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-play slideshow logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => prev + 1);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    // When nothing is hovered, everyone shares space equally (25% each)
    // When hovered, the active gets 55%, others get 15% each.
    const getWidth = (index: number) => {
        if (hoveredIndex === null) return "25%";
        if (hoveredIndex === index) return "55%";
        return "15%";
    };

    return (
        <section className="bg-white py-12 px-6 max-w-[1400px] mx-auto hidden md:block">
            <div className="w-full h-[600px] flex gap-4 rounded-[2rem] overflow-hidden p-4 bg-[#FAFAFA] border border-black/[0.03]">
                {SHOWCASE_LOCATIONS.map((loc, index) => {
                    const isHovered = hoveredIndex === index;
                    const isAnythingHovered = hoveredIndex !== null;

                    // Use modulo operator to loop through the image array for this specific location
                    const imageToShow = loc.images[currentImageIndex % loc.images.length];

                    return (
                        <motion.a
                            href={loc.href}
                            key={loc.id}
                            className="relative h-full rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-end group"
                            animate={{ width: getWidth(index) }}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} // smooth, slightly springy curve
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Slideshow */}
                            <div className="absolute inset-0 w-full h-full bg-[#111] overflow-hidden">
                                <AnimatePresence initial={false}>
                                    <motion.img
                                        key={imageToShow} // Key change triggers AnimatePresence
                                        src={imageToShow}
                                        alt={loc.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{
                                            opacity: 1,
                                            scale: isHovered ? 1.05 : 1,
                                            filter: isAnythingHovered && !isHovered ? "grayscale(80%) brightness(0.7)" : "grayscale(0%) brightness(1)"
                                        }}
                                        exit={{ opacity: 0 }}
                                        transition={{ opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: 0.8 }, filter: { duration: 0.8 } }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${loc.themeColor} z-10 transition-colors duration-700 pointer-events-none`} />

                            {/* Content overlay */}
                            <div className="relative z-20 p-8 w-full h-full flex flex-col justify-end pointer-events-none">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        y: isHovered ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="w-[500px]" // Force text container width so content doesn't break during animation
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 text-white`}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        </div>

                                        {/* Only show title fully when hovered or when nothing is hovered */}
                                        <AnimatePresence mode="wait">
                                            {(!isAnythingHovered || isHovered) && (
                                                <motion.h3
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -10 }}
                                                    className={`text-3xl font-black tracking-tight text-white whitespace-nowrap`}
                                                >
                                                    {loc.name}
                                                </motion.h3>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Address Details - strictly reveals on hover */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                            height: isHovered ? "auto" : 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className={`text-white/80 text-lg max-w-sm mt-4 leading-relaxed`}>
                                            {loc.address}
                                        </p>
                                        <div className="mt-6 flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                                            <span className="text-white">View Location</span>
                                            <svg className="text-white group-hover:translate-x-2 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}
