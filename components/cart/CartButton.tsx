import { Product } from "@/types";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function CartButton({ product, handleCartAdd, handleCartRemove }:
    { product: Product; handleCartAdd: (product: Product) => void; handleCartRemove: (product: Product) => void; }) {

    const { cartProducts } = useContext(CartContext);

    const quantity = cartProducts.filter(
        (cartProduct) => cartProduct.id === product.id
    ).length;

    if (quantity === 0) {
        return (
            <button onClick={() => handleCartAdd(product)} className="border rounded px-4 py-2 hover:bg-black hover:text-white transition">
                Add to Cart
            </button>
        );
    }

    return (
        <div className="flex items-center gap-3">
            <button onClick={() => handleCartRemove(product)} className="border rounded px-3 py-1 hover:bg-gray-200">
                -
            </button>
            <span className="font-medium">{quantity}</span>
            <button onClick={() => handleCartAdd(product)} className="border rounded px-3 py-1 hover:bg-gray-200">
                +
            </button>
        </div>
    );
};