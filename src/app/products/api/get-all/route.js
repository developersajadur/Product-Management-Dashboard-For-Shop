import { ConnectDB } from "@/lib/ConnectDB";

export const GET = async () => {
    try {
        const db = await ConnectDB();
        const productsCollection = db.collection('products');

        // Find all products
        const products = await productsCollection.find().toArray();
        console.log(products);
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
    }
}
