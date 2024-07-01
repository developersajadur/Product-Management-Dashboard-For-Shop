import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
    const { refetch, data: products = [] } = useQuery({
        queryKey: ["products"], // Unique identifier for the query
        queryFn: async () => {
            const response = await fetch('/products/api/get');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming your API returns JSON data
        },
    });

    return { products, refetch }; // Return products and refetch function
};

export default useProduct;
