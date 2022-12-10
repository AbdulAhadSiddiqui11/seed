import { NextPage } from 'next'
import React from 'react'

interface CommentsFormProps {
    slug: string;
}

const CommentsForm: NextPage<CommentsFormProps> = ({ slug }) => {
    return (
        <div>CommentsForm</div>
    )
}

export default CommentsForm