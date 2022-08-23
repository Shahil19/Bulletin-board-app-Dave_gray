import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: 1,
        title: 'Bang Bang',
        content: "actor is Hrittik",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
    {
        id: 2,
        title: "Inception",
        content: "actor is Leonardo de cap",
        date: sub(new Date(), { minutes: 3 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    }
]
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
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

        reactionAdded(state, { payload }) {
            const { postId, reaction } = payload
            const existingPost = state.find(post => post.id === postId)

            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },

        // reactionAdded: {
        //     reducer(state, action) {
        //         const { postId, reaction } = action.payload
        //         const existingPost = state.find(post => post.id === postId)
        //         if (existingPost) {
        //             existingPost.reactions[reaction]++
        //         }
        //     },
        //     prepare() { }
        // },
    }
})

export const getAllPosts = state => state.posts
export const { postAdded, reactionAdded } = postsSlice.actions
export default postsSlice.reducer