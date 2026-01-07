"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

type CustomizationOptions = {
    text: string;
    textColor: string;
    textPosition: "top" | "center" | "bottom";
    fontSize: number;
    fontFamily: string;
    backgroundColor: string;
};

const FONT_OPTIONS = [
    { name: "Arial", value: "Arial, sans-serif" },
    { name: "Times New Roman", value: "Times New Roman, serif" },
    { name: "Courier", value: "Courier, monospace" },
    { name: "Georgia", value: "Georgia, serif" },
    { name: "Verdana", value: "Verdana, sans-serif" },
    { name: "Impact", value: "Impact, fantasy" },
];

const COLOR_OPTIONS = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#EF4444" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Green", value: "#10B981" },
    { name: "Yellow", value: "#F59E0B" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Pink", value: "#EC4899" },
];

const CustomizationContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { addToCart } = useCart();

    const productId = searchParams.get("id") || "";
    const productName = searchParams.get("name") || "Custom Product";
    const productPrice = parseFloat(searchParams.get("price") || "0");
    const productImage = searchParams.get("image") || "/clothing-outline.png";

    const [customization, setCustomization] = useState<CustomizationOptions>({
        text: "",
        textColor: "#000000",
        textPosition: "center",
        fontSize: 24,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#FFFFFF",
    });

    const [showPreview, setShowPreview] = useState(true);

    const updateCustomization = <K extends keyof CustomizationOptions>(key: K, value: CustomizationOptions[K]) => {
        setCustomization((prev) => ({ ...prev, [key]: value }));
    };

    const handleAddToCart = () => {
        if (!customization.text.trim()) {
            alert("Please add some text to customize your product!");
            return;
        }

        addToCart({
            id: `${productId}-custom-${Date.now()}`,
            name: `${productName} (Customized)`,
            price: productPrice + 10, // Add customization fee
            imageUrl: productImage,
            quantity: 1,
        });

        alert("Customized product added to cart!");
        router.push("/cart");
    };

    const getTextPositionStyle = () => {
        switch (customization.textPosition) {
            case "top":
                return "items-start pt-8";
            case "bottom":
                return "items-end pb-8";
            default:
                return "items-center";
        }
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-[#433A3F] mb-4 tracking-tight">
                        Customize Your Product
                    </h1>
                    <p className="text-lg text-gray-600">
                        Make it uniquely yours with custom text and design
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Preview Section */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-sm p-8 border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-semibold text-[#433A3F]">
                                    Live Preview
                                </h2>
                                <button
                                    onClick={() => setShowPreview(!showPreview)}
                                    className="text-sm text-gray-600 hover:text-[#433A3F] transition"
                                >
                                    {showPreview ? "Hide" : "Show"} Preview
                                </button>
                            </div>

                            {showPreview && (
                                <div className="relative aspect-square bg-gray-100 rounded-sm overflow-hidden">
                                    <Image
                                        src={productImage}
                                        alt={productName}
                                        fill
                                        className="object-contain p-8"
                                    />
                                    {/* Custom Text Overlay */}
                                    <div
                                        className={`absolute inset-0 flex justify-center ${getTextPositionStyle()} pointer-events-none`}
                                    >
                                        {customization.text && (
                                            <div
                                                className="px-6 py-3 rounded-sm transition-all duration-300"
                                                style={{
                                                    backgroundColor: customization.backgroundColor,
                                                    opacity: 0.95,
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        color: customization.textColor,
                                                        fontSize: `${customization.fontSize}px`,
                                                        fontFamily: customization.fontFamily,
                                                        fontWeight: "bold",
                                                        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                                    }}
                                                >
                                                    {customization.text}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Product Info */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-xl font-semibold text-[#433A3F] mb-2">
                                    {productName}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600">
                                        Base Price: KES {(productPrice * 130).toLocaleString()}
                                    </p>
                                    <p className="text-sm text-green-600 font-medium">
                                        +KES 1,300 customization
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-2xl font-bold text-[#433A3F]">
                                        Total: KES {((productPrice + 10) * 130).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customization Options */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-sm p-8 border border-gray-100">
                            <h2 className="text-2xl font-semibold text-[#433A3F] mb-6">
                                Customization Options
                            </h2>

                            {/* Text Input */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Custom Text
                                </label>
                                <input
                                    type="text"
                                    value={customization.text}
                                    onChange={(e) => updateCustomization("text", e.target.value)}
                                    placeholder="Enter your custom text..."
                                    maxLength={50}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent transition"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    {customization.text.length}/50 characters
                                </p>
                            </div>

                            {/* Font Family */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Font Style
                                </label>
                                <select
                                    value={customization.fontFamily}
                                    onChange={(e) =>
                                        updateCustomization("fontFamily", e.target.value)
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433A3F] focus:border-transparent transition"
                                >
                                    {FONT_OPTIONS.map((font) => (
                                        <option key={font.value} value={font.value}>
                                            {font.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Font Size */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Font Size: {customization.fontSize}px
                                </label>
                                <input
                                    type="range"
                                    min="12"
                                    max="48"
                                    value={customization.fontSize}
                                    onChange={(e) =>
                                        updateCustomization("fontSize", parseInt(e.target.value))
                                    }
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#433A3F]"
                                />
                            </div>

                            {/* Text Color */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Text Color
                                </label>
                                <div className="grid grid-cols-4 gap-3">
                                    {COLOR_OPTIONS.map((color) => (
                                        <button
                                            key={color.value}
                                            onClick={() => updateCustomization("textColor", color.value)}
                                            className={`h-12 rounded-lg border-2 transition-all hover:scale-105 ${customization.textColor === color.value
                                                ? "border-[#433A3F] ring-2 ring-[#433A3F] ring-offset-2"
                                                : "border-gray-300"
                                                }`}
                                            style={{ backgroundColor: color.value }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Background Color */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Background Color
                                </label>
                                <div className="grid grid-cols-4 gap-3">
                                    {COLOR_OPTIONS.map((color) => (
                                        <button
                                            key={color.value}
                                            onClick={() =>
                                                updateCustomization("backgroundColor", color.value)
                                            }
                                            className={`h-12 rounded-lg border-2 transition-all hover:scale-105 ${customization.backgroundColor === color.value
                                                ? "border-[#433A3F] ring-2 ring-[#433A3F] ring-offset-2"
                                                : "border-gray-300"
                                                }`}
                                            style={{ backgroundColor: color.value }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Text Position */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Text Position
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {(["top", "center", "bottom"] as const).map((position) => (
                                        <button
                                            key={position}
                                            onClick={() => updateCustomization("textPosition", position)}
                                            className={`py-3 px-4 rounded-lg border-2 transition-all font-medium capitalize ${customization.textPosition === position
                                                ? "border-[#433A3F] bg-[#433A3F] text-white"
                                                : "border-gray-300 hover:border-[#433A3F]"
                                                }`}
                                        >
                                            {position}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() => router.back()}
                                    className="flex-1 btn secondary-btn hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 btn primary-btn hover:opacity-90 transition shadow-lg"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        {/* Tips Section */}
                        <div className=" rounded-sm p-6 border border-blue-100">
                            <h3 className="text-lg font-semibold text-[#433A3F] mb-3 flex items-center gap-2">
                                <span className="text-2xl">💡</span>
                                Customization Tips
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>Keep text short and impactful for best results</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>Choose contrasting colors for better visibility</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>Preview your design before adding to cart</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>Customization adds KES 1,300 to the base price</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Page = () => (
    <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#433A3F] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading customization studio...</p>
            </div>
        </div>
    }>
        <CustomizationContent />
    </Suspense>
);

export default Page;
