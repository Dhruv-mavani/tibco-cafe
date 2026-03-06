"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_DATA = {
    Coffee: [
        { name: 'Espresso', price: 80, desc: 'Iced/Hot' },
        { name: 'Americano', price: 100, desc: 'Iced/Hot' },
        { name: 'Manual Brew', price: 130, desc: 'Aeropress / V60 / Cold Brew' },
        { name: 'Caffè Latte', price: 130, desc: 'Iced/Hot' },
        { name: 'Cappuccino', price: 140, desc: '' },
        { name: 'Flat White', price: 140, desc: '' },
        { name: 'Caffè Mocha', price: 150, desc: 'Iced/Hot' },
        { name: 'Vietnamese', price: 150, desc: '' },
        { name: 'Classic Frappe', price: 150, desc: '' },
        { name: 'Affogato', price: 160, desc: '' },
        { name: 'Tonic / Ginger Ale', price: 190, desc: 'Espresso / Cold Brew / Summer Brew' },
    ],
    "Tea & Other": [
        { name: 'Matcha Latte', price: 180, desc: '' },
        { name: 'Matcha Coconut', price: 190, desc: '' },
        { name: 'Matcha Strawberry / Frappe', price: 190, desc: '' },
        { name: 'Hibiscus Tea', price: 150, desc: '' },
        { name: 'Hot Chocolate', price: 190, desc: 'Callebaut 55% Dark' },
        { name: 'Cookie Shake', price: 190, desc: 'Biscoff / Chocolate' },
        { name: 'Cascara Fizz', price: 190, desc: '' },
    ],
    Bagels: [
        { name: 'Classic Creamcheese', price: 180, desc: '' },
        { name: 'Harissa Creamcheese', price: 200, desc: '' },
        { name: 'Jalapeño Creamcheese', price: 200, desc: '' },
        { name: 'Pesto & Creamcheese', price: 220, desc: '' },
        { name: 'Blueberry Creamcheese', price: 220, desc: '' },
        { name: 'Bagel Sandwich', price: 250, desc: 'Daily special' },
        { name: 'PB & J Bagel', price: 160, desc: '' },
    ],
    Sandwiches: [
        { name: 'Corn & Spinach Sourdough', price: 250, desc: '' },
        { name: 'Harissa Mozzarella Sourdough', price: 250, desc: '' },
        { name: 'Guacamole Chipotle Sourdough', price: 250, desc: '' },
        { name: 'Classic Baguette Sandwich', price: 250, desc: '12:00 pm onwards' },
        { name: 'Red Pizza (Pizza Napoletana)', price: 380, desc: 'Fresh Mozzarella, Parmesan, Basil, Tomato Sauce' },
        { name: 'Salad', price: 250, desc: '12:00 pm onwards' },
    ],
    "Pastries & Desserts": [
        { name: 'Classic Butter Croissant', price: 160, desc: '' },
        { name: 'Almond Delight Croissant', price: 180, desc: '' },
        { name: 'Nutella Chocolate Croissant', price: 200, desc: '' },
        { name: 'CookieDough / Cream Cheese Croissant', price: 220, desc: '' },
        { name: 'Chocolate Babka', price: 180, desc: '' },
        { name: 'Triple/Butter/Mint Chocolate Cookies', price: 100, desc: 'Starting from 100' },
        { name: 'Chunky S\'mores Cookies', price: 160, desc: '' },
        { name: 'Oreo Cream / Strawberry Matcha Cookies', price: 150, desc: '' },
        { name: 'Banana Bread', price: 140, desc: '' },
        { name: 'Barbie / Oreo Blondie', price: 150, desc: '' },
        { name: 'BourBon Brownie', price: 150, desc: '' },
    ]
};

type Category = keyof typeof MENU_DATA;

export default function InteractiveMenu() {
    const [activeTab, setActiveTab] = useState<Category>("Coffee");

    const categories = Object.keys(MENU_DATA) as Category[];

    return (
        <section id="menu" className="py-32 px-6 md:px-20 bg-white relative z-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-[#111]">Our Menu</h2>
                    <p className="text-[#666] max-w-xl mx-auto text-lg">Meticulously sourced, crafted with absolute intent.</p>
                    <p className="text-[#888] text-xs mt-3 font-bold uppercase tracking-[0.2em]">* Prices may differ strictly based on location</p>
                </div>

                {/* Categories Tab Bar */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-black/[0.05] pb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors relative pb-2 ${activeTab === category ? "text-[#C9A063]" : "text-[#111111]/40 hover:text-[#111]"
                                }`}
                        >
                            {category}
                            {activeTab === category && (
                                <motion.div
                                    layoutId="menu-underline"
                                    className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-[#C9A063]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {MENU_DATA[activeTab].map((item, idx) => (
                                <div key={idx} className="group relative border-b border-black/[0.03] pb-6 flex flex-col justify-between hover:border-black/20 transition-colors">
                                    <div>
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="text-xl font-bold text-[#111] leading-tight pr-4">{item.name}</h4>
                                            <span className="text-[#C9A063] font-bold text-lg whitespace-nowrap">₹ {item.price}</span>
                                        </div>
                                        {item.desc && (
                                            <p className="text-[#777] text-sm uppercase tracking-wide font-medium">{item.desc}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
