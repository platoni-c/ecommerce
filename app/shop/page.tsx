"use client"

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const categories = [
    { name: "SHIRTS", slug: "shirts", count: "24 Items", image: "/shirts.webp" },
    { name: "T-SHIRTS", slug: "tshirts", count: "48 Items", image: "/t-shirts.avif" },
    { name: "HOODIES", slug: "hoodies", count: "16 Items", image: "/hoodies.avif" },
    { name: "PANTS", slug: "pants", count: "12 Items", image: "/pants.avif" },
]

const Page = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <header className="mb-16">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold mb-4 block"
                >
                    Catalogue
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl sm:text-7xl font-bold text-[#433A3F] tracking-tighter"
                >
                    SHOP BY CATEGORY
                </motion.h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <Link href={`/shop/${cat.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-50 border border-gray-100">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold tracking-tight mb-1">{cat.name}</h3>
                                <p className="text-xs font-medium tracking-widest opacity-60 uppercase">{cat.count}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Quick Promo */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 p-12 bg-[#FAFAFA] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8"
            >
                <div className="max-w-md">
                    <h2 className="text-2xl font-bold text-[#433A3F] mb-4">CAN&#39;T FIND WHAT YOU&#39;RE LOOKING FOR?</h2>
                    <p className="text-gray-500 text-sm">Every piece in our shop is available for deep customization. Access our studio to make it yours.</p>
                </div>
                <Link href="/custom" className="btn secondary-btn border-[#433A3F] px-12 h-14">
                    OPEN STUDIO
                </Link>
            </motion.div>
        </main>
    )
}

export default Page
