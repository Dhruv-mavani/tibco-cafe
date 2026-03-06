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
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111]">
                        The Tibco Standard.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {/* Bento Box 1 - Ethical Sourcing - Span 2 cols on MD */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 relative group rounded-[2rem] bg-[#FAFAFA] overflow-hidden p-10 flex flex-col justify-end border border-black/[0.03] hover:border-black/10 transition-colors shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                    >
                        {/* Background pattern or subtle gradient */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FAF9F6] to-[#C9A063]/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700 ease-out" />

                        <div className="relative z-10 w-full md:w-2/3 mt-16 md:mt-0">
                            <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center mb-6 text-white font-bold opacity-10">01</div>
                            <h3 className="text-3xl font-bold mb-4 text-[#111]">Ethical Sourcing</h3>
                            <p className="text-[#555] text-lg leading-relaxed">
                                We source purely organically grown beans directly from independent farmers. Every bean tells a story of sustainable agriculture and fair partnership, ensuring a brighter future for the communities that grow our coffee.
                            </p>
                        </div>

                        {/* Visual element */}
                        <motion.div
                            className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
                            whileHover={{ rotate: 90 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="w-48 h-48 border border-[#111]/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                <div className="w-32 h-32 border border-[#111]/10 rounded-full flex items-center justify-center">
                                    <div className="w-16 h-16 bg-gradient-to-tr from-[#C9A063] to-[#e4bc83] rounded-full shadow-lg" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Bento Box 2 - Precision Roasting */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group rounded-[2rem] bg-[#111] overflow-hidden p-10 flex flex-col justify-end text-white border border-white/10 shadow-xl"
                    >
                        {/* Grid Pattern Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 transition-opacity group-hover:opacity-40" />

                        <div className="relative z-10 mt-20">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white font-bold backdrop-blur-sm">02</div>
                            <h3 className="text-2xl font-bold mb-4">Precision Roasting</h3>
                            <p className="text-white/70 leading-relaxed text-sm">
                                Roasted in-house weekly to ensure absolute peak flavor profiles. We control every micro-variable to unlock the beans true potential.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Box 3 - Artisan Baking - Vertical Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:col-span-1 relative group rounded-[2rem] bg-white overflow-hidden p-10 flex flex-col border border-[#C9A063]/20 hover:border-[#C9A063]/50 transition-colors shadow-sm hover:shadow-lg"
                    >
                        {/* Aesthetic element */}
                        <div className="flex-1 w-full flex items-center justify-center mb-12 mt-8">
                            <motion.div
                                className="w-24 h-24 bg-[#C9A063] rounded-[2rem] rotate-12 group-hover:rotate-[24deg] group-hover:scale-110 transition-all duration-500 ease-out shadow-lg"
                            />
                            <motion.div
                                className="w-24 h-24 bg-[#111] rounded-full -ml-8 -mt-8 group-hover:-translate-y-4 group-hover:-translate-x-2 transition-all duration-500 ease-out z-10 shadow-xl border-4 border-white"
                            />
                        </div>

                        <div className="relative z-10 mt-auto">
                            <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center mb-4 text-white font-bold opacity-10">03</div>
                            <h3 className="text-2xl font-bold mb-2 text-[#111]">Artisan Baking</h3>
                            <p className="text-[#555] leading-relaxed text-sm">
                                Our signature bagels are hand-rolled, boiled, and baked fresh every single morning using local ingredients.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Box 4 - The Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="md:col-span-2 relative group rounded-[2rem] bg-gradient-to-r from-[#FAF9F6] to-white overflow-hidden p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border border-black/[0.03] hover:border-black/[0.08] transition-colors shadow-sm"
                    >
                        <div className="mb-6 sm:mb-0 pr-0 sm:pr-8">
                            <h3 className="text-2xl font-bold mb-2 text-[#111]">The Experience</h3>
                            <p className="text-[#555] max-w-md text-sm leading-relaxed">Every detail, from the ambient acoustics to the precise temperature of your cup, is designed with absolute intent to create the perfect café moment.</p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="w-16 h-16 shrink-0 rounded-full bg-[#111] text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#C9A063] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
