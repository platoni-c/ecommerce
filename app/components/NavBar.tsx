"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { Menu, X, ShoppingBag, User, Ruler } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NavBar = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "SHOP", href: "/shop", icon: <ShoppingBag className="w-5 h-5" /> },
        { name: "CUSTOM", href: "/custom", icon: <Ruler className="w-5 h-5" /> },
        { name: "ACCOUNT", href: "/account", icon: <User className="w-5 h-5" /> },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                        ? "bg-white/80 backdrop-blur-md py-4 border-gray-100 shadow-sm"
                        : "bg-transparent py-6 border-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-[#433A3F] tracking-[0.2em] uppercase">
                        Samuel&#39;s
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-row gap-10 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-xs font-bold tracking-[0.15em] text-[#433A3F] transition-colors hover:text-black group`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-[#433A3F] transition-all duration-300 group-hover:w-full group-hover:left-0 ${pathname === link.href ? "w-full left-0" : ""}`} />
                            </Link>
                        ))}

                        <Link
                            href="/cart"
                            className="relative text-[#433A3F] transition-transform hover:scale-110"
                        >
                            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#433A3F] text-white text-[10px] font-bold rounded-none w-4 h-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Icons */}
                    <div className="flex md:hidden items-center gap-6">
                        <Link href="/cart" className="relative text-[#433A3F]">
                            <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#433A3F] text-white text-[10px] font-bold rounded-none w-4 h-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#433A3F] focus:outline-none"
                        >
                            {isMenuOpen ? <X className="w-7 h-7 stroke-[1.5]" /> : <Menu className="w-7 h-7 stroke-[1.5]" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content jump */}
            <div className="h-24 md:h-28" />

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl font-bold text-[#433A3F] tracking-tighter hover:text-black transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-8 border-t border-gray-100"
                            >
                                <Link
                                    href="/cart"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-between text-2xl font-bold text-[#433A3F]"
                                >
                                    <span>CART ({cartCount})</span>
                                    <ShoppingBag className="w-8 h-8" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
