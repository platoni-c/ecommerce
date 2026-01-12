"use client"

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const COLLECTIONS = [
    { title: "SHIRTS", link: "/shop/shirts", image: "/shirts.webp" },
    { title: "T-SHIRTS", link: "/shop/tshirts", image: "/t-shirts.avif" },
    { title: "HOODIES", link: "/shop/hoodies", image: "/hoodies.avif" },
    { title: "PANTS", link: "/shop/pants", image: "/pants.avif" },
];

const Featured = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section className="relative py-24 bg-white overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium mb-4 block">
                        Our Collections
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-[#433A3F]">
                        CURATED SELECTION
                    </h2>
                </motion.div>

                <div className="flex flex-col border-t border-gray-100">
                    {COLLECTIONS.map((item, index) => (
                        <Link
                            key={item.title}
                            href={item.link}
                            className="group relative border-b border-gray-100 py-10 sm:py-16 flex items-center justify-between"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.h3
                                initial={{ x: 0 }}
                                whileHover={{ x: 20 }}
                                className="text-5xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-gray-200 group-hover:text-[#433A3F] transition-colors duration-500"
                            >
                                {item.title}
                            </motion.h3>

                            <div className="hidden sm:block">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 45 }}
                                    className="w-12 h-12 border border-[#433A3F] flex items-center justify-center group-hover:bg-[#433A3F] group-hover:text-white transition-all duration-300"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Hover Floating Preview */}
            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        key="hover-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed pointer-events-none z-50 w-64 h-80 overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl rounded-none"
                        style={{
                            left: mousePos.x + 20,
                            top: mousePos.y - 150,
                        }}
                    >
                        <Image
                            src={COLLECTIONS[hoveredIndex].image}
                            alt={COLLECTIONS[hoveredIndex].title}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Featured;
