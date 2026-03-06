"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GalleryCarousel() {
    const images = Array.from({ length: 32 }, (_, i) => `/carousel/${i + 1}.PNG`);

    // Duplicate for infinite scrolling effect without gap
    const doubledImages = [...images, ...images];

    return (
        <section className="py-24 bg-[#FAF9F6] overflow-hidden relative border-t border-black/[0.05]">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes infiniteScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    animation: infiniteScroll 80s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />

            <div className="text-center mb-16 px-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] mb-4">Cafe Moments</h2>
                <p className="text-[#444] font-medium tracking-wide">A glimpse into our daily craft.</p>
            </div>

            <div className="relative w-full flex items-center overflow-hidden h-[300px] md:h-[400px]">
                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

                <div className="flex gap-6 px-6 w-max animate-infinite-scroll">
                    {doubledImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="w-[200px] md:w-[300px] h-[300px] md:h-[400px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-black/[0.04] bg-white group cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Cafe Moment ${(idx % 32) + 1}`}
                                width={300}
                                height={400}
                                loading="lazy"
                                quality={60}
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
