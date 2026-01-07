import Link from "next/link"

const Page = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <header className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                    Contact Us
                </h1>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    Have a question about an order, custom designs, or anything else?
                    We’re here to help.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-neutral-600 mb-6">
                        Reach out to us and we’ll get back to you as soon as possible.
                        Our support team is available Monday to Friday.
                    </p>

                    <ul className="space-y-4 text-neutral-700">
                        <li>
                            <span className="font-medium text-neutral-900">Email:</span>{" "}
                            <a href="mailto:support@yourbrand.com" className="hover:text-[#433A3F] transition-colors">
                                support@yourbrand.com
                            </a>
                        </li>
                        <li>
                            <span className="font-medium text-neutral-900">Business Hours:</span>{" "}
                            Mon – Fri, 9:00 AM – 6:00 PM
                        </li>
                        <li>
                            <span className="font-medium text-neutral-900">Location:</span>{" "}
                            Nairobi, Kenya
                        </li>
                    </ul>

                    <div className="mt-8">
                        <p className="text-neutral-600">
                            Looking for answers fast? Visit our{" "}
                            <Link href="/faq" className="hover:text-[#433A3F] transition-colors font-medium">
                                FAQs
                            </Link>
                            .
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-4">
                        Send Us a Message
                    </h2>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm text-neutral-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#433A3F]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-neutral-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#433A3F]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-neutral-700 mb-1">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Tell us how we can help..."
                                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#433A3F]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn primary-btn"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Page
