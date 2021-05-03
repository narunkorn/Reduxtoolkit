import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from "../features/posts/postSlice"


export function usePosts() {
    const posts = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();
    let [isFetchingError, setIsFetchingError] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, []);



    async function deletePost(deletePostId) {
        let url = "http://localhost:8000/posts/" + deletePostId;
        let response = await fetch(url, { method: "DELETE" });

        if (response.ok) {
            let newPosts = posts.filter((post) => {
                return post.id !== deletePostId;
            });

            // setPosts(newPosts);
            console.log("Delete ok");
        } else {
            console.log("Delete failed");
        }


    }

    return {
        posts,
        deletePost,
        isFetchingError,
    }
}
