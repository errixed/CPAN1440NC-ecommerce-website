import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { CartContext } from "@/contexts/CartContext";
import useProducts from "@/hooks/useProducts";
import CategoryFilter from "@/components/products/filters/CategoryFilter";
import ProductSearch from "@/components/products/filters/ProductSearch";
import ProductsList from "@/components/products/ProductsList";
import { getFilterProducts } from "@/utils/getFilterProducts";

export default function ProductsPage() {
    const router = useRouter();
    const { handleCartAdd, handleCartRemove } = useContext(CartContext);
    const { products, loading } = useProducts();
    const [searchTerm, setSearchTerm] = useState("");

    const selectedCategory =
        typeof router.query.category === "string"
            ? router.query.category
            : "all";

    const categories = [
        "all",
        ...new Set(products.map((product) => product.category)),
    ];

    const filterProducts = getFilterProducts({ products, selectedCategory, searchTerm });

    function handleCategoryChange(category: string) {
        if (category === "all") {
            router.push("/products");
        } else {
            router.push(`/products?category=${category}`);
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-slate-600">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-8 py-12 space-y-10">
                <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl shadow-lg">
                    <div className="px-8 py-12 space-y-4">
                        <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
                            All Products
                        </p>

                        <h1 className="text-4xl font-bold">
                            Explore Our Product Collection
                        </h1>

                        <p className="text-gray-300 max-w-3xl leading-7">
                            Browse products by category, search for what you need,
                            and add your favorite items to the cart through a clean
                            and modern shopping experience.
                        </p>
                    </div>
                </section>

                <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                        <div>
                            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                                Filters
                            </p>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Find Products Faster
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <CategoryFilter
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onChange={handleCategoryChange}
                            />
                            <ProductSearch
                                searchTerm={searchTerm}
                                onChange={setSearchTerm}
                            />
                        </div>
                    </div>

                    <ProductsList
                        products={filterProducts}
                        handleCartAdd={handleCartAdd}
                        handleCartRemove={handleCartRemove}
                    />
                </section>
            </div>
        </div>
    );
}