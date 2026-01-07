"use client"

import CategoryCard from "@/app/components/CategoryCard";
import ShinyText from "@/components/ShinyText";

const Featured = () => {
    return (
        <section className="relative">
            <ShinyText
                text="Featured Category"
                speed={2}
                delay={0}
                color="black"
                shineColor="#9A9B94"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                className="absolute top-10 left-1/2 transform -translate-x-1/2 text-4xl font-bold font-stretch-expanded uppercase"
            />
            <div className="grid grid-cols-4 gap-y-20 gap-x-10 min-h-140 pt-40">
                <CategoryCard title="Shirts" image="/shirts.webp" link={"shirts"} />
                <CategoryCard title="T-Shirts" image="/t-shirts.avif" link={"tshirts"} />
                <CategoryCard title="Hoodies" image="/hoodies.avif" link={"hoodies"} />
                <CategoryCard title="Pants" image="/pants.avif" link={"pants"} />
            </div>
        </section>
    )
}
export default Featured
