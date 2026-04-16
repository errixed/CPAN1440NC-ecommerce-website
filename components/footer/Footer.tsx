import FooterNav from "@/components/footer/FooterNav";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-3">OnlineShop</h3>
                        <p className="text-gray-400 text-sm leading-6">
                            Discover the best products, enjoy a smooth shopping
                            experience, and manage your cart with ease.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <FooterNav />
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Contact</h4>
                        <p className="text-sm text-gray-400">
                            example@domain.com
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Toronto, Ontario
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-400">
                    &copy; 2026 Seyedamirhossein Shekarabi & Dylan Daniel Penner Low. Designed for a modern shopping experience.
                </div>
            </div>
        </footer>
    );
}