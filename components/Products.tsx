import { Product } from "@/types";
import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import CartButton from "./cart/CartButton";
import Link from "next/link";

export const products = [
    {
        id: 1,
        title: "Camera",
        price: 1100,
    },
    {
        id: 2,
        title: "Ipad",
        price: 1270,
    },
    {
        id: 3,
        title: "Airpods",
        price: 110,
    },
];

export default function Products() {
    const { cartProducts, setCartProducts } = useContext(CartContext);

    function handleCartAdd(productToAdd: Product) {
        setCartProducts([...cartProducts, productToAdd]);
    }

    function handleCartRemove(productToRemove: Product) {
        const index = cartProducts.findIndex(
            (product) => product.id === productToRemove.id
        );

        if (index === -1) return;

        const updatedCart = [...cartProducts];
        updatedCart.splice(index, 1);
        setCartProducts(updatedCart);
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 shadow-sm flex flex-col gap-3">
                    <Link href={`/product-details/${product.id}`} className="text-lg font-semibold hover:underline">
                        {product.title}
                    </Link>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <CartButton product={product} handleCartAdd={handleCartAdd} handleCartRemove={handleCartRemove} />
                </div>
            ))}
        </div>
    );
}