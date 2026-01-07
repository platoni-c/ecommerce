const Page = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 text-neutral-700">
            <header className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                    Terms & Conditions
                </h1>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    These Terms and Conditions outline the rules and regulations for using our website and services. By accessing this website, you accept these terms in full.
                </p>
            </header>

            <div className="space-y-10">

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By using our website, placing orders, or accessing services, you agree to comply with these Terms and Conditions. If you do not agree, please do not use our website.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">2. Use of Website</h2>
                    <p className="mb-4">
                        You agree to use our website for lawful purposes only and not to engage in any conduct that may harm the website, other users, or our business operations.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>You may not attempt to gain unauthorized access to any part of the website or related systems.</li>
                        <li>You may not transmit any harmful, unlawful, or disruptive content.</li>
                        <li>We reserve the right to suspend or terminate accounts for violation of these terms.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">3. Orders and Payments</h2>
                    <p className="mb-4">
                        All orders placed through our website are subject to acceptance and availability. Prices and availability are subject to change without notice.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>We reserve the right to refuse or cancel any order at our discretion.</li>
                        <li>Payment must be made in full at the time of purchase.</li>
                        <li>All transactions are processed securely. We do not store full payment information on our servers.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">4. Shipping and Delivery</h2>
                    <p className="mb-4">
                        Shipping times and methods are described on our Shipping & Returns page. We are not responsible for delays caused by carriers or customs.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">5. Returns and Refunds</h2>
                    <p className="mb-4">
                        Our policy on returns, exchanges, and refunds is detailed on the Shipping & Returns page. Custom orders are generally non-refundable unless defective.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">6. Intellectual Property</h2>
                    <p className="mb-4">
                        All content on this website, including images, text, graphics, and logos, is the property of our company or licensed to us. You may not reproduce, distribute, or use this content without our express written permission.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">7. User-Generated Content</h2>
                    <p className="mb-4">
                        If you upload designs or content, you grant us a non-exclusive, royalty-free license to use, display, and reproduce such content solely for processing orders and promoting our services.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>You must have all rights to any content you upload.</li>
                        <li>We may remove content that violates these terms or any laws.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">8. Limitation of Liability</h2>
                    <p>
                        We are not liable for indirect, incidental, or consequential damages arising from the use of our website or products, including but not limited to lost profits or data.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">9. Indemnification</h2>
                    <p>
                        You agree to indemnify and hold harmless our company and affiliates from any claims, damages, or expenses arising from your use of the website or violation of these Terms and Conditions.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">10. Privacy</h2>
                    <p>
                        Your privacy is governed by our Privacy Policy. By using the website, you consent to the collection and use of your information as described in that policy.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">11. Governing Law</h2>
                    <p>
                        These Terms and Conditions are governed by the laws of Kenya. Any disputes arising will be resolved under the jurisdiction of Kenyan courts.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">12. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms and Conditions at any time. Updates will be posted on this page, and continued use of the website constitutes acceptance of the changes.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">13. Contact Information</h2>
                    <p>
                        For any questions about these Terms and Conditions, please contact us at <a href="mailto:support@yourbrand.com" className="hover:text-[#433A3F] transition-colors">support@yourbrand.com</a>.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Page
