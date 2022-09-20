import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { fetchPosts, getAllPosts, getAllPostState } from './postsSlice';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';


const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(getAllPosts)
    const postState = useSelector(getAllPostState)
    console.log(postState);

    // fetching Posts
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    // ordering post from newest to oldest
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
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