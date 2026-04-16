import { Product } from "@/types";

export function getGroupedProducts(cartProducts: Product[]) {
  return cartProducts.filter((product, index) => {
    const firstIndex = cartProducts.findIndex(
      (item) => item.id === product.id
    );

    return firstIndex === index;
  });
}