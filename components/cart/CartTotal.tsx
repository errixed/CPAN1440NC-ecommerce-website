import { Product } from "@/types";

export default function CartTotal({ productId, price, cartProducts }: { productId: number, price: number, cartProducts: Product[] }) {
  const totalQuantity = cartProducts.filter((item) => item.id === productId).length
  const totalPrice = (totalQuantity * price).toFixed(2);
  return (
    <div className="text-right">
      <p className="text-sm text-gray-500">Quantity: {totalQuantity}</p>
      <p className="font-semibold">Total: ${totalPrice}</p>
    </div>
  );

}