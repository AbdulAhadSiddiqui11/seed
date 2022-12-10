import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { Category } from '../types/post';
import { getCategories } from '../services';

const Categories: NextPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((result) => setCategories(result))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className='bg-[#1F1B24] shadow-lg rounded-lg p-8 mb-8 pb-12'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4 text-white'>
                Categories
            </h3>
            {categories.map((category: Category) => (
                <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                >
                    <span className='transition duration-200 transform hover:-translate-y-1 cursor-pointer block pb-3 mb-3 text-white'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories;