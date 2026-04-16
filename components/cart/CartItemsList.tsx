import { Product } from "@/types";
import CartItemSummary from "@/components/cart/CartItemSummary";

export default function CartItemsList({
  groupedProducts,
  cartProducts,
}: {
  groupedProducts: Product[];
  cartProducts: Product[];
}) {
  return (
    <div className="space-y-4">
      {groupedProducts.map((product) => (
        <div
          key={product.id}
          className="border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-slate-900">
              {product.title}
            </h3>

            <p className="text-slate-500">
              ${product.price.toFixed(2)} each
            </p>
          </div>

          <CartItemSummary
            productId={product.id}
            price={product.price}
            cartProducts={cartProducts}
          />
        </div>
      ))}
    </div>
  );
}