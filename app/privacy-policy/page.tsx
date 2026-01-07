const Page = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 text-neutral-700">
            <header className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                    Privacy Policy
                </h1>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                </p>
            </header>

            <div className="space-y-10">

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Information We Collect
                    </h2>
                    <p className="mb-4">
                        We may collect personal information you provide to us directly, such as your name, email address, shipping address, and payment details when you place an order or contact us.
                    </p>
                    <p>
                        We may also automatically collect certain information about your device, browsing actions, and usage patterns through cookies and similar technologies.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        How We Use Your Information
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>To process and fulfill orders.</li>
                        <li>To communicate with you regarding your orders, inquiries, or support requests.</li>
                        <li>To improve our website, products, and services.</li>
                        <li>To send promotional materials and updates (you may opt out at any time).</li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Sharing Your Information
                    </h2>
                    <p className="mb-4">
                        We do not sell your personal information. We may share your information with trusted third parties only for purposes such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Shipping and delivery of orders.</li>
                        <li>Payment processing.</li>
                        <li>Providing customer support.</li>
                        <li>Legal compliance and protection of our rights.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Cookies and Tracking
                    </h2>
                    <p className="mb-4">
                        We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user preferences.
                    </p>
                    <p>
                        You can manage your cookie preferences through your browser settings.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Your Rights
                    </h2>
                    <p className="mb-4">
                        You have the right to access, correct, or delete your personal information. You may also withdraw consent to receive promotional communications at any time.
                    </p>
                    <p>
                        To exercise these rights, please contact us at <a href="mailto:support@yourbrand.com" className="hover:text-[#433A3F] transition-colors">support@yourbrand.com</a>.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Security
                    </h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or destruction.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Changes to This Policy
                    </h2>
                    <p>
                        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Contact Us
                    </h2>
                    <p>
                        If you have questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@yourbrand.com" className="hover:text-[#433A3F] transition-colors">support@yourbrand.com</a>.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Page
