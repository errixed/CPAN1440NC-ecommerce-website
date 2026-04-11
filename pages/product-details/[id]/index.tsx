import { useRouter } from "next/router";
import { products } from "@/components/Products";
import { useEffect } from "react";
// import { Product } from "@/types";

export default function ProductDetailsPage() {
  const router = useRouter();
  // const productId = router.query.id;

  // const [foundProduct, setFoundProduct] = useState<Product | undefined | null>(
  //   products.find((product) => product.id === Number(productId)),
  // );

  const productId = Number(router.query.id);
  const foundProduct = products.find((product) => product.id === productId);

  useEffect(() => {
      if (foundProduct) document.title = foundProduct?.title;
      else document.title = "Product not found";
    },
    [foundProduct],
  );

return foundProduct ? (
  <div className="max-w-2xl mx-auto border rounded-xl p-6 shadow-sm space-y-4">
    <h1 className="text-2xl font-bold">Product Details</h1>
    <div className="space-y-2">
      <p>
        <span className="font-semibold">ID:</span> {foundProduct.id}
      </p>
      <p>
        <span className="font-semibold">Title:</span> {foundProduct.title}
      </p>
      <p>
        <span className="font-semibold">Price:</span> ${foundProduct.price.toFixed(2)}
      </p>
    </div>

    <button onClick={() => router.back()} className="border rounded px-4 py-2 hover:bg-black hover:text-white transition">
      Go Back
    </button>
  </div>
) : (
  <div className="max-w-xl mx-auto border rounded-xl p-6 text-center shadow-sm">
    <h1 className="text-xl font-bold mb-2">Product not found</h1>

    <button onClick={() => router.back()} className="border rounded px-4 py-2 hover:bg-black hover:text-white transition">
      Back to Products
    </button>
  </div>
);
}
