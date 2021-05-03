/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom";
import { usePosts } from "../utilities/post"

function SinglePostPage() {
    const { posts } = usePosts()
    const [post, setPost] = useState({});
    let params = useParams();
    let history = useHistory()
    console.log(posts)

    function handleBackClick() {
        history.push("/home")

    }


    useEffect(() => {
        async function getPostById() {
            let response = await fetch("http://localhost:8000/posts/" + params.postId);
            let post = await response.json();
            setPost(post.data);

        }
        getPostById();

    }, []);

    console.log(params);



    return (
        <div>
            <Header title="single Post Page" />
            <div
                css={css`

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;               
             `}
            >
                <div
                    css={css`
                    background-color:yellow;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    width: 50%;                   
                    border-radius: 20px;
                    padding:10px;
                   
            
                 `   }
                >
                    <h3>{post.title} </h3>
                    <p> {post.content}</p>

                </div>
                <Button onClick={handleBackClick}> Back </Button>
            </div >

        </div >
    )


}
export default SinglePostPage