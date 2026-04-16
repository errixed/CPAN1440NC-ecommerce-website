import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";

export default function ProductsList({
  products,
  handleCartAdd,
  handleCartRemove,
}: {
  products: Product[];
  handleCartAdd: (product: Product) => void;
  handleCartRemove: (product: Product) => void;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleCartAdd={handleCartAdd}
          handleCartRemove={handleCartRemove}
        />
      ))}
    </div>
  );
}