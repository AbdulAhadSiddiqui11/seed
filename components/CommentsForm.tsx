import { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';

import { submitComment } from '../services';
interface CommentsFormProps {
    slug: string;
}


const CommentsForm: NextPage<CommentsFormProps> = ({ slug }) => {
    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentElement.current as HTMLTextAreaElement;
        const { value: name } = nameElement.current as HTMLInputElement;
        const { value: email } = emailElement.current as HTMLInputElement;
        const { checked: storeData } = storeDataElement.current as HTMLInputElement;;

        if (!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentData = { name, email, comment, slug };

        if (storeData && window.localStorage) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('email');
        }

        submitComment(commentData)
            .then((res) => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            });
    }

    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const commentElement = useRef<HTMLTextAreaElement>(null);
    const nameElement = useRef<HTMLInputElement>(null);
    const emailElement = useRef<HTMLInputElement>(null);
    const storeDataElement = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (window.localStorage && nameElement.current && emailElement.current) {
            nameElement.current.value = window.localStorage.getItem('name') as string;
            emailElement.current.value = window.localStorage.getItem('email') as string;
        }
    }, [])

    return (
        <div className='bg-[#1F1B24] shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a reply</h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea
                    ref={commentElement}
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Comment'
                    name='Comment'
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <input
                    type='text'
                    ref={nameElement}
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Name'
                    name='Name'
                />
                <input
                    type='email'
                    ref={emailElement}
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Email'
                    name='Email'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <div>
                    <input
                        ref={storeDataElement}
                        type='checkbox'
                        id='storeData'
                        name='storeData'
                        value='true'
                    />
                    <label className='text-gray-300 cursor-pointer ml-2' htmlFor='storeData'>Save my email and name for the next time I comment.</label>
                </div>
            </div>
            {error && <p className='text-xs text-[#CF6679]'>All fields are required</p>}
            <div className='mt-8'>
                <button
                    type='button'
                    onClick={handleCommentSubmission}
                    className='transition duration-500 ease hover:bg-[#03DAC6] text-black inline-block bg-[#018786] text-lg rounded-full px-8 py-3 cursor-pointer'
                >
                    Post Comment
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
            </div>
        </div>
    );
}

export default CommentsForm;