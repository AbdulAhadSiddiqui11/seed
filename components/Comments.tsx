import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';
import { Comment } from '../types/comment';
interface CommentsProps {
    slug: string;
}

const Comments: NextPage<CommentsProps> = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((res) => setComments(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {comments.length > 0 && (
                <div className='bg-[#1F1B24] shadow-lg rounded-lg p-8 pb-12 mb-8 text-white'>
                    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                        {comments.length}
                        {' '}
                        Comments
                    </h3>
                    {comments.map((comment: Comment) => (
                        <div className='mb-4 py-4 px-4 bg-[#372f40] rounded-lg' key={comment.createdAt}>
                            <p className='mb-4'>
                                <span className='font-semibold'>
                                    {comment.name}
                                </span>
                                <span className='text-gray-400'>
                                    {' '}
                                    on
                                    {' '}
                                    {moment(comment.createdAt).format('MMMM Do YYYY, h:mm A')}
                                </span>
                            </p>
                            <p className='whitespace-pre-line text-gray-200 w-full'>
                                {parse(comment.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Comments;