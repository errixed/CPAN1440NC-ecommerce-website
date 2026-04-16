import { Dispatch, SetStateAction } from "react";

export interface Review {
    rating: number;
    comment: string;
    reviewerName: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    tags: string[];
    reviews: Review[];
    images: string[];
    thumbnail: string;
    rating: number;
}

export interface CartContextType {
    cartProducts: Product[];
    setCartProducts: Dispatch<SetStateAction<Product[]>>;
    handleCartAdd: (product: Product) => void;
    handleCartRemove: (product: Product) => void;
    handleClearCart: () => void;
    cartGrandTotal: number;
}