import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { products, loading };
}