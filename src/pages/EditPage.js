import Header from "../components/Header"
import Button from "../components/Button";
import { useHistory } from "react-router-dom"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../utilities/post"

function EditPage() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    console.log("this is my uststate")
    let params = useParams();
    let history = useHistory()
    const { posts } = usePosts();




    // function handleUpdateClick() {
    //     history.push("/home")

    // }
    function handleEditTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleEditDescriptionChange(event) {
        setDescription(event.target.value)
    }

    function handleViewPost() {
        viewPost(posts.id)
    }

    function viewPost(postId) {
        history.push("/home/" + postId);
    }

    async function UpdatePosts() {
        let data = {
            title: title,
            content: description,
        };

        let response = await fetch("http://localhost:8000/posts/:id" + posts.id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        });

        if (response.ok) {
            console.log("ok created");
            // history.push("/home")
        } else {
            console.log("creation failed");
        }

    }
    UpdatePosts();


    return (
        <div>
            <Header title="EditPage" />
            <div className="AddTitle">
                <label htmlFor="fname" className="Title"><h3>EditTitle</h3></label>
                <input type="text" className="Titlesquare1" onChange={handleEditTitleChange} value={title}></input>
            </div>
            <div className="AddDescription">
                <label htmlFor="fname" className="Description"><h3>EditDescription</h3></label>
                <textarea className="Titlesquare2" onChange={handleEditDescriptionChange} value={description}></textarea>
            </div>
            <Button onClick={handleViewPost}> Update </Button>
        </div>
    )
}
export default EditPage