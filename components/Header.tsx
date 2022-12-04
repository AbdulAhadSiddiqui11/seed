import React, { useContext } from 'react';
import Link from 'next/link';

import { Category } from '../types';
import { NextPage } from 'next';

const categories: Category[] = [
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextjs' },
    { name: 'Tailwind', slug: 'tailwind' },
]

const Header: NextPage = () => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-[#03DAC6] py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white'>
                            Seed
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
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