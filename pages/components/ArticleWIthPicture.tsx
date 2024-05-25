import React from 'react'

interface ArticleWithPictureProps {
    title: string
    description: string
}

const ArticleWithPicture: React.FC<ArticleWithPictureProps> = ({ title, description }) => {
    return (
        <div>
            <img src="https://via.placeholder.com/150" alt="Article" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ArticleWithPicture