import React from 'react';
import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { getAllPosts } from './postsSlice';
import TimeAgo from './TimeAgo';


const PostsList = () => {
    const posts = useSelector(getAllPosts)

    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
        </article>
    ))

    return (
        <>
            <h1>Posts</h1>
            {renderPosts}
        </>
    );
};

export default PostsList;