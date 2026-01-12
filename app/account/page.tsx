"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { User, ShoppingBag, Settings, LogOut, ChevronRight, Package, ShieldCheck } from "lucide-react";

const Page = () => {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+254 712 345 678",
        address: "123 Nairobi Street, Westlands",
        memberSince: "January 2025",
    };

    const orders = [
        {
            id: "1001",
            date: "JAN 05, 2026",
            status: "Delivered",
            total: "KES 6,497",
            items: 2,
            image: "/clothing-outline.png"
        },
        {
            id: "1002",
            date: "JAN 02, 2026",
            status: "Processing",
            total: "KES 3,897",
            items: 1,
            image: "/clothing-outline.png"
        }
    ];

    const [activeSection, setActiveSection] = useState("profile");
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleSave = () => {
        setIsEditing(false);
        alert("Profile updated successfully!");
    };

    const navItems = [
        { id: "profile", label: "PROFILE", icon: <User className="w-5 h-5" /> },
        { id: "orders", label: "ORDERS", icon: <ShoppingBag className="w-5 h-5" /> },
        { id: "settings", label: "SETTINGS", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <section className="min-h-screen py-16 sm:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16">
                    <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block">Dashboard</span>
                    <h1 className="text-5xl sm:text-7xl font-bold text-[#433A3F] tracking-tighter">MY ACCOUNT</h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-32 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`w-full flex items-center justify-between px-6 py-5 transition-all duration-300 border mb-2 ${activeSection === item.id
                                            ? "bg-[#433A3F] text-white border-[#433A3F]"
                                            : "bg-white text-gray-500 border-transparent hover:border-gray-100 hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        {item.icon}
                                        <span className="text-xs font-bold tracking-[0.2em]">{item.label}</span>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === item.id ? "rotate-90" : ""}`} />
                                </button>
                            ))}
                            <Link
                                href="/"
                                className="w-full flex items-center gap-4 px-6 py-5 text-red-500 hover:bg-red-50 transition-colors mt-8 border border-transparent hover:border-red-100"
                            >
                                <LogOut className="w-5 h-5" />
                                <span className="text-xs font-bold tracking-[0.2em]">LOGOUT</span>
                            </Link>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-9 bg-[#FAFAFA] border border-gray-100 p-8 sm:p-12 min-h-[600px]">
                        <AnimatePresence mode="wait">
                            {activeSection === "profile" && (
                                <motion.div
                                    key="profile"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
                                        <div className="flex items-center gap-8">
                                            <div className="w-24 h-24 bg-[#433A3F] flex items-center justify-center text-white text-3xl font-bold">
                                                {user.name.split(" ").map(n => n[0]).join("")}
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-bold text-[#433A3F] tracking-tight">{user.name}</h2>
                                                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mt-1">MEMBER SINCE {user.memberSince.toUpperCase()}</p>
                                            </div>
                                        </div>
                                        {!isEditing ? (
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="btn secondary-btn px-8 h-12"
                                            >
                                                EDIT PROFILE
                                            </button>
                                        ) : (
                                            <div className="flex gap-4">
                                                <button onClick={() => setIsEditing(false)} className="text-xs font-bold tracking-widest text-gray-400 hover:text-black transition-colors uppercase">CANCEL</button>
                                                <button onClick={handleSave} className="btn primary-btn px-8 h-12">SAVE CHANGES</button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                        {[
                                            { label: "FULL NAME", key: "name", type: "text" },
                                            { label: "EMAIL ADDRESS", key: "email", type: "email" },
                                            { label: "PHONE NUMBER", key: "phone", type: "tel" }
                                        ].map((field) => (
                                            <div key={field.key}>
                                                <label className="block text-[10px] font-bold tracking-[0.3em] text-gray-400 mb-4">{field.label}</label>
                                                {isEditing ? (
                                                    <input
                                                        type={field.type}
                                                        value={(formData as any)[field.key]}
                                                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                                        className="w-full bg-white border border-gray-200 px-4 py-4 focus:border-[#433A3F] outline-none transition-colors"
                                                    />
                                                ) : (
                                                    <p className="text-lg font-bold text-[#433A3F]">{(user as any)[field.key]}</p>
                                                )}
                                            </div>
                                        ))}
                                        <div className="md:col-span-2">
                                            <label className="block text-[10px] font-bold tracking-[0.3em] text-gray-400 mb-4">SHIPPING ADDRESS</label>
                                            {isEditing ? (
                                                <textarea
                                                    value={formData.address}
                                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                    rows={3}
                                                    className="w-full bg-white border border-gray-200 px-4 py-4 focus:border-[#433A3F] outline-none transition-colors"
                                                />
                                            ) : (
                                                <p className="text-lg font-bold text-[#433A3F]">{user.address}</p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeSection === "orders" && (
                                <motion.div
                                    key="orders"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold text-[#433A3F] tracking-tight mb-8">ORDER HISTORY</h2>
                                    {orders.map((order) => (
                                        <div key={order.id} className="bg-white border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-8 group">
                                            <div className="relative w-24 h-24 bg-gray-50 flex-shrink-0">
                                                <Image src={order.image} alt="" fill className="object-contain p-4 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
                                                <div>
                                                    <span className="block text-[10px] font-bold tracking-widest text-gray-400 mb-1 uppercase">Order #</span>
                                                    <span className="text-sm font-bold text-[#433A3F]">{order.id}</span>
                                                </div>
                                                <div>
                                                    <span className="block text-[10px] font-bold tracking-widest text-gray-400 mb-1 uppercase">Date</span>
                                                    <span className="text-sm font-bold text-[#433A3F]">{order.date}</span>
                                                </div>
                                                <div>
                                                    <span className="block text-[10px] font-bold tracking-widest text-gray-400 mb-1 uppercase">Status</span>
                                                    <span className={`text-[10px] font-bold px-2 py-1 inline-block ${order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                                                        {order.status.toUpperCase()}
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="block text-[10px] font-bold tracking-widest text-gray-400 mb-1 uppercase">Total</span>
                                                    <span className="text-sm font-bold text-[#433A3F]">{order.total}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeSection === "settings" && (
                                <motion.div
                                    key="settings"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-12"
                                >
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#433A3F] tracking-tight mb-8">PRIVACY & SECURITY</h2>
                                        <div className="space-y-6 bg-white p-8 border border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <ShieldCheck className="w-6 h-6 text-gray-400" />
                                                    <div>
                                                        <h4 className="text-sm font-bold text-[#433A3F]">TWO-FACTOR AUTHENTICATION</h4>
                                                        <p className="text-xs text-gray-400 font-medium">Additional security for your account</p>
                                                    </div>
                                                </div>
                                                <button className="text-[10px] font-bold tracking-widest text-[#433A3F] uppercase border-b border-[#433A3F]">ENABLE</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-gray-200">
                                        <h3 className="text-lg font-bold text-red-500 tracking-tight mb-4">DANGER ZONE</h3>
                                        <p className="text-gray-400 text-sm mb-6">Permanently delete your account and all associated data. This action cannot be undone.</p>
                                        <button className="btn secondary-btn border-red-200 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 h-12 px-8">DELETE ACCOUNT</button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
