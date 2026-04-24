import { useRouter } from "next/router";
import { useEffect, useState, lazy, Suspense } from "react";
import { Product } from "@/types";
import axios from "axios";
import ProductImages from "@/components/products/details/ProductImages";
import ProductTags from "@/components/products/details/ProductTags";
const ProductReviews = lazy(() => import("@/components/products/details/ProductReviews"))

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios.get(`/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        setProduct(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      document.title = product.title;
    } else {
      document.title = "Product not found";
    }
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-8">
        <section className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div className="space-y-3">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Product Details
            </p>

            <h1 className="text-4xl font-bold text-slate-900">
              {product.title}
            </h1>

            <p className="text-slate-600 leading-7 max-w-3xl">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Price
              </p>
              <p className="text-3xl font-semibold text-orange-500">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Category
              </p>

              <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-sm border border-slate-200 capitalize w-fit">
                {product.category}
              </span>
            </div>

            <ProductTags tags={product.tags} />
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <ProductImages images={product.images} title={product.title} />
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductReviews reviews={product.reviews} />
          </Suspense>
        </section>

        <div>
          <button
            onClick={() => router.back()}
            className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}