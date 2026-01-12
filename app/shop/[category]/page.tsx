import Image from "next/image";
import { notFound } from "next/navigation";
import { CategoryKey, productsByCategory } from "@/app/shop/products";
import Link from "next/link";

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
            <div className="min-h-screen p-8 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">{config.title}</h1>
                    <p className="text-gray-500">No products available in this category.</p>
                </div>
            </div>
        );
    }

    const KES_EXCHANGE_RATE = 130;

    const priceFormatter = new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#433A3F] capitalize tracking-tight">
                    {config.title}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {products.map(({ id, name, imageUrl, price, inStock }) => (
                        <div key={id} className="group relative flex flex-col">
                            {/* Image Container */}
                            <div className="relative aspect-square bg-[#F9F9F9] rounded-sm overflow-hidden mb-4 border border-transparent group-hover:border-gray-100 transition-colors">
                                <Link href={`/shop/${category}/${id}`} className="block w-full h-full">
                                    <Image
                                        src={imageUrl}
                                        alt={name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                                    />
                                </Link>

                                {/* Favorite Icon */}
                                <button className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col flex-grow">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <Link href={`/shop/${category}/${id}`} className="group-hover:text-[#433A3F] transition-colors">
                                        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                                    </Link>
                                    <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                                        {priceFormatter.format(price * KES_EXCHANGE_RATE)}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <div className="mt-auto pt-2">
                                    <Link
                                        href={`/custom?id=${id}&name=${encodeURIComponent(name)}&price=${price}&image=${encodeURIComponent(imageUrl)}`}
                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#433A3F] transition-colors gap-1 group/btn"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        <span className="underline decoration-transparent group-hover/btn:decoration-current transition-all">Customize Design</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;