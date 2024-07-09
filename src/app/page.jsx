"use client"
import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';
import { GiSellCard } from 'react-icons/gi';
import useProduct from '@/Hooks/useProduct';

const Dashboard = () => {
  const { products, refetch, isLoading } = useProduct();
  const productsData = products.products || [];
  if (isLoading) return <div>Loading...</div>; 
  return (
    <div>
      <h1 className="text-5xl font-semibold mb-8">Dashboard</h1>
      <div className="flex items-center gap-10">
        {/* Total Items */}
        <div className="h-40 w-72 bg-[#17A2B8] flex flex-col justify-center items-center rounded-md">
          <div className="flex gap-4 items-center">
            <HiOutlineShoppingBag className="text-6xl text-white" />
            <div className="text-white">
              <h2 className="text-xl font-semibold">Total Items</h2>
              <h2 className="text-3xl font-semibold">{productsData?.length}</h2>
            </div>
          </div>
        </div>
        {/* Total Sell */}
        <div className="h-40 w-72 bg-[#6F42C1] flex flex-col justify-center items-center rounded-md">
          <div className="flex gap-4 items-center">
            <GiSellCard className="text-6xl text-white" />
            <div className="text-white">
              <h2 className="text-xl font-semibold">Total Sell</h2>
              <h2 className="text-3xl font-semibold">2354</h2>
            </div>
          </div>
        </div>
        {/* Total Earning */}
        <div className="h-40 w-72 bg-[#1CAF9A] flex flex-col justify-center items-center rounded-md">
          <div className="flex gap-4 items-center">
            <RiMoneyRupeeCircleLine className="text-6xl text-white" />
            <div className="text-white">
              <h2 className="text-xl font-semibold">Total Earning</h2>
              <h2 className="text-3xl font-semibold">$ 2354</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Pie Chart */}
      <div className="mt-10">

      </div>
    </div>
  );
};

export default Dashboard;
