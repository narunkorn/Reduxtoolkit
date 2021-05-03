import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/countrSlice"
import postReducer from "../features/posts/postSlice"
export default configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
    },
});

