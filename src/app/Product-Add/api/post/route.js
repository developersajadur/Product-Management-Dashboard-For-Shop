import { ConnectDB } from "@/lib/ConnectDB";

export const POST = async (req) => {
    try {
        const db = await ConnectDB();
        const productsCollection = db.collection('products');
        const { name, price, category, description } = await req.json();

        const newProduct = {
            name,
            price,
            category,
            description,
            time: new Date(),
        };

        const result = await productsCollection.insertOne(newProduct);

        return new Response(JSON.stringify({ success: true, data: result }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to add product' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
