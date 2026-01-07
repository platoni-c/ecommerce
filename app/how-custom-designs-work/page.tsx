import Link from "next/link";

const Page = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20 text-neutral-700">
            <header className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                    How Custom Designs Work
                </h1>
                <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
                    Follow these simple steps to create your own custom clothing. Upload your designs, preview them, and place your order easily.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                <div className="border rounded-sm p-8 bg-neutral-50 transition-colors duration-300 transform hover:-translate-y-1">
                    <span className="text-sm text-neutral-500 font-medium">Step 1</span>
                    <h2 className="text-2xl font-semibold mt-3 mb-4 text-neutral-900">Choose Your Product</h2>
                    <p className="text-neutral-700 text-base">
                        Pick the item you want to customize — shirts, t-shirts, hoodies, or pants. Select your size and color preferences.
                    </p>
                </div>

                <div className="border rounded-sm p-8 bg-neutral-50 transition-colors duration-300 transform hover:-translate-y-1">
                    <span className="text-sm text-neutral-500 font-medium">Step 2</span>
                    <h2 className="text-2xl font-semibold mt-3 mb-4 text-neutral-900">Upload or Create Your Design</h2>
                    <p className="text-neutral-700 text-base">
                        Upload your artwork, logo, or image. Position and scale your design to fit perfectly on your chosen clothing.
                    </p>
                </div>

                <div className="border rounded-sm p-8 bg-neutral-50 transition-colors duration-300 transform hover:-translate-y-1">
                    <span className="text-sm text-neutral-500 font-medium">Step 3</span>
                    <h2 className="text-2xl font-semibold mt-3 mb-4 text-neutral-900">Preview & Place Order</h2>
                    <p className="text-neutral-700 text-base">
                        Preview your custom design in real-time. When satisfied, add it to your cart and complete your purchase securely.
                    </p>
                </div>
            </div>

            <div className="bg-neutral-50 rounded-sm p-10 space-y-6">
                <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Helpful Guidelines & Resources</h2>
                <ul className="list-disc list-inside space-y-3 text-neutral-700 text-lg">
                    <li>
                        <Link href="/design-guidelines" className="hover:text-[#433A3F] transition-colors font-medium">
                            Design Guidelines
                        </Link> – Tips on preparing your artwork for the best results.
                    </li>
                    <li>
                        <Link href="/faq" className="hover:text-[#433A3F] transition-colors font-medium">
                            Frequently Asked Questions
                        </Link> – Common questions about custom orders.
                    </li>
                    <li>
                        <Link href="/shipping-returns" className="hover:text-[#433A3F] transition-colors font-medium">
                            Shipping & Returns
                        </Link> – Learn about our delivery times and return policies.
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-[#433A3F] transition-colors font-medium">
                            Contact Support
                        </Link> – Reach out for additional help or inquiries.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Page;
