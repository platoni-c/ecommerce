import Link from "next/dist/client/link";

const categories = [
    { name: "Shirts", slug: "shirts" },
    { name: "T-Shirts", slug: "tshirts" },
    { name: "Hoodies", slug: "hoodies" },
    { name: "Pants", slug: "pants" },
]

const Page = () => {
    return (
        <main className="p-4 sm:p-10 min-h-screen">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Shop By Category</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/shop/${cat.slug}`}
                        className="border p-6 sm:p-8 text-center rounded-sm transition-colors hover:bg-gray-50 font-medium text-lg"
                    >
                        {cat.name}
                    </Link>
                ))}
            </div>
        </main>
    )
}
export default Page
