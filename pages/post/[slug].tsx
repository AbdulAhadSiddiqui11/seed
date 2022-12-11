import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router';

import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components';
import { Post } from '../../types/post';
import { PostDetailInterface } from '../../types/postDetails';

interface PostDetailsProps {
    post: PostDetailInterface;
}

const PostDetails: NextPage<PostDetailsProps> = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className='text-white container mx-auto px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const data: PostDetailInterface = await getPostDetails(params.slug);

    if (!data) return {
        notFound: true,
    }

    return {
        props: {
            post: data,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const posts = await getPosts();

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.node.slug,
        },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}