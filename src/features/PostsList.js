import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from './postsSlice';

const PostsList = () => {
    const posts = useSelector(getAllPosts)

    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small><i>id: {post.id}</i></small>
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