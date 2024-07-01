import { ConnectDB } from "@/lib/ConnectDB";

export const GET = async () => {
    try {
        const db = await ConnectDB();
        const productsCollection = db.collection('products');
        const products = await productsCollection.find().toArray();
        return new Response(JSON.stringify({ products }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
