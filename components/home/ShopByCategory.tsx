import Link from "next/link";
import { Product } from "@/types";

export default function ShopByCategory({
  products,
}: {
  products: Product[];
}) {
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
      <div>
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
          Browse Categories
        </p>

        <h2 className="text-3xl font-bold text-slate-900">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/products?category=${category}`}
            className="bg-slate-900 text-white rounded-2xl p-6 text-center capitalize hover:bg-orange-500 transition font-medium shadow"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}