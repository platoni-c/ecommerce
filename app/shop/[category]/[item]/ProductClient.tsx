"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { Product, CategoryKey } from "@/app/shop/products";

type ProductClientProps = {
    product: Product;
    category: CategoryKey;
};

const ProductClient = ({ product }: ProductClientProps) => {
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [quantity, setQuantity] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size");
            return;
        }
        if (!selectedColor) {
            alert("Please select a color");
            return;
        }

        addToCart({
            id: `${product.id}-${selectedSize}-${selectedColor}`,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity: quantity,
            size: selectedSize,
            color: selectedColor,
        });

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const KES_EXCHANGE_RATE = 130;

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                {/* Success Toast */}
                {showSuccess && (
                    <div className="fixed top-24 right-8 bg-[#433A3F] text-white px-6 py-4 rounded-sm shadow-xl z-50 animate-slide-in-right flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium tracking-wide">Added to cart successfully</span>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Image Section */}
                    <div className="relative aspect-square ml-auto w-full lg:w-[90%] bg-[#FAFAFA] rounded-sm overflow-hidden border border-gray-100/50">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-contain p-12 mix-blend-multiply"
                            priority
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-center max-w-lg">
                        <div className="border-b border-gray-100 pb-8 mb-8">
                            <h1 className="text-4xl sm:text-5xl font-bold text-[#433A3F] mb-4 tracking-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-medium text-gray-900">
                                    KES {(product.price * KES_EXCHANGE_RATE).toLocaleString()}
                                </p>
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <span className="text-yellow-400">★</span>
                                    <span>{product.rating}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className={product.inStock ? "text-green-600" : "text-red-500"}>
                                        {product.inStock ? "In Stock" : "Out of Stock"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                            {product.description}
                        </p>

                        <div className="space-y-8">
                            {/* Size Selector */}
                            <div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-sm font-medium uppercase tracking-wide text-gray-900">Size</span>
                                    <span className="text-sm text-gray-400 cursor-pointer hover:text-gray-600">Size Guide</span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`h-12 w-12 flex items-center justify-center border transition-all duration-200 text-sm font-medium rounded-sm ${selectedSize === size
                                                    ? "border-[#433A3F] bg-[#433A3F] text-white"
                                                    : "border-gray-200 hover:border-gray-400 text-gray-700"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selector */}
                            <div>
                                <span className="block text-sm font-medium uppercase tracking-wide text-gray-900 mb-3">Color</span>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 border transition-all text-sm rounded-sm capitalize ${selectedColor === color
                                                    ? "border-[#433A3F] bg-gray-50 text-[#433A3F] ring-1 ring-[#433A3F]"
                                                    : "border-gray-200 hover:border-gray-400 text-gray-600"
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center border border-gray-200 rounded-sm">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
                                    >
                                        −
                                    </button>
                                    <div className="w-12 h-12 flex items-center justify-center font-medium text-gray-900">
                                        {quantity}
                                    </div>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock}
                                    className="flex-1 h-12 bg-[#433A3F] text-white font-medium uppercase tracking-widest hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
                                >
                                    Add to Cart
                                </button>
                            </div>

                            <Link
                                href={`/custom?id=${product.id}&name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.imageUrl)}`}
                                className="block w-full text-center py-4 border border-[#433A3F] text-[#433A3F] font-medium uppercase tracking-widest hover:bg-gray-50 transition-colors rounded-sm"
                            >
                                Customize This Design
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductClient;
