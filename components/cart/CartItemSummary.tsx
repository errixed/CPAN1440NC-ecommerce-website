import { Product } from "@/types";

export default function CartItemSummary({
  productId,
  price,
  cartProducts,
}: {
  productId: number;
  price: number;
  cartProducts: Product[];
}) {
  const totalQuantity = cartProducts.filter(
    (item) => item.id === productId
  ).length;

  const totalPrice = (totalQuantity * price).toFixed(2);

  return (
    <div className="flex gap-6">
      <div className="bg-slate-100 rounded-2xl px-4 py-3 min-w-[100px] text-center">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Quantity
        </p>
        <p className="text-xl font-semibold text-slate-900">
          {totalQuantity}
        </p>
      </div>

      <div className="bg-slate-100 rounded-2xl px-4 py-3 min-w-[120px] text-center">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Total
        </p>
        <p className="text-xl font-semibold text-orange-500">
          ${totalPrice}
        </p>
      </div>
    </div>
  );
}