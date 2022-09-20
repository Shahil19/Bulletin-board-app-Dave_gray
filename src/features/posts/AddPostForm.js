import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
// import { selectAllUser } from './usersSlice';
import { selectAllUser } from '../users/usersSlice';

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')


    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)


    const onSavePostClicked = () => {
        dispatch(
            postAdded(title, content, userId)
        )

        setTitle("")
        setContent("")
    }

    // users
    const users = useSelector(selectAllUser)

    const usersOptions = users.map(user => (
        <option value={user.id} key={user.id}>{user.name}</option>
    ))
    const onAuthorChanged = e => setUserId(e.target.value)

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title Here:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;