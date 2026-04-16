import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        res.status(200).json(response.data.products);
    } catch {
        res.status(500).json({ message: "Error fetching products" });
    }
}