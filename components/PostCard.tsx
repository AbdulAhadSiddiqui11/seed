import React from 'react';
import { NextPage } from 'next';

import { Post } from '../types';

interface PostCardProps {
    post: Post;
}

const PostCard: NextPage<PostCardProps> = ({ post }) => {
    return (
        <div>
            {post.title}
            {post.excerpt}
        </div>
    )
}

export default PostCard;