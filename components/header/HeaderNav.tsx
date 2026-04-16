import Link from "next/link";

export default function HeaderNav() {
    return (
        <nav className="flex items-center gap-3 text-sm font-medium">
            <Link href="/" className="px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 transition">
                Home
            </Link>

            <Link href="/products" className="px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 transition">
                Products
            </Link>

            <Link href="/cart" className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-400 transition">
                Cart
            </Link>
        </nav>
    );
}