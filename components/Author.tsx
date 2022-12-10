import { NextPage } from 'next'
import React from 'react'

import { Author } from '../types/postDetails';

interface AuthorProps {
    author: Author;
}

const Author: NextPage<AuthorProps> = ({ author }) => {
    return (
        <div>Author</div>
    )
}

export default Author