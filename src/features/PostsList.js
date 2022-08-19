import React from 'react';
import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { getAllPosts } from './postsSlice';
import { selectAllUser } from './usersSlice';

const PostsList = () => {
    const posts = useSelector(getAllPosts)
    console.log(posts);
    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <PostAuthor userId={post.userId} />
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