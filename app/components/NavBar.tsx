"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const NavBar = () => {
    const { cartCount } = useCart();

    return (
        <>
            <div className="flex items-center justify-between w-full py-6">
                <Link href="/" className="text-2xl font-bold text-[#433A3F] transition font-stretch-extra-expanded leading-2">
                    Samuel&#39;s
                </Link>
                <div className="flex flex-row gap-8 items-center">
                    <Link
                        href="/shop"
                        className="text-[#433A3F] font-medium hover:underline hover:underline-offset-8 transition"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/custom"
                        className="text-[#433A3F] font-medium hover:underline hover:underline-offset-8 transition"
                    >
                        Custom
                    </Link>
                    <Link
                        href="/account"
                        className="text-[#433A3F] font-medium hover:underline hover:underline-offset-8 transition"
                    >
                        Account
                    </Link>
                    <Link
                        href="/cart"
                        className="relative text-[#433A3F] font-medium hover:underline hover:underline-offset-8 transition flex items-center gap-2"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount > 9 ? "9+" : cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
            <hr className="border-gray-200" />
        </>
    );
};

export default NavBar;
