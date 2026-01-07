import Link from "next/dist/client/link";
import Image from "next/image"

const Hero = () => {
    return (
        //Hero Section
        <section className="flex flex-col-reverse md:flex-row min-h-[70vh] md:min-h-100 items-center justify-center gap-8 py-12 md:py-0">
            <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize leading-tight">
                    Express yourself through fashion
                </h1>
                <p className="w-full md:w-2/3 text-lg text-gray-600">
                    Premium apparel you can customize or wear as is. Quality meets creativity.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-10">
                    <Link href="/shop" className="w-full sm:w-auto btn primary-btn text-center">Shop Now</Link>
                    <Link href="/custom" className="w-full sm:w-auto btn secondary-btn text-center">Design Your Own</Link>
                </div>
            </div>
            <aside className="flex items-center justify-center w-full md:w-1/2">
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
