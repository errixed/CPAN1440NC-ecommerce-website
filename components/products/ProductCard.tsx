import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";
import CartButton from "@/components/cart/CartButton";

export default function ProductCard({
    product,
    handleCartAdd,
    handleCartRemove,
}: {
    product: Product;
    handleCartAdd: (product: Product) => void;
    handleCartRemove: (product: Product) => void;
}) {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-md hover:shadow-xl transition space-y-4">
            <div className="bg-slate-100 rounded-2xl p-4 flex justify-center">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="h-[180px] w-auto object-contain"
                />
            </div>

            <div className="space-y-2">
                <Link
                    href={`/product-details/${product.id}`}
                    className="block text-lg font-semibold text-slate-900 hover:text-orange-500 transition"
                >
                    {product.title}
                </Link>

                <p className="text-2xl font-bold text-slate-900">
                    ${product.price.toFixed(2)}
                </p>

                <p className="text-sm text-slate-500">
                    Rating: <span className="font-medium text-slate-700">{product.rating}</span>
                </p>
            </div>

            <CartButton
                product={product}
                handleCartAdd={handleCartAdd}
                handleCartRemove={handleCartRemove}
            />
        </div>
    );
}