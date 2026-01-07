import Link from "next/dist/client/link";
import Image from "next/image"

const Hero = () => {
    return (
        //Hero Section
        <section className="flex flex-row min-h-100 items-center justify-center">
            <div className="flex flex-col gap-8 w-1/2">
                <h1 className="text-4xl font-bold capitalize">Express yourself through fashion</h1>
                <p className="w-2/3">Premium apparel you can customize or wear as is. Quality meets creativity.</p>
                <div className="flex items-center gap-10">
                    <Link href="/shop" className="btn primary-btn">Shop Now</Link>
                    <Link href="/custom" className="btn secondary-btn">Design Your Own</Link>
                </div>
            </div>
            <aside className="flex items-center justify-center w-1/2">
                <Image
                    src="/clothing-outline.png"
                    alt="Clothing Outline"
                    width={500}
                    height={500}
                    priority
                />
            </aside>
        </section>
    )
}
export default Hero
