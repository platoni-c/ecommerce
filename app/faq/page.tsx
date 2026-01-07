const Page = () => {
    const faqs = [
        {
            question: "How do I place a custom order?",
            answer: "Select a product, upload your design, preview it, and then add it to your cart. Complete checkout to place your custom order."
        },
        {
            question: "What file types can I upload for custom designs?",
            answer: "We accept PNG, JPG, JPEG, and SVG files. Make sure your files are high-resolution for the best print quality."
        },
        {
            question: "Can I make changes after placing an order?",
            answer: "Unfortunately, custom orders cannot be changed once submitted. Please review your design carefully before checkout."
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping times vary by location. Orders are typically processed within 2-3 business days and shipped via standard courier services."
        },
        {
            question: "What is your return policy?",
            answer: "Due to the nature of custom products, we do not accept returns or exchanges unless the item is defective. Please contact support if you receive a damaged product."
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <header className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                    Frequently Asked Questions
                </h1>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    Find answers to the most common questions about our products and custom design process.
                </p>
            </header>

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="border rounded-lg p-4 bg-neutral-50 cursor-pointer"
                    >
                        <summary className="font-medium text-neutral-900 hover:text-[#433A3F] transition-colors">
                            {faq.question}
                        </summary>
                        <p className="mt-2 text-neutral-700">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    )
}

export default Page
