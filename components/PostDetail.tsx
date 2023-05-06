import { NextPage } from 'next'
import React from 'react';
import moment from 'moment';

import { PostDetailInterface, Child, Child2, Child3 } from '../types/postDetails';

interface PostDetailProps {
    post: PostDetailInterface;
}

const PostDetail: NextPage<PostDetailProps> = ({ post }) => {
    const getContentFragment = (index: number, text: any, obj: any, type: string = ""): any => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<strong key={index}>{text}</strong>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-two':
                return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <div className='flex justify-center items-center'>
                        <img
                            key={index}
                            alt={obj.title}
                            height={obj.height}
                            width={obj.width}
                            src={obj.src}
                            className='rounded-lg'
                        />
                    </div>
                );
            case 'code-block':
                return (
                    <div>
                        <pre key={index} className="bg-gray-800 text-white rounded-md p-4 my-6 overflow-x-auto">
                            <code>{text.map((child: Child3, childIndex: number) => (
                                <React.Fragment key={childIndex}>{child.code ? child.text : <br />}</React.Fragment>
                            ))}</code>
                        </pre>
                    </div>

                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className='bg-[#1F1B24] shadow-lg rounded lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md mb-6'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='object-top h-full w-full rounded-t-lg'
                />
            </div>
            <div className='px-4 lg:px-0'>
                <div className='flex items-center mb-8 w-full'>
                    <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                        <img
                            alt={post.author.name}
                            height='30px'
                            width='30px'
                            className='align-middle rounded-full'
                            src={post.author.photo.url}
                        />
                        <p className='text-white inline align-middle ml-2 text-lg'>
                            {post.author.name}
                        </p>
                    </div>
                    <div className='font-medium text-gray-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#03DAC6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className='text-white'>
                            {moment(post.createdAt).format('MMM Do, YYYY')}
                        </span>
                    </div>
                </div>
                <h1 className='mb-8 text-3xl font-semibold text-white'>{post.title}</h1>
                <div className='text-justify'>
                    {post.content.raw.children.map((typeObj: Child, index: number) => {
                        if (typeObj.type === 'code-block') {
                            return (
                                typeObj.children.map((item: Child2, itemindex: number) => {
                                    return getContentFragment(itemindex, item.children, item, typeObj.type);
                                })
                            )
                        }
                        const children: any = typeObj.children.map((item: Child2, itemindex: number) => getContentFragment(itemindex, item.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>
        </div>
    )
}

export default PostDetail;