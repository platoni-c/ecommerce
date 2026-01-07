"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
            date: "2026-01-05",
            status: "Delivered",
            total: "KES 6,497",
            items: 2,
            image: "/clothing-outline.png"
        },
        {
            id: "1002",
            date: "2026-01-02",
            status: "Processing",
            total: "KES 3,897",
            items: 1,
            image: "/clothing-outline.png"
        },
        {
            id: "1003",
            date: "2025-12-28",
            status: "Cancelled",
            total: "KES 2,597",
            items: 1,
            image: "/clothing-outline.png"
        },
    ];

    const [activeSection, setActiveSection] = useState("profile");
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleSave = () => {
        // Save logic would go here
        setIsEditing(false);
        alert("Profile updated successfully!");
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Delivered":
                return "bg-green-100 text-green-800";
            case "Processing":
                return "bg-blue-100 text-blue-800";
            case "Cancelled":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <section className="min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-[#433A3F] mb-4 tracking-tight">
                        My Account
                    </h1>
                    <p className="text-lg text-gray-600">
                        Manage your profile, view your orders, and update your settings
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-sm p-6 border border-gray-100 sticky top-8">
                            <div className="text-center mb-6 pb-6 border-b border-gray-200">
                                <div className="w-24 h-24 bg-[#433A3F] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                                    {user.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <h3 className="font-semibold text-lg text-[#433A3F]">{user.name}</h3>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>

                            <nav className="space-y-2">
                                <button
                                    onClick={() => setActiveSection("profile")}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${activeSection === "profile"
                                        ? "bg-[#433A3F] text-white"
                                        : "hover:bg-gray-50 text-gray-700"
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Profile
                                </button>
                                <button
                                    onClick={() => setActiveSection("orders")}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${activeSection === "orders"
                                        ? "bg-[#433A3F] text-white"
                                        : "hover:bg-gray-50 text-gray-700"
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Orders
                                </button>
                                <button
                                    onClick={() => setActiveSection("settings")}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${activeSection === "settings"
                                        ? "bg-[#433A3F] text-white"
                                        : "hover:bg-gray-50 text-gray-700"
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Settings
                                </button>
                                <Link
                                    href="/"
                                    className="w-full text-left px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all flex items-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-sm p-8 border border-gray-100 min-h-125">
                            {/* Profile Section */}
                            {activeSection === "profile" && (
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-3xl font-bold text-[#433A3F]">Profile Information</h2>
                                        {!isEditing ? (
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="btn secondary-btn hover:bg-gray-50 transition"
                                            >
                                                Edit Profile
                                            </button>
                                        ) : (
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => setIsEditing(false)}
                                                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={handleSave}
                                                    className="btn primary-btn hover:opacity-90 transition"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-lg text-gray-900">{user.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            {isEditing ? (
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-lg text-gray-900">{user.email}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            {isEditing ? (
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-lg text-gray-900">{user.phone}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Member Since
                                            </label>
                                            <p className="text-lg text-gray-900">{user.memberSince}</p>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Address
                                            </label>
                                            {isEditing ? (
                                                <textarea
                                                    value={formData.address}
                                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                    rows={3}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-lg text-gray-900">{user.address}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Orders Section */}
                            {activeSection === "orders" && (
                                <div>
                                    <h2 className="text-3xl font-bold text-[#433A3F] mb-6">Order History</h2>

                                    <div className="space-y-4">
                                        {orders.map((order) => (
                                            <div
                                                key={order.id}
                                                className="border border-gray-200 rounded-sm p-6 transition-colors"
                                            >
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="relative w-20 h-20 bg-gray-100 rounded-sm overflow-hidden">
                                                            <Image
                                                                src={order.image}
                                                                alt="Order"
                                                                fill
                                                                className="object-contain p-2"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-lg text-[#433A3F]">
                                                                Order #{order.id}
                                                            </p>
                                                            <p className="text-sm text-gray-600">{order.date}</p>
                                                            <p className="text-sm text-gray-600">{order.items} item(s)</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xl font-bold text-[#433A3F] mb-2">
                                                            {order.total}
                                                        </p>
                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 pt-4 border-t border-gray-200">
                                                    <Link
                                                        href={`/account/orders/${order.id}`}
                                                        className="flex-1 text-center btn secondary-btn hover:bg-gray-50 transition"
                                                    >
                                                        View Details
                                                    </Link>
                                                    {order.status === "Delivered" && (
                                                        <button className="flex-1 btn primary-btn hover:opacity-90 transition">
                                                            Reorder
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Settings Section */}
                            {activeSection === "settings" && (
                                <div>
                                    <h2 className="text-3xl font-bold text-[#433A3F] mb-6">Account Settings</h2>

                                    <div className="space-y-6">
                                        {/* Password Change */}
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#433A3F] mb-4">
                                                Change Password
                                            </h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Current Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        New Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Confirm New Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent"
                                                    />
                                                </div>
                                                <button className="btn primary-btn hover:opacity-90 transition">
                                                    Update Password
                                                </button>
                                            </div>
                                        </div>

                                        {/* Notifications */}
                                        <div className="border border-gray-200 rounded-sm py-4 px-3">
                                            <h3 className="text-xl font-semibold text-[#433A3F] mb-4">
                                                Notification Preferences
                                            </h3>
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-3 cursor-pointer">
                                                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                                                    <span className="black">Email notifications for orders</span>
                                                </label>
                                                <label className="flex items-center gap-3 cursor-pointer">
                                                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                                                    <span className="black">Promotional emails</span>
                                                </label>
                                                <label className="flex items-center gap-3 cursor-pointer">
                                                    <input type="checkbox" className="w-5 h-5 rounded" />
                                                    <span className="black">SMS notifications</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Delete Account */}
                                        <div className="border border-red-200 rounded-sm p-6 bg-red-50">
                                            <h3 className="text-xl font-semibold text-red-600 mb-2">
                                                Danger Zone
                                            </h3>
                                            <p className="text-gray-700 mb-4">
                                                Once you delete your account, there is no going back. Please be certain.
                                            </p>
                                            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium">
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
