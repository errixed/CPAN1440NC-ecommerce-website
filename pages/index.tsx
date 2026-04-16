import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import useProducts from "@/hooks/useProducts";
import TopRatedProducts from "@/components/home/TopRatedProducts";
import ShopByCategory from "@/components/home/ShopByCategory";
import Link from "next/link";

export default function HomePage() {
  const { handleCartAdd, handleCartRemove } = useContext(CartContext);
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="max-w-3xl space-y-6">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
              Modern Online Shopping
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Find the Best Products for Your Everyday Life
            </h1>

            <p className="text-gray-300 text-lg leading-8">
              Browse top rated products, discover popular categories, and enjoy
              a clean shopping experience with fast checkout and easy cart
              management.
            </p>

            <div className="flex gap-4">
              <Link
                href="/products"
                className="bg-orange-500 hover:bg-orange-400 transition px-6 py-3 rounded-full font-medium"
              >
                Shop Now
              </Link>

              <Link
                href="/cart"
                className="border border-white hover:bg-white hover:text-slate-900 transition px-6 py-3 rounded-full font-medium"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        <TopRatedProducts
          products={products}
          handleCartAdd={handleCartAdd}
          handleCartRemove={handleCartRemove}
        />

        <ShopByCategory products={products} />
      </div>
    </div>
  );
}