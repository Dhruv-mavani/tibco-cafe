"use client";

import { motion } from 'framer-motion';

export default function FeaturesBento() {
    return (
        <section id="story" className="py-32 px-6 md:px-20 bg-white relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A063] mb-4 block">
                        Why Tibco
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111]">
                        The QSR Standard.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                    {/* Bento Box 1 - Fast & Fresh - Span 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 relative group rounded-[2rem] bg-[#FAFAFA] overflow-hidden p-10 md:p-12 flex flex-col justify-end border border-black/[0.03] hover:border-black/10 transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                    >
                        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#FAF9F6] to-[#C9A063]/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700 ease-out" />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            <div className="md:w-2/3">
                                <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C9A063] transition-colors duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[#111]">Fast & Fresh</h3>
                                <p className="text-[#555] text-lg leading-relaxed">
                                    We believe quick service shouldn&apos;t mean compromising on quality. Every meal and beverage is prepared rapidly with premium ingredients to fuel your day instantly.
                                </p>
                            </div>
                            <div className="hidden md:flex items-center gap-3 text-[#C9A063] font-bold text-sm tracking-widest uppercase shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span>Explore</span>
                                <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></motion.svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Box 2 - Signature Quality */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="relative group rounded-[2rem] bg-[#111] overflow-hidden p-10 md:p-12 flex flex-col justify-between text-white border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 group-hover:opacity-50 transition-opacity" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C9A063] transition-colors duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" /></svg>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3 className="text-2xl font-bold mb-4">Signature Quality</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                Consistent, high-quality flavor in every bite and sip. We maintain rigorous standards across all our locations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Box 3 - Baked Daily */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group rounded-[2rem] bg-white overflow-hidden p-10 md:p-12 flex flex-col justify-between border border-[#C9A063]/20 hover:border-[#C9A063]/50 transition-all duration-500 shadow-sm hover:shadow-lg"
                    >
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[#C9A063]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C9A063] transition-colors duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A063" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-500"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" /></svg>
                            </div>

                            {/* Decorative counter */}
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-5xl font-black text-[#C9A063]">365</span>
                                <span className="text-sm font-medium text-[#999]">days / year</span>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3 className="text-2xl font-bold mb-2 text-[#111]">Freshly Prepared</h3>
                            <p className="text-[#555] leading-relaxed text-sm">
                                Our signature bagels and pastries are baked fresh every single morning, ensuring the perfect texture and taste.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Box 4 - Seamless Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className="md:col-span-2 relative group rounded-[2rem] bg-gradient-to-r from-[#FAF9F6] to-white overflow-hidden p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-black/[0.03] hover:border-black/[0.08] transition-all duration-500 shadow-sm"
                    >   <a href="https://wa.me/917069369000" target="_blank">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#C9A063] transition-colors duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m9 12 2 2 4-4" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-[#111]">Seamless Experience</h3>
                                    <p className="text-[#555] max-w-md text-sm leading-relaxed">
                                        From rapid ordering to instant pickup, every touchpoint is designed for ultimate convenience without sacrificing the welcoming atmosphere you love.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://wa.me/917069369000" target="blank">
                            <motion.div
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-14 h-14 shrink-0 rounded-full bg-[#111] text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#C9A063] transition-colors duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </motion.div>
                        </a>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
