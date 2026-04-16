import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import Link from "next/link";
import CartItemsList from "@/components/cart/CartItemsList";
import { getGroupedProducts } from "@/utils/getGroupedProducts";

export default function CartPage() {
  const { cartProducts, handleClearCart, cartGrandTotal } = useContext(CartContext);
  const groupedProducts = getGroupedProducts(cartProducts);

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-12 space-y-8">
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl shadow-lg">
          <div className="px-8 py-12 space-y-4">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
              Your Cart
            </p>

            <h1 className="text-4xl font-bold">
              Review Your Selected Products
            </h1>

            <p className="text-gray-300 max-w-3xl leading-7">
              Manage quantities, remove items, and continue to checkout when
              you are ready to complete your order.
            </p>
          </div>
        </section>

        {cartProducts.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Cart is empty
            </h2>

            <p className="text-slate-500">
              You have not added any products yet.
            </p>

            <Link
              href="/products"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-full transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <CartItemsList
                groupedProducts={groupedProducts}
                cartProducts={cartProducts}
              />
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Cart Total
                </p>

                <p className="text-4xl font-bold text-orange-500">
                  ${cartGrandTotal.toFixed(2)}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleClearCart}
                  className="border border-slate-300 hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-full transition"
                >
                  Clear Cart
                </button>

                <Link
                  href="/checkout"
                  className="bg-slate-900 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition text-center"
                >
                  Go to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}