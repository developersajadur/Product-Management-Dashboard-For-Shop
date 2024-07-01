"use client";
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchProducts = async () => {
    const response = await fetch('/products/api/get');
    return response.json();
};

const Products = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {data?.products?.map((product) => (
                    <li key={product.name}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
