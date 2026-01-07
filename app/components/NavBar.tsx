"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { Menu, X, ShoppingBag, User, Ruler } from "lucide-react";

const NavBar = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Shop", href: "/shop", icon: <ShoppingBag className="w-5 h-5" /> },
        { name: "Custom", href: "/custom", icon: <Ruler className="w-5 h-5" /> },
        { name: "Account", href: "/account", icon: <User className="w-5 h-5" /> },
    ];

    return (
        <nav className="relative z-10">
            <div className="flex items-center justify-between w-full py-6">
                <Link href="/" className="text-2xl font-bold text-[#433A3F] transition font-stretch-extra-expanded leading-2 uppercase tracking-widest">
                    Samuel&#39;s
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-row gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[#433A3F] font-medium hover:underline hover:underline-offset-8 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/cart"
                        className="relative text-[#433A3F] font-medium hover:underline hover:underline-offset-8 transition flex items-center gap-2"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount > 9 ? "9+" : cartCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Icons */}
                <div className="flex md:hidden items-center gap-4">
                    <Link href="/cart" className="relative text-[#433A3F]">
                        <ShoppingBag className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#433A3F] p-2"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="flex flex-col p-4 gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 p-3 text-lg font-medium text-[#433A3F] hover:bg-gray-50 rounded-lg transition"
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
            <hr className="border-gray-200 mb-10" />
        </nav>
    );
};

export default NavBar;
