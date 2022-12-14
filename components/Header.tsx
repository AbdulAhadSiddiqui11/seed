import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

import { Category } from '../types/post';

import { getCategories } from '../services';

const Header: NextPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-[#03DAC6] py-8'>
                <div className='flex items-center justify-center md:float-left'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white'>
                            {'<Seed /> '}
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category: Category) => (
                        <Link href={`/category/${category.slug}`} key={category.slug}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;