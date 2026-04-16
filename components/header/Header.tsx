import HeaderNav from "@/components/header/HeaderNav";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
                <Link href="/" className="flex flex-col">
                    <span className="text-3xl font-bold tracking-wide">
                        OnlineShop
                    </span>
                    <span className="text-sm text-gray-300">
                        Modern Online Store
                    </span>
                </Link>

                <HeaderNav />
            </div>
        </header>
    );
}