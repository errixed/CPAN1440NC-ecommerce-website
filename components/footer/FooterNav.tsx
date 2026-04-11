import Link from "next/link";

export default function HeaderNav() {
    return (
<div className="flex justify-center gap-6 py-4 text-sm">
  <Link href="/" className="hover:underline">
    Home
  </Link>

  <Link href="/products" className="hover:underline">
    All Products
  </Link>

  <Link href="/cart" className="hover:underline">
    Cart
  </Link>
</div>
    )
}