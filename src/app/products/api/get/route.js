// File: src/pages/api/products.js

import { ConnectDB } from "@/lib/ConnectDB";

export const GET = async () => {
    try {
        const db = await ConnectDB();
        const productsCollection = db.collection('products');
        // Find all products
        const products = await productsCollection.find().toArray();
        return Response.json(products)
    } catch (error) {
        console.error("Failed to fetch products", error);
    }
};
