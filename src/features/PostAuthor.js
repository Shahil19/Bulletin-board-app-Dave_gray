import React from 'react';
import { selectAllUser } from './usersSlice';
import { useSelector } from 'react-redux/es/exports';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUser)

    const author = users.find(user => user.id === userId)

    return (
        <span>by {author ? author.name : 'Unknown user'} </span>
    );
};

export default PostAuthor;