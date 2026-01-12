"use client"

import Link from "next/link";
import Image from "next/image"
import { motion } from "motion/react";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white px-4">

            {/* Background Text Pattern */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-[0.02] flex items-center justify-center overflow-hidden">
                <span className="text-[30vw] font-bold leading-none tracking-tighter whitespace-nowrap">
                    SAMUEL&#39;S EXCLUSIVE
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-xs sm:text-sm uppercase tracking-[0.5em] text-gray-600 font-bold mb-8 block">
                        ESTABLISHED 2025
                    </span>
                    <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-[#433A3F] tracking-tight leading-[0.9] mb-10">
                        WEAR YOUR<br />
                        <span className="text-gray-200 hover:text-[#433A3F] transition-colors duration-700">IDENTITY.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-lg md:text-xl text-gray-500 max-w-2xl font-light leading-relaxed mb-12"
                >
                    Premium apparel for the visionaries. Customize every stitch or shop our curated signature collection. Quality meets absolute creative freedom.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Link href="/shop" className="btn primary-btn min-w-50 h-14">
                        EXPLORE SHOP
                    </Link>
                    <Link href="/custom" className="btn secondary-btn min-w-50 h-14">
                        DESIGN STUDIO
                    </Link>
                </motion.div>
            </div>

            {/* Floating Visual Element (Subtle) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-[10%] hidden lg:block opacity-20 contrast-[0.8]"
            >
                <Image
                    src="/clothing-outline.png"
                    alt=""
                    width={300}
                    height={300}
                    className="grayscale"
                />
            </motion.div>
        </section>
    )
}

export default Hero
