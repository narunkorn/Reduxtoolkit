import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
    name: "post",
    initialState: {
        status: "idle",
        posts: []
    },
    reducers: {

        postsLoading: (state) => {
            state.status = "loading"
        },
        postsReceived: (state, action) => {
            state.posts = action.payload.data;
            state.status = "idle"
        },
    },
})

export const { postsReceived, postsLoading } = postSlice.actions

const getPosts = () => async (dispatch) => {
    dispatch(postsLoading())
    let response = await fetch("http://localhost:8000/posts")
    let posts = await response.json()

    dispatch(postsReceived(posts))
}

export { getPosts }
export default postSlice.reducer;