import { NextPage } from 'next'
import React from 'react'

interface CommentsProps {
    slug: string;
}

const Comments: NextPage<CommentsProps> = ({ slug }) => {
    return (
        <div>Comments</div>
    )
}

export default Comments