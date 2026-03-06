"use client";

import { motion } from 'framer-motion';
import StaffCard from './StaffCard';

const staffMembers = [
    {
        name: "The Boss",
        role: "Founder",
        description: "This is the guy we call Boss!",
        imageUrl: "/staff-avatars/7.png",
        realImageUrl: "/staff-real/7.jpeg"
    },
    {
        name: "The Manager",
        role: "Chaos Coordinator",
        description: "Managing all the CHAOS (lowkey part of it as well)! Ps: always bad with accounts.",
        imageUrl: "/staff-avatars/8.png",
        realImageUrl: "/staff-real/8.jpeg"
    },
    {
        name: "The DJ",
        role: "Resident Swiftie",
        description: "This is who blasts Taylor Swift in the Cafe!",
        imageUrl: "/staff-avatars/1.png",
        realImageUrl: "/staff-real/1.jpeg"
    },
    {
        name: "The Greeter",
        role: "First Impression",
        description: "This is who greets you with a smile.",
        imageUrl: "/staff-avatars/2.png",
        realImageUrl: "/staff-real/2.jpeg"
    },
    {
        name: "The Baker",
        role: "Pastry Chef",
        description: "This is who's baking all the goodies in-house!",
        imageUrl: "/staff-avatars/3.png",
        realImageUrl: "/staff-real/3.jpeg"
    },
    {
        name: "The Memory",
        role: "Order Expert",
        description: "Always remembers your order! Also hates Taylor Swift and blasts Kanye 🙄",
        imageUrl: "/staff-avatars/4.png",
        realImageUrl: "/staff-real/4.jpeg"
    },
    {
        name: "The Chatter",
        role: "Customer Success",
        description: "This is who's chatting you up while we get your order ready!",
        imageUrl: "/staff-avatars/5.png",
        realImageUrl: "/staff-real/5.jpeg"
    },
    {
        name: "The Maven",
        role: "Content Creator",
        description: "This is who's posting all the content (this one as well 😏)",
        imageUrl: "/staff-avatars/6.png",
        realImageUrl: "/staff-real/6.jpeg"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
};

export default function AboutUs() {
    return (
        <section id="about-us" className="py-32 px-6 md:px-20 bg-white relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A063] mb-4 block">
                        Our People
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111]">
                        Meet the Team
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {staffMembers.map((member, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <StaffCard {...member} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
