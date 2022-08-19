import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Bang Bang', content: "actor is Hrittik" },
    { id: 2, title: "Inception", content: "actor is Leonardo de cap" }
]
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        title,
                        content,
                        id: nanoid()
                    }
                }
            }
        }
    }
})

export const getAllPosts = state => state.posts
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer