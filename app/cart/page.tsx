"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();
    const router = useRouter();
    const [showClearConfirm, setShowClearConfirm] = useState(false);

    const KES_EXCHANGE_RATE = 130;

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        // Navigate to checkout page (to be implemented)
        alert("Checkout functionality coming soon!");
    };

    const handleClearCart = () => {
        clearCart();
        setShowClearConfirm(false);
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-sm p-12 border border-gray-100">
                        <div className="mb-6">
                            <svg
                                className="w-24 h-24 mx-auto text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-[#433A3F] mb-4">
                            Your Cart is Empty
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Looks like you haven&#39;t added anything to your cart yet.
                        </p>
                        <Link
                            href="/shop/hoodies"
                            className="inline-block btn primary-btn hover:opacity-90 transition shadow-lg"
                        >
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-5xl font-bold text-[#433A3F] mb-2 tracking-tight">
                            Shopping Cart
                        </h1>
                        <p className="text-lg text-gray-600">
                            {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
                        </p>
                    </div>
                    <button
                        onClick={() => setShowClearConfirm(true)}
                        className="text-red-600 hover:text-red-700 font-medium transition"
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-sm p-6 border border-gray-100 transition-colors"
                            >
                                <div className="flex gap-6">
                                    {/* Product Image */}
                                    <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#433A3F] mb-2">
                                                {item.name}
                                            </h3>
                                            <div className="flex gap-4 text-sm text-gray-600 mb-3">
                                                {item.size && (
                                                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                                                        Size: {item.size}
                                                    </span>
                                                )}
                                                {item.color && (
                                                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                                                        Color: {item.color}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-2xl font-bold text-[#433A3F]">
                                                KES {(item.price * KES_EXCHANGE_RATE).toLocaleString()}
                                            </p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-[#433A3F] hover:bg-gray-50 transition flex items-center justify-center font-bold text-lg"
                                                >
                                                    −
                                                </button>
                                                <span className="w-12 text-center font-semibold text-lg">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-[#433A3F] hover:bg-gray-50 transition flex items-center justify-center font-bold text-lg"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-600 hover:text-red-700 font-medium transition flex items-center gap-2"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-sm p-8 border border-gray-100 sticky top-8">
                            <h2 className="text-2xl font-bold text-[#433A3F] mb-6">
                                Order Summary
                            </h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal ({cartCount} items)</span>
                                    <span className="font-semibold">
                                        KES {(cartTotal * KES_EXCHANGE_RATE).toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Tax (16%)</span>
                                    <span className="font-semibold">
                                        KES {(cartTotal * KES_EXCHANGE_RATE * 0.16).toLocaleString()}
                                    </span>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex justify-between text-xl font-bold text-[#433A3F]">
                                        <span>Total</span>
                                        <span>
                                            KES {(cartTotal * KES_EXCHANGE_RATE * 1.16).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full btn primary-btn hover:opacity-90 transition shadow-lg mb-4"
                            >
                                Proceed to Checkout
                            </button>

                            <Link
                                href="/shop"
                                className="block text-center text-[#433A3F] hover:underline font-medium"
                            >
                                Continue Shopping
                            </Link>

                            {/* Trust Badges */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Secure checkout</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Free shipping on all orders</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>30-day return policy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clear Cart Confirmation Modal */}
            {showClearConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-sm p-8 max-w-md w-full">
                        <h3 className="text-2xl font-bold text-[#433A3F] mb-4">
                            Clear Cart?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to remove all items from your cart? This action cannot be undone.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowClearConfirm(false)}
                                className="flex-1 btn secondary-btn hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleClearCart}
                                className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
