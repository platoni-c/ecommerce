const Page = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <header className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                    Shipping & Returns
                </h1>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    Everything you need to know about our shipping policies and return procedures.
                </p>
            </header>

            <div className="space-y-12 text-neutral-700">

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Shipping Information
                    </h2>
                    <p className="mb-4">
                        We process and ship orders within 2–3 business days. Shipping times vary depending on your location and selected shipping method.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Standard Shipping: 5–10 business days</li>
                        <li>Express Shipping: 2–4 business days</li>
                        <li>International Shipping: 7–20 business days depending on destination</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Order Tracking
                    </h2>
                    <p className="mb-4">
                        Once your order is shipped, you will receive a tracking number via email. Use this number to track your package directly on the courier&#39;s website.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Returns & Exchanges
                    </h2>
                    <p className="mb-4">
                        Due to the custom nature of our products, we only accept returns or exchanges if the item is defective or damaged. Please contact our support team immediately if you receive a damaged product.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Contact support within 7 days of receiving your order.</li>
                        <li>Include your order number and photos of the defective product.</li>
                        <li>Once approved, we will provide instructions for the return and replacement process.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Contact Us
                    </h2>
                    <p>
                        If you have any questions about shipping or returns, please contact us at{" "}
                        <a href="mailto:support@yourbrand.com" className="hover:text-[#433A3F] transition-colors">
                            support@yourbrand.com
                        </a>
                        .
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Page
