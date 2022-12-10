import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

import { Author } from '../types/postDetails';

interface AuthorProps {
    author: Author;
}

const Author: NextPage<AuthorProps> = ({ author }) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-[#BB86FC]'>
            <div className='absolute left-0 right-0 -top-14 flex items-center justify-center'>
                <Image
                    alt={author.name}
                    unoptimized
                    height='115'
                    width='115'
                    className='align-middle rounded-full border-2'
                    src={author.photo.url}
                />
            </div>
            <h3 className='text-black my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-black text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author