"use client"

import { motion } from "motion/react";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="py-24 bg-[#433A3F] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Background Decorative Element */}
                <motion.div
                    animate={{
                        rotate: [0, 90, 180, 270, 360],
                        scale: [1, 1.1, 1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-32 -right-32 w-96 h-96 border border-white/5 opacity-40 pointer-events-none"
                />

                <div className="relative z-10 text-center flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white/60 uppercase tracking-[0.4em] text-xs font-bold mb-6"
                    >
                        Start Your Journey
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl sm:text-7xl font-bold text-white tracking-tighter mb-10 max-w-3xl"
                    >
                        WEAR YOUR<br />IMAGINATION.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="/shop"
                            className="px-10 py-5 bg-white text-[#433A3F] font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors rounded-none text-sm"
                        >
                            Browse Shop
                        </Link>
                        <Link
                            href="/shop/tshirts"
                            className="px-10 py-5 border border-white text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-none text-sm"
                        >
                            Customize Now
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
