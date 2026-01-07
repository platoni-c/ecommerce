import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-transparent text-neutral-700 mt-24 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                <div>
                    <h3 className="text-neutral-900 text-lg font-semibold mb-4 font-stretch-extra-expanded uppercase tracking-widest">
                        Samuel&#39;s
                    </h3>
                    <p className="text-sm text-neutral-500">
                        Premium everyday clothing with the freedom to customize.
                        Designed for comfort, built for expression.
                    </p>
                </div>

                <div>
                    <h4 className="text-neutral-900 font-medium mb-4">
                        Shop
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/shop/shirts" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">Shirts</Link></li>
                        <li><Link href="/shop/tshirts" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">T-Shirts</Link></li>
                        <li><Link href="/shop/hoodies" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">Hoodies</Link></li>
                        <li><Link href="/shop/pants" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">Pants</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-neutral-900 font-medium mb-4">
                        Custom Design
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/how-custom-designs-work" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">How It Works</Link></li>
                        <li><Link href="/design-guidelines" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">Design Guidelines</Link></li>
                        <li><Link href="/faq" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">FAQs</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-neutral-900 font-medium mb-4">
                        Support
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/contact" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">Contact Us</Link></li>
                        <li><Link href="/shipping-returns" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">Shipping & Returns</Link></li>
                        <li><Link href="/privacy-policy" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="transition-colors duration-200 hover:text-[#433A3F] hover:underline hover:underline-offset-1">Terms & Conditions</Link></li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-neutral-200">
                <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
                    <p>
                        © {new Date().getFullYear()} Kaff&Kaph. All rights reserved.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Made with care.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
