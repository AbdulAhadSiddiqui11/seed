import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Post } from '../types/post';

import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

interface HomeProps {
  postNodes: Post[];
}

const Home: NextPage<HomeProps> = ({ postNodes }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Seed - A Software Engineering blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {postNodes.map((post: Post) => (<PostCard key={post.node.title} post={post.node} />))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const postNodes = (await getPosts()) || [];
  return {
    props: {
      // sort post notes by date in descending order
      postNodes: postNodes.reverse(),
    },
    revalidate: 60,
  };
}

export default Home;
