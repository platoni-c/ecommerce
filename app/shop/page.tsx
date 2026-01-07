import Link from "next/dist/client/link";

const categories = [
    { name: "Shirts", slug: "shirts" },
    { name: "T-Shirts", slug: "tshirts" },
    { name: "Hoodies", slug: "hoodies" },
    { name: "Pants", slug: "pants" },
]

const Page = () => {
    return (
        <main className="p-10 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Shop</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/shop/${cat.slug}`}
                        className="border p-6 text-center rounded-sm transition-colors"
                    >
                        {cat.name}
                    </Link>
                ))}
            </div>
        </main>
    )
}
export default Page
