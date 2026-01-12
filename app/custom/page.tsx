"use client";

import { useState, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

const PRODUCT_COLORS = [
    { name: "Black", value: "#000000", twClass: "bg-black" },
    { name: "White", value: "#FFFFFF", twClass: "bg-white border border-gray-200" },
    { name: "Navy", value: "#1E3A8A", twClass: "bg-blue-900" },
    { name: "Heather Grey", value: "#9CA3AF", twClass: "bg-gray-400" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

const CustomizationContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const productId = searchParams.get("id") || "";
    const productName = searchParams.get("name") || "Custom Product";
    const basePrice = parseFloat(searchParams.get("price") || "0");
    const productImage = searchParams.get("image") || "/clothing-outline.png";

    const [productColor, setProductColor] = useState("Black");
    const [selectedSize, setSelectedSize] = useState("");
    const [customImage, setCustomImage] = useState<string | null>(null);
    const [customNotes, setCustomNotes] = useState("");

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCustomImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddToCart = () => {
        if (!customImage) {
            alert("Please upload an image for your design!");
            return;
        }
        if (!selectedSize) {
            alert("Please select a size!");
            return;
        }

        addToCart({
            id: `${productId}-custom-${Date.now()}`,
            name: `${productName} (Custom Design - ${productColor})`,
            price: basePrice + 10,
            imageUrl: productImage,
            quantity: 1,
            size: selectedSize,
            color: productColor,
            uploadedImage: customImage,
            customNotes: customNotes,
        });

        router.push("/cart");
    };

    const KES_EXCHANGE_RATE = 130;
    const totalPrice = (basePrice + 10) * KES_EXCHANGE_RATE;

    return (
        <div className="min-h-screen bg-white text-[#433A3F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 text-sm text-gray-500 hover:text-[#433A3F] flex items-center gap-2 transition-colors"
                >
                    ← Back to Shop
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Preview */}
                    <div className="relative">
                        <div className="sticky top-8">
                            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium lg:hidden">
                                Preview
                            </h2>
                            <div className="aspect-square bg-[#FAFAFA] rounded-sm relative overflow-hidden flex items-center justify-center border border-gray-100">
                                <Image
                                    src={productImage}
                                    alt={productName}
                                    width={600}
                                    height={600}
                                    className="object-contain w-[80%] h-[80%] mix-blend-multiply opacity-90"
                                    priority
                                />
                                {/* Custom Image Overlay */}
                                {customImage && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-16">
                                        <div className="relative w-1/2 aspect-square">
                                            <Image
                                                src={customImage}
                                                alt="Custom Print"
                                                fill
                                                className="object-contain drop-shadow-md"
                                            />
                                        </div>
                                    </div>
                                )}

                                {!customImage && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <p className="text-gray-300 text-sm font-medium border-2 border-dashed border-gray-300 px-4 py-2 rounded-sm">
                                            Your Design Here
                                        </p>
                                    </div>
                                )}
                            </div>
                            <p className="text-center text-xs text-gray-400 mt-4">
                                *Preview is an approximation. Actual print size and placement may vary.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Options */}
                    <div className="flex flex-col h-full">

                        {/* 1. Name */}
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                            {productName}
                        </h1>

                        {/* 2. Product Color */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 mb-3">
                                Selected Color: <span className="text-[#433A3F] font-medium">{productColor}</span>
                            </p>
                            <div className="flex gap-3">
                                {PRODUCT_COLORS.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setProductColor(color.name)}
                                        className={`w-10 h-10 rounded-full ${color.twClass} transition-all duration-200 ${productColor === color.name
                                                ? "ring-2 ring-offset-2 ring-[#433A3F] scale-110"
                                                : "hover:scale-105 opacity-80 hover:opacity-100"
                                            }`}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* 3. Price */}
                        <div className="mb-8 pb-8 border-b border-gray-100">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold">
                                    KES {totalPrice.toLocaleString()}
                                </span>
                                <span className="text-sm text-gray-400 line-through">
                                    KES {(basePrice * KES_EXCHANGE_RATE * 1.5).toLocaleString()}
                                </span>
                            </div>
                            <p className="text-sm text-green-600 mt-1">
                                Includes customization fee
                            </p>
                        </div>

                        {/* 4. Customization Options */}
                        <div className="space-y-8 flex-grow">

                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium uppercase tracking-wide text-gray-700 mb-3">
                                    Upload Your Design
                                </label>
                                <div
                                    className="border-2 border-dashed border-gray-200 rounded-sm p-6 text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={handleImageUpload}
                                    />
                                    <div className="space-y-2">
                                        <div className="mx-auto h-12 w-12 text-gray-400">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            <span className="font-medium text-[#433A3F] underline">Click to upload</span> or drag and drop
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                    </div>
                                </div>
                                {customImage && (
                                    <div className="mt-3 flex items-center justify-between text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-sm">
                                        <span>Image selected</span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setCustomImage(null); }}
                                            className="text-red-500 hover:text-red-700 font-medium"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Size Selection */}
                            <div>
                                <label className="block text-sm font-medium uppercase tracking-wide text-gray-700 mb-3">
                                    Select Size
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {SIZES.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-10 border rounded-sm transition-colors text-sm font-medium ${selectedSize === size
                                                    ? "border-[#433A3F] bg-[#433A3F] text-white"
                                                    : "border-gray-200 hover:border-gray-400 text-gray-600"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Print Instructions */}
                            <div>
                                <label className="block text-sm font-medium uppercase tracking-wide text-gray-700 mb-3">
                                    Print Instructions / Notes
                                </label>
                                <textarea
                                    value={customNotes}
                                    onChange={(e) => setCustomNotes(e.target.value)}
                                    placeholder="Describe where and how you want the print (e.g., 'Center chest', 'Small logo on left pocket', 'Back print')..."
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-[#433A3F] focus:ring-0 transition-colors resize-none placeholder:text-gray-400"
                                />
                            </div>

                        </div>

                        {/* 5. Actions */}
                        <div className="mt-10 pt-6 border-t border-gray-100">
                            <button
                                onClick={handleAddToCart}
                                className="w-full py-4 bg-[#433A3F] text-white font-medium uppercase tracking-widest hover:bg-black transition-colors rounded-sm shadow-sm"
                            >
                                Add to Cart — KES {totalPrice.toLocaleString()}
                            </button>
                        </div>

                        {/* 6. Notice */}
                        <div className="mt-6 text-[10px] text-gray-400 leading-normal text-center sm:text-left">
                            <p>
                                Price varies depending on the production technique, print placement, product color and size, taxes, and shipping.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

const Page = () => (
    <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin w-8 h-8 border-2 border-[#433A3F] border-t-transparent rounded-full"></div>
        </div>
    }>
        <CustomizationContent />
    </Suspense>
);

export default Page;
