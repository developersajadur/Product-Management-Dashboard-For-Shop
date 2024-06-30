import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navLinks = [
        {
            title: "Dashboard",
            path: "/dashboard"
        },
    ]
    return (
        <div className="">
            <div className="flex justify-center items-center">
            <Image alt='profile' src="/shop-logo.png" height={150} width={150}></Image>
            </div>
            
            <div className='text-white flex flex-col px-5 gap-2 text-xl font-medium mt-8'>
           {
            navLinks.map((item) => (
               <Link href={item?.path} key={item?.path}>{item?.title}</Link>
            ))
           }
        </div>
        </div>
    );
};

export default Navbar;