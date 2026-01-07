
import Image from "next/image";
import { notFound } from "next/navigation";
import { CategoryKey, productsByCategory } from "@/app/shop/products";
import Link from "next/dist/client/link";

type CategorySlug = CategoryKey;

type PageProps = {
    params: Promise<{
        category: CategorySlug;
    }>;
};

export function generateStaticParams() {
    return (Object.keys(productsByCategory) as CategoryKey[]).map((category) => ({
        category,
    }));
}

const categoryConfig: Record<CategorySlug, { title: string }> = {
    shirts: { title: "Shirts" },
    tshirts: { title: "T-Shirts" },
    hoodies: { title: "Hoodies" },
    pants: { title: "Pants" },
};

const Page = async ({ params }: PageProps) => {
    const resolvedParams = await params;
    const category = resolvedParams.category;

    const products = productsByCategory[category];
    const config = categoryConfig[category];

    if (!config || !products) {
        notFound();
    }

    if (products.length === 0) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{config.title}</h1>
                <p className="text-gray-600">No products available in this category.</p>
            </div>
        );
    }

    const KES_EXCHANGE_RATE = 160; // 1 USD ≈ 160 KES (adjust when needed)

    const priceFormatter = new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
    });

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 font-stretch-expanded">{config.title}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(({ id, name, imageUrl, price, inStock }) => (
                    <Link href={`/shop/${category}/${id}`} key={id}>
                        <div
                            key={id}
                            className="p-4 flex flex-col items-center"
                        >
                            <Image
                                src={imageUrl}
                                alt={name}
                                width={400}
                                height={400}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="w-full aspect-9/7 mb-4 rounded-sm"
                            />
                            <h2 className="text-xl font-semibold mb-2">{name}</h2>
                            <p className="text-gray-700 mb-1">
                                {priceFormatter.format(price * KES_EXCHANGE_RATE)}
                            </p>
                            {!inStock && (
                                <p className="text-sm text-red-500 mb-2">Out of stock</p>
                            )}
                            <button
                                className="mt-2 btn secondary-btn transition disabled:hidden"
                                disabled={!inStock}
                            >
                                {inStock ? "Add to Cart" : "Unavailable"}
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;