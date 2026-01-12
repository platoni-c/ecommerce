"use client"

import Link from "next/link"
import { motion } from "motion/react";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-500 mt-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">

                    {/* Brand Section */}
                    <div className="md:col-span-4 max-w-sm">
                        <Link href="/" className="text-3xl font-bold text-[#433A3F] tracking-[0.2em] uppercase mb-8 block">
                            Samuel&#39;s
                        </Link>
                        <p className="text-sm font-medium leading-relaxed mb-10 text-gray-400">
                            A contemporary fashion studio dedicated to purity, quality, and individual expression. Every piece is a canvas for your vision.
                        </p>
                        <div className="flex gap-6">
                            {['INSTAGRAM', 'X', 'FACEBOOK'].map(social => (
                                <a key={social} href="#" className="text-[10px] font-bold tracking-widest hover:text-black transition-colors uppercase underline underline-offset-4">{social}</a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
                        <div>
                            <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#433A3F] uppercase mb-8">Collection</h4>
                            <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
                                <li><Link href="/shop/shirts" className="hover:text-black transition-colors">Shirts</Link></li>
                                <li><Link href="/shop/tshirts" className="hover:text-black transition-colors">T-Shirts</Link></li>
                                <li><Link href="/shop/hoodies" className="hover:text-black transition-colors">Hoodies</Link></li>
                                <li><Link href="/shop/pants" className="hover:text-black transition-colors">Pants</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#433A3F] uppercase mb-8">Studio</h4>
                            <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
                                <li><Link href="/how-custom-designs-work" className="hover:text-black transition-colors">Process</Link></li>
                                <li><Link href="/design-guidelines" className="hover:text-black transition-colors">Guidelines</Link></li>
                                <li><Link href="/faq" className="hover:text-black transition-colors">Questions</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#433A3F] uppercase mb-8">Legal</h4>
                            <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
                                <li><Link href="/privacy-policy" className="hover:text-black transition-colors">Privacy</Link></li>
                                <li><Link href="/terms" className="hover:text-black transition-colors">Terms</Link></li>
                                <li><Link href="/shipping-returns" className="hover:text-black transition-colors">Shipping</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900">
                    <p>© {new Date().getFullYear()} SAMUEL&#39;S. REGISTERED TRADEMARK.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span>MADE IN KENYA</span>
                        <span className="text-gray-100">|</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
