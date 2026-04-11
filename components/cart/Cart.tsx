import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import CartTotal from "./CartTotal";

export default function Cart() {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const groupedProducts = cartProducts.filter((product, index) => {
    const firstIndex = cartProducts.findIndex(
      (item) => item.id === product.id
    );

    return firstIndex === index;
  });

  function handleClearCart() {
    setCartProducts([]);
  }

  const cartGrandTotal = cartProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {cartProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {groupedProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{product.title}</h3>
              </div>

              <CartTotal productId={product.id} price={product.price} cartProducts={cartProducts} />
            </div>
          ))}

          <div className="border-t pt-4 flex justify-between items-center">
            <button onClick={handleClearCart} className="border rounded px-4 py-2 hover:bg-red-500 hover:text-white transition">
              Clear Cart
            </button>

            <p className="text-lg font-bold">
              Cart Total: ${cartGrandTotal.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}