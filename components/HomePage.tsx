import Products from "@/components/Products";
import Categories from "@/components/Categories"

export default function HomePage() {
    return (
        <div>
            <h3>Home</h3>
            <Categories />
            <Products />
        </div>
    )
}