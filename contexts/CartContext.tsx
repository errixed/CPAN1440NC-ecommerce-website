import { Product, CartContextType } from "@/types";
import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext<CartContextType>({
    cartProducts: [],
    setCartProducts: () => { },
});

export default function CartProvider({ children }: { children: ReactNode }) {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartContext.Provider>
    );
}
