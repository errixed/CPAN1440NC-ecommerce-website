import { Product } from "@/types";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function CartButton({
    product,
    handleCartAdd,
    handleCartRemove,
}: {
    product: Product;
    handleCartAdd: (product: Product) => void;
    handleCartRemove: (product: Product) => void;
}) {
    const { cartProducts } = useContext(CartContext);

    const quantity = cartProducts.filter(
        (cartProduct) => cartProduct.id === product.id
    ).length;

    if (quantity === 0) {
        return (
            <button
                onClick={() => handleCartAdd(product)}
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-medium py-3 rounded-2xl transition"
            >
                Add to Cart
            </button>
        );
    }

    return (
        <div className="flex items-center justify-between bg-slate-100 rounded-2xl p-2">
            <button
                onClick={() => handleCartRemove(product)}
                className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:bg-slate-200 transition text-lg font-bold"
            >
                -
            </button>

            <span className="font-semibold text-slate-800 text-lg">
                {quantity}
            </span>

            <button
                onClick={() => handleCartAdd(product)}
                className="w-10 h-10 rounded-xl bg-slate-900 text-white hover:bg-slate-700 transition text-lg font-bold"
            >
                +
            </button>
        </div>
    );
}