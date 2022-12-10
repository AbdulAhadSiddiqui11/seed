import { NextPage } from 'next'
import React from 'react'

import { PostDetailInterface } from '../types/postDetails';

interface PostDetailProps {
    post: PostDetailInterface;
}

const PostDetail: NextPage<PostDetailProps> = ({ post }) => {
    return (
        <div>PostDetail</div>
    )
}

export default PostDetail