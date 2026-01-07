const HowCustomDesignWorks = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                    How Custom Designs Work
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Create clothing that’s uniquely yours. Follow these simple steps to upload,
                    preview, and order your custom-designed apparel.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border rounded-sm p-6">
                    <span className="text-sm text-gray-400">Step 1</span>
                    <h2 className="text-xl font-medium mt-2 mb-3">
                        Choose Your Product
                    </h2>
                    <p className="text-gray-600">
                        Select the item you want to customize — shirts, t-shirts,
                        hoodies, or pants. Pick your preferred size and color.
                    </p>
                </div>

                <div className="border rounded-sm p-6">
                    <span className="text-sm text-gray-400">Step 2</span>
                    <h2 className="text-xl font-medium mt-2 mb-3">
                        Upload or Create a Design
                    </h2>
                    <p className="text-gray-600">
                        Upload your own artwork, logo, or image. You’ll be able to
                        position and scale your design to fit perfectly on the clothing.
                    </p>
                </div>

                <div className="border rounded-sm p-6">
                    <span className="text-sm text-gray-400">Step 3</span>
                    <h2 className="text-xl font-medium mt-2 mb-3">
                        Preview & Place Order
                    </h2>
                    <p className="text-gray-600">
                        Preview your custom design in real time. Once you’re happy,
                        add it to cart and complete your order securely.
                    </p>
                </div>
            </div>

            <div className="mt-16 bg-gray-50 rounded-sm p-8">
                <h3 className="text-2xl font-medium mb-4">
                    Important Design Guidelines
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Use high-resolution images for the best print quality.</li>
                    <li>Avoid very small text or thin lines in your design.</li>
                    <li>Ensure you own the rights to any images or logos you upload.</li>
                </ul>
            </div>
        </section>
    )
}

export default HowCustomDesignWorks
