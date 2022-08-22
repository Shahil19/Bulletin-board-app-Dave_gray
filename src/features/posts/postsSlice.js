import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: 1,
        title: 'Bang Bang',
        content: "actor is Hrittik",
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: 2,
        title: "Inception",
        content: "actor is Leonardo de cap",
        date: sub(new Date(), { minutes: 3 }).toISOString()
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
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
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