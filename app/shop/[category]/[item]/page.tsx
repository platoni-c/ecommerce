import { notFound } from "next/navigation";
import { CategoryKey, productsByCategory } from "@/app/shop/products";
import ProductClient from "./ProductClient";

export function generateStaticParams() {
  return (Object.entries(productsByCategory) as [CategoryKey, readonly { id: string }[]][])
    .flatMap(([category, products]) =>
      products.map((product) => ({
        category,
        item: product.id,
      })),
    );
}

type PageProps = {
  params: Promise<{
    category: CategoryKey
    item: string
  }>
}

const Page = async ({ params }: PageProps) => {
  const { category, item } = await params;

  const products = productsByCategory[category];
  if (!products) {
    notFound();
  }

  const product = products.find(p => p.id === item);
  if (!product) {
    notFound();
  }

  return <ProductClient product={product} category={category} />;
};

export default Page;
