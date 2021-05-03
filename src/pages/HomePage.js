import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Header from "../components/Header"
import Button from "../components/Button"
import { usePosts } from "../utilities/post"

import { useCounter } from "../context/counter"


export default function HomePage() {
  const { posts, isFetchingError, deletePost } = usePosts();
  const { counter } = useCounter()
  let history = useHistory()


  function handleAddPostPageClick() {
    history.push("/add")
  }

  function handleEditPageClick() {
    history.push("/editpage")
  }

  function viewPost(postId) {
    history.push("/post/" + postId);
  }


  return (
    <div>
      <Header
        title="Post App"
        rightSectionItem={

          <Button primary={false} onClick={handleAddPostPageClick}>
            Add Post
          </Button>

        }
      />

      <div className="postapp-postlist">
        {isFetchingError && (<h1>Page error</h1>
        )}

        {!isFetchingError &&
          posts.map((post) => {
            return (
              <div
                key={post.id} className="postapp-postitem"
              >

                <div onClick={function handleViewPost() {
                  viewPost(post.id)
                }}>
                  <h3 >
                    {post.title}
                  </h3>
                  <p>{post.content}</p>
                </div>


                <Button primary={true} onClick={handleEditPageClick}>
                  Edit
                </Button>
                <Button primary={true} onClick={function handleDeleteClick() {
                  deletePost(post.id)
                }}>
                  Delete
                </Button>

              </div>
            )
          })}
      </div>
      Counter:{counter}
    </div>
  );

}



