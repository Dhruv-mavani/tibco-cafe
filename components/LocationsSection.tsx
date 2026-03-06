"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LOCATIONS = [
    {
        name: "Tibco Daily",
        address: "G12, Eco Commerz, Vesu Canal Rd, opp. Rajhans Zion",
        hours: "Open · Closes 11:30 pm",
        phone: "070693 69000",
        embed: "https://maps.google.com/maps?q=Tibco+Daily,+G12,+Eco+Commerz,+Vesu+Canal+Rd,+Surat&t=&z=15&ie=UTF8&iwloc=&output=embed",
        dirReq: "https://maps.app.goo.gl/kJEQFByvuWfmNThJ6"
    },
    {
        name: "Tibco",
        address: "g2, Anuvrat Dwar Junction, West) BRTS",
        hours: "Open · Closes 11:30 pm",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14884.433765491201!2d72.76853998715822!3d21.148082300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d004820df6f%3A0x63026ece05656e66!2stibco!5e0!3m2!1sen!2sin!4v1772789688591!5m2!1sen!2sin",
        dirReq: "https://maps.app.goo.gl/bLhzZYadFHNUtUKm8"
    },
    {
        name: "TIBCO PLUS",
        address: "G1, SNS ARISTA, opp. HAPPY RESIDENCY, near PRIME SHOPPERS",
        hours: "Open · Closes 11:30 pm",
        phone: "070963 69000",
        embed: "https://maps.google.com/maps?q=TIBCO+PLUS,+G1,+SNS+ARISTA,+Surat&t=&z=15&ie=UTF8&iwloc=&output=embed",
        dirReq: "https://maps.app.goo.gl/wAkQPpaJNPT3tmdq8"
    },
    {
        name: "Tibco Plus @Aspire",
        address: "Besides kia showroom, sangini aspire, 102-103, Rto road",
        hours: "Open · Closes 11:30 pm",
        embed: "https://maps.google.com/maps?q=Tibco+Plus+@Aspire,+sangini+aspire,+Surat&t=&z=15&ie=UTF8&iwloc=&output=embed",
        dirReq: "https://maps.app.goo.gl/ff6992PE985RC2ga7"
    }
];

export default function LocationsSection() {
    return (
        <section id="locations" className="py-32 px-6 md:px-20 bg-white relative z-20 border-t border-black/[0.05]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-[#111]">Find Us</h2>
                    <p className="text-[#444] max-w-xl mx-auto text-lg">Four unique spaces designed for clarity and connection.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {LOCATIONS.map((loc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-[#FAFAFA] rounded-3xl overflow-hidden shadow-lg border border-black/[0.03] flex flex-col"
                        >
                            {/* Map Embed */}
                            <div className="h-[250px] w-full bg-gray-200 relative grayscale-[50%] contrast-125 transition-all duration-500 hover:grayscale-0">
                                <iframe
                                    src={loc.embed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`${loc.name} Map`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Location Details */}
                            <div className="p-8 flex flex-col flex-grow justify-between bg-white">
                                <div>
                                    <h3 className="text-2xl font-black text-[#111] tracking-tight mb-2">{loc.name}</h3>
                                    <p className="text-[#444] mb-2 leading-relaxed">{loc.address}</p>
                                    <div className="flex flex-col gap-1 mb-6 text-sm text-[#777] font-medium">
                                        <span className="flex items-center gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            {loc.hours}
                                        </span>
                                        {loc.phone && (
                                            <span className="flex items-center gap-2">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                {loc.phone}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <a
                                    href={loc.dirReq}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full py-4 bg-[#111] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C9A063] transition-colors gap-2"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                                    Get Directions
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
