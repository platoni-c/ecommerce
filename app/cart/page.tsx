"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

const Page = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();
    const [showClearConfirm, setShowClearConfirm] = useState(false);

    const KES_EXCHANGE_RATE = 130;

    const handleCheckout = () => {
        if (cart.length === 0) return;
        alert("Checkout functionality coming soon!");
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <ShoppingBag className="w-16 h-16 mx-auto text-gray-200 mb-6" />
                    <h1 className="text-4xl font-bold text-[#433A3F] mb-4 tracking-tighter">YOUR CART IS EMPTY</h1>
                    <p className="text-gray-500 mb-10 max-w-xs mx-auto">Discover our collection and find something that suits your style.</p>
                    <Link href="/shop" className="btn primary-btn px-12 py-4">
                        START SHOPPING
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex items-end justify-between mb-12 border-b border-gray-100 pb-8">
                    <div>
                        <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block">Bag</span>
                        <h1 className="text-5xl font-bold text-[#433A3F] tracking-tighter">SHOPPING CART</h1>
                    </div>
                    <button
                        onClick={() => setShowClearConfirm(true)}
                        className="text-xs font-bold tracking-widest text-red-500 hover:text-red-700 transition-colors uppercase pb-2"
                    >
                        Clear All
                    </button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Cart Items */}
                    <div className="lg:col-span-8 space-y-8">
                        {cart.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative flex flex-col sm:flex-row gap-8 pb-8 border-b border-gray-100 last:border-0"
                            >
                                <div className="relative aspect-[3/4] w-full sm:w-40 bg-gray-50 overflow-hidden border border-gray-100">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-4 mix-blend-multiply"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col justify-between py-2">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-[#433A3F] tracking-tight group-hover:text-black transition-colors">
                                                {item.name}
                                            </h3>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-300 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                                            {item.size && <span>Size: {item.size}</span>}
                                            {item.color && <span>Color: {item.color}</span>}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-8">
                                        <div className="flex items-center border border-gray-200">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition"
                                            >
                                                <Minus className="w-3 h-3 text-gray-400" />
                                            </button>
                                            <span className="w-10 text-center text-sm font-bold text-[#433A3F]">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition"
                                            >
                                                <Plus className="w-3 h-3 text-gray-400" />
                                            </button>
                                        </div>
                                        <p className="text-xl font-bold text-[#433A3F]">
                                            KES {(item.price * KES_EXCHANGE_RATE).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-[#FAFAFA] border border-gray-100 p-10 sticky top-32">
                            <h2 className="text-2xl font-bold text-[#433A3F] tracking-tight mb-10">SUMMARY</h2>

                            <div className="space-y-6 mb-10 text-sm font-medium">
                                <div className="flex justify-between text-gray-500">
                                    <span className="uppercase tracking-widest">Subtotal</span>
                                    <span className="text-[#433A3F]">
                                        KES {(cartTotal * KES_EXCHANGE_RATE).toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span className="uppercase tracking-widest">Shipping</span>
                                    <span className="text-green-600 font-bold uppercase tracking-widest">Complimentary</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span className="uppercase tracking-widest">Tax (16%)</span>
                                    <span className="text-[#433A3F]">
                                        KES {(cartTotal * KES_EXCHANGE_RATE * 0.16).toLocaleString()}
                                    </span>
                                </div>
                                <div className="border-t border-gray-200 pt-8 mt-4">
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-lg font-bold text-[#433A3F] uppercase tracking-tighter">Total</span>
                                        <span className="text-3xl font-bold text-[#433A3F] tracking-tighter">
                                            KES {(cartTotal * KES_EXCHANGE_RATE * 1.16).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full btn primary-btn h-16 flex items-center justify-between px-8"
                            >
                                <span>CHECKOUT</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <Link
                                href="/shop"
                                className="block text-center mt-6 text-xs font-bold tracking-widest text-gray-400 hover:text-[#433A3F] transition-colors uppercase"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clear Cart Modal */}
            <AnimatePresence>
                {showClearConfirm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white p-12 max-w-md w-full border border-gray-100"
                        >
                            <h3 className="text-3xl font-bold text-[#433A3F] tracking-tighter mb-4">CLEAR BAG?</h3>
                            <p className="text-gray-500 mb-10 leading-relaxed">Are you certain you want to remove all items? This action is permanent.</p>
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => {
                                        clearCart();
                                        setShowClearConfirm(false);
                                    }}
                                    className="btn primary-btn h-14 bg-red-600 border-red-600 hover:bg-black hover:border-black"
                                >
                                    CLEAR ALL ITEMS
                                </button>
                                <button
                                    onClick={() => setShowClearConfirm(false)}
                                    className="btn secondary-btn h-14"
                                >
                                    CANCEL
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Page;
