import React from "react";
import z from './MyPost.module.css'
import Post from "./Post/Post";

let postData = [
  { message: "Hi, i'm here", likeCount: 20 },
  { message: "I'm too", likeCount: 15 }
]

let postsElement = postData.map
  ((postlike) => <Post message={postlike.message} LikeCount={postlike.likeCount} />)



const MyPost = () => {
  return (
    <div>
      <div>
        <div className={z.item}>
          my posts
        </div>
        <div className={z.item}>
          new post
        </div>
        <div>
          <h3><textarea></textarea></h3>
          <div>
            <button><h3>add post</h3></button>
          </div>
        </div>
      </div>
      <div className="postMessage">
        <h2>
          {postsElement}
        </h2>
      </div>

    </div>)
}

export default MyPost;