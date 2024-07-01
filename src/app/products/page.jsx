"use client"
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import useProduct from '@/Hooks/useProduct';

const ProductsComponent = () => {
    const { products, refetch, isLoading } = useProduct();
    const productsData = products.products || [];
    if (isLoading) return <div>Loading...</div>; 
    return (
        <div className='px-10'>
            <Table>
                <TableHead className='bg-[#FF7F3E]'>
                    <TableHeadCell>Product name</TableHeadCell>
                    <TableHeadCell>Color</TableHeadCell>
                    <TableHeadCell>Category</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Edit</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {productsData?.map((product, index) => (
                        <TableRow key={index} className="bg-[#686D76] text-black dark:border-gray-700 dark:bg-black">
                            <TableCell className="whitespace-nowrap font-medium text-black dark:text-black">
                                {product.name}
                            </TableCell>
                            <TableCell>{product.color}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>${product.price}</TableCell>
                            <TableCell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductsComponent;
