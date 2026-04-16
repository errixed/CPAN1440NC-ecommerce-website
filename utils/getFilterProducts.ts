import { Product } from "@/types";

export function getFilterProducts({ products, selectedCategory, searchTerm }: { products: Product[]; selectedCategory: string; searchTerm: string }) {
  return products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesSearch =
      searchTerm.trim() === "" ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });
}