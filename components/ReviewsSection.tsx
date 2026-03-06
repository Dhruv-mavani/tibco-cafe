"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const reviews = [
    {
        name: "Gautam Surana",
        rating: 5,
        date: "1 month ago",
        text: "Tried classic cold coffee! Quick service, good taste, small and nice set up. It was taken away and i got my coffee within 2 mins. Enjoyed the overall experience. Best wishes for your success",
        location: "Tibco"
    },
    {
        name: "Himay Jariwala",
        rating: 5,
        date: "1 month ago",
        text: "Quick ,eazy to go. Serves the best tripple chocolate cookies and specally corn and spinech sandwich. Also the Cream Cheese Bagel is something which is a must try.",
        location: "Tibco Daily"
    },
    {
        name: "Niel K",
        rating: 5,
        date: "3 weeks ago",
        text: "Coffee is exceptionally good and the classic baguette sandwich was beyond our expectations.If you're a coffee lover, this café is a must-visit! Highly recommend for anyone looking for a great coffee experience!",
        location: "Tibco Plus"
    },
    {
        name: "Sneha Patel",
        rating: 5,
        date: "1 week ago",
        text: "This is my go-to spot now. The cold brew is perfection and their freshly baked croissants melt in your mouth. The team is always so friendly and energetic!",
        location: "Tibco Daily"
    },
    {
        name: "Kavya Mehta",
        rating: 5,
        date: "2 months ago",
        text: "Tried Tibco for the first time and I'm already hooked. The Jalepeno Cream Cheese bagel is insane. Love the vibe, it feels like a premium experience.",
        location: "Tibco Plus @ Aspire"
    },
    {
        name: "Ananya Desai",
        rating: 5,
        date: "3 weeks ago",
        text: "Such a cute cafe with genuinely good food. The iced latte was smooth and not too sweet. Staff is warm and super helpful. Highly recommend for a quick bite!",
        location: "Tibco"
    },
    {
        name: "Parth Kheni",
        rating: 5,
        date: "5 days ago",
        text: "Best QSR experience in the city. The food is consistently fresh and the coffee is always spot-on, and the ordering process is seamless. Will recommend to anyone who loves coffee.",
        location: "Tibco Plus"
    },
    {
        name: "Meera Shah",
        rating: 5,
        date: "2 weeks ago",
        text: "I brought my friends here and everyone was blown away. The menu has something for everyone and the quality never dips. The Taylor Swift playlist is a bonus 😂",
        location: "Tibco Daily"
    },
    {
        name: "Nisarg Jariwala",
        rating: 5,
        date: "2 weeks ago",
        text: "A perfect cost to quality cafe for workaholics. It delivers the ambience and vibe of a cafe flawlessly where one can pay to enjoy the space around. Their coffee and food is good and simple.",
        location: "Tibco Plus @ Aspire"
    },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#FBBC04" : "none"} stroke={filled ? "#FBBC04" : "#ddd"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
    </svg>
);

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

export default function ReviewsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const reviewsPerPage = 3;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const nextPage = useCallback(() => setActiveIndex((prev) => (prev + 1) % totalPages), [totalPages]);
    const prevPage = () => setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);

    // Auto-play carousel
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(nextPage, AUTO_PLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [isPaused, nextPage]);

    const currentReviews = reviews.slice(
        activeIndex * reviewsPerPage,
        activeIndex * reviewsPerPage + reviewsPerPage
    );

    return (
        <section className="py-32 px-6 md:px-20 bg-[#FAFAFA] relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
                >
                    <div>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A063] mb-4 block">
                            What People Say
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111]">
                            Our Reviews.
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Google Rating Badge */}
                        <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-black/5">
                            <GoogleIcon />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <span className="text-lg font-black text-[#111]">4.6</span>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled={i <= 5} />)}
                                    </div>
                                </div>
                                <span className="text-[10px] text-[#999] font-medium">Google Reviews</span>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex gap-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevPage}
                                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#111] hover:text-white hover:border-transparent transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextPage}
                                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#111] hover:text-white hover:border-transparent transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Reviews Grid */}
                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {currentReviews.map((review, i) => (
                                <motion.div
                                    key={`${activeIndex}-${i}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group relative bg-white rounded-[1.5rem] p-8 border border-black/[0.04] hover:border-[#C9A063]/30 transition-all duration-500 shadow-sm hover:shadow-lg cursor-default"
                                >
                                    {/* Quote Mark */}
                                    <div className="absolute top-6 right-8 text-6xl font-serif text-[#C9A063]/10 leading-none select-none">&ldquo;</div>

                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-5">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <StarIcon key={s} filled={s <= review.rating} />
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-[#444] text-sm leading-relaxed mb-8 relative z-10">
                                        &ldquo;{review.text}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5">
                                        <div className="flex items-center gap-3">
                                            {/* Avatar Initial */}
                                            <div className="w-10 h-10 rounded-full bg-[#111] text-white flex items-center justify-center text-sm font-bold group-hover:bg-[#C9A063] transition-colors duration-500">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-[#111]">{review.name}</p>
                                                <p className="text-[10px] text-[#999]">{review.date}</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#C9A063]/60">{review.location}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Page Dots with Progress */}
                <div className="flex justify-center gap-2 mt-12">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 relative overflow-hidden ${i === activeIndex ? 'w-10 bg-black/10' : 'w-2 bg-black/10 hover:bg-black/20'}`}
                        >
                            {i === activeIndex && !isPaused && (
                                <motion.div
                                    className="absolute inset-0 bg-[#C9A063] rounded-full origin-left"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                                    key={`progress-${activeIndex}`}
                                />
                            )}
                            {i === activeIndex && isPaused && (
                                <div className="absolute inset-0 bg-[#C9A063] rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
