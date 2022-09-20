import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}


// GET request from server
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//     console.log('sd');
//     try {
//         const response = await axios.get(POSTS_URL)
//         return [...response.data]
//     } catch (error) {
//         return error.message
//     }
// })

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const fetchedPosts = await axios.get(POSTS_URL)
        return fetchedPosts
    } catch (error) {
        return error.message
    }
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)

            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },

    },
    extraReducer: {

    }
    // extraReducers(builder) {
    //     builder
    //         // if fetching is on pending
    //         .addCase(fetchPosts.pending, (state, { payload }) => {
    //             console.log(payload);
    //             state.status = 'pending'
    //         })

    //         // if fetching is fulfilled
    //         .addCase(fetchPosts.fulfilled, (state, { payload }) => {
    //             console.log(payload);
    //             state.status = 'fulfilled'
    //         })
    // },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchPosts.pending, (state, action) => {
    //             state.status = 'pending'
    //         })
    //         .addCase(fetchPosts.fulfilled, (state, action) => {
    //             state.status = 'succeeded';

    //             let min = 1;
    //             const loadedPosts = action.payload.map(post => {
    //                 post.date = sub(new Date(), { minutes: min++ }).toISOString();
    //                 post.reactions = {
    //                     thumbsUp: 0,
    //                     wow: 0,
    //                     heart: 0,
    //                     rocket: 0,
    //                     coffee: 0
    //                 }
    //                 return post;
    //             });

    //             // Add any fetched posts to the array
    //             state.posts = state.posts.concat(loadedPosts)
    //         })
    //         .addCase(fetchPosts.rejected, (state, action) => {
    //             state.status = 'failed'
    //             state.error = action.error.message
    //         })
    // }
})

export const getAllPostState = state => state.posts
export const getAllPosts = state => state.posts.posts
export const { postAdded, reactionAdded } = postsSlice.actions
export default postsSlice.reducer