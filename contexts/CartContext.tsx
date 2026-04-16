import { Product, CartContextType } from "@/types";
import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext<CartContextType>({
    cartProducts: [],
    setCartProducts: () => { },
    handleCartAdd: () => { },
    handleCartRemove: () => { },
    handleClearCart: () => { },
    cartGrandTotal: 0,
});

export default function CartProvider({ children }: { children: ReactNode }) {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);

    function handleCartAdd(productToAdd: Product) {
        setCartProducts((prev) => [...prev, productToAdd]);
    }

    function handleCartRemove(productToRemove: Product) {
        setCartProducts((prev) => {
            const index = prev.findIndex(
                (product) => product.id === productToRemove.id
            );

            if (index === -1) return prev;

            const updatedCart = [...prev];
            updatedCart.splice(index, 1);

            return updatedCart;
        });
    }

    function handleClearCart() {
        setCartProducts([]);
    }

    const cartGrandTotal = cartProducts.reduce((total, product) => {
        return total + product.price;
    }, 0);

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, handleCartAdd, handleCartRemove, handleClearCart, cartGrandTotal }} >
            {children}
        </CartContext.Provider>
    );
}