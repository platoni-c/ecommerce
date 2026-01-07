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

const ProductClient = ({ product, category }: ProductClientProps) => {
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

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Success Toast */}
            {showSuccess && (
                <div className="fixed top-24 right-8 bg-green-600 text-white px-6 py-4 rounded-sm shadow-none z-50 animate-slide-in-right flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Added to cart!</span>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative w-full aspect-square bg-gray-100 rounded-sm overflow-hidden">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain p-8"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-3 text-[#433A3F]">
                            {product.name}
                        </h1>
                        <p className="text-3xl font-bold text-[#433A3F]">
                            KES {(product.price * 130).toLocaleString()}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">({product.rating})</span>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        {product.description}
                    </p>

                    <div>
                        <h3 className="font-semibold mb-3 text-lg text-[#433A3F]">Select Size</h3>
                        <div className="flex gap-3 flex-wrap">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${selectedSize === size
                                        ? "border-[#433A3F] bg-[#433A3F] text-white"
                                        : "border-gray-300 hover:border-[#433A3F]"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3 text-lg text-[#433A3F]">Select Color</h3>
                        <div className="flex gap-2 flex-wrap">
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`px-4 py-2 border-2 rounded-lg capitalize transition-all ${selectedColor === color
                                        ? "border-[#433A3F] bg-gray-50 ring-2 ring-[#433A3F] ring-offset-2"
                                        : "border-gray-300 hover:border-[#433A3F]"
                                        }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                        {product.inStock ? "✓ In stock" : "✗ Out of stock"}
                    </p>

                    <div>
                        <h3 className="font-semibold mb-3 text-lg text-[#433A3F]">Quantity</h3>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-[#433A3F] hover:bg-gray-50 transition flex items-center justify-center font-bold text-xl"
                            >
                                −
                            </button>
                            <span className="w-16 text-center font-semibold text-xl">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-[#433A3F] hover:bg-gray-50 transition flex items-center justify-center font-bold text-xl"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={handleAddToCart}
                            className={`flex-1 btn primary-btn transition shadow-lg ${product.inStock ? "hover:opacity-90" : "cursor-not-allowed opacity-50"}`}
                            disabled={!product.inStock}
                        >
                            {product.inStock ? "Add to Cart" : "Unavailable"}
                        </button>
                        <Link
                            href={`/custom?id=${product.id}&name=${encodeURIComponent(product.name)}&price=${product.price}&image=${encodeURIComponent(product.imageUrl)}`}
                            className="flex-1 btn secondary-btn hover:bg-gray-50 transition text-center"
                        >
                            Customize
                        </Link>
                    </div>

                    {/* Product Features */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="font-semibold mb-4 text-lg text-[#433A3F]">Product Features</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Premium quality materials</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Free shipping & returns</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>30-day return policy</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Secure checkout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductClient;
