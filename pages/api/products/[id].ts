import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        res.status(200).json(response.data);
    } catch {
        res.status(500).json({ message: "Error fetching product" });
    }
}