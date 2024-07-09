import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
    const { refetch, data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch('/products/api/get');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        },
    });

    return { products, refetch };
};

export default useProduct;
