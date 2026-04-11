import { Dispatch, SetStateAction } from "react";


export interface Product {
  id: number;
  title: string;
  price: number;
}

// export interface GroupedProduct {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
//   totalPrice: number;
// }

export interface CartContextType {
  cartProducts: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
}