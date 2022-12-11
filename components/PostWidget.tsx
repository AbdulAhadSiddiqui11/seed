import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getCategories, getRecentPosts, getSimilarPosts } from '../services';
import { RecentPost } from '../types/recentPost'; // This is the type for the RecentPost/RelatedPost interface
interface PostWidgetProps {
    categories?: string[];
    slug?: string;
}

const PostWidget: NextPage<PostWidgetProps> = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    console.log(getCategories);
    useEffect(() => {
        if (slug && categories) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
                .catch((error) => console.error(error));
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
                .catch((error) => console.error(error));
        }
    }, [slug]);

    //console.log(relatedPosts);

    return (
        <div className='bg-[#1F1B24] shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4 text-white'>
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post: RecentPost) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-16 flex-none'>
                        <img
                            alt={post.title}
                            height='60px'
                            width='60px'
                            className='align-middle rounded-lg'
                            src={post.featuredImage.url}
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-400 font-xs'>
                            {moment(post.createdAt).format('MMM Do, YYYY')}
                        </p>
                        <Link
                            key={post.slug}
                            href={`/post/${post.slug}`}
                            className='text-white text-md'
                        >
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostWidget;