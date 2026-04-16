import Link from "next/link";

export default function FooterNav() {
    return (
        <nav className="flex flex-col gap-3 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition">
                Home
            </Link>

            <Link href="/products" className="text-gray-400 hover:text-white transition">
                Products
            </Link>

            <Link href="/cart" className="text-gray-400 hover:text-white transition">
                Cart
            </Link>
        </nav>
    );
}