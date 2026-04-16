import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import Link from "next/link";

export default function TopRatedProducts({
  products,
  handleCartAdd,
  handleCartRemove,
}: {
  products: Product[];
  handleCartAdd: (product: Product) => void;
  handleCartRemove: (product: Product) => void;
}) {
  const topRatedProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Featured Collection
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            Top Rated Products
          </h2>
        </div>

        <Link
          href="/products"
          className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-700 transition"
        >
          View All
        </Link>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-2">
        {topRatedProducts.map((product) => (
          <div key={product.id} className="min-w-[250px] shrink-0">
            <ProductCard
              product={product}
              handleCartAdd={handleCartAdd}
              handleCartRemove={handleCartRemove}
            />
          </div>
        ))}
      </div>
    </section>
  );
}