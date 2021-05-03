import { getByTitle } from "@testing-library/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

function AddPostPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let history = useHistory()


    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }

    async function createPosts() {
        let data = {
            title: title,
            content: description,
        };

        let response = await fetch("http://localhost:8000/posts/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        });

        if (response.ok) {
            console.log("ok created");
            history.push("/home")
        } else {
            console.log("creation failed");
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        createPosts();
        console.log("submit ok")
    }

    // console.log(description)




    return (
        <div>
            <Header title="Add Post App" />
            <form onSubmit={handleSubmit}>

                <div className="AddTitle">
                    <label htmlFor="fname" className="Title"><h3>Title</h3></label>
                    <input
                        type="text"
                        className="Titlesquare1"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="AddDescription">
                    <label htmlFor="fname" className="Description"><h3>Description</h3></label>
                    <textarea className="Titlesquare2"

                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <button type="submit" className="AddPostPagButtton" >Add</button>
            </form>
        </div>

    )
}
export default AddPostPage

