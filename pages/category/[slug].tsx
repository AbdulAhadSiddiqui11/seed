import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import { Post } from '../../types/categoryPosts';


interface CategoryPostProps {
    posts: Post[];
}

const CategoryPost: NextPage<CategoryPostProps> = ({ posts }) => {
    //console.log(posts)
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    {posts.map((post: Post, index: number) => (
                        <PostCard key={index} post={post.node} />
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }: { params: { slug: string } }) {
    const posts: Post[] = await getCategoryPost(params.slug);

    if (!posts) return {
        notFound: true,
    }

    return {
        props: { posts },
        revalidate: 10,
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const categories = await getCategories();

    const paths = categories.map(({ slug }: { slug: string }) => ({ params: { slug } }));

    return {
        paths,
        fallback: 'blocking',
    };
}