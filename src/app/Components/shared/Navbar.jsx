import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHome } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";

const Navbar = () => {
    const navLinks = [
        {
            title: "Dashboard",
            path: "/",
            icon:  <FaHome />
        },
        {
            title: "Products",
            path: "/products",
            icon: <HiShoppingBag />
        },
        {
            title: "Products Add",
            path: "/Product-Add",
            icon: <HiShoppingBag />
        },
    ];

    return (
        <div>
            <div className="flex justify-center items-center">
                <Image alt='profile' src="/shop-logo.png" height={150} width={150} />
            </div>

            <div className='text-white flex flex-col px-5 gap-2 text-xl font-medium mt-8'>
                {
                    navLinks.map((item) => (
                        <Link href={item.path} key={item.path} className="flex items-center gap-2">
                            {item.icon && <span>{item.icon}</span>}
                            {item.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Navbar;
