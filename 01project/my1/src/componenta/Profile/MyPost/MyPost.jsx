import React from "react";
import z from './MyPost.module.css'
import Post from "./Post/Post";

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
        <h3><Post message='Hi,im here' LikeCount='20' /></h3>

        <h3><Post message="I'm too" LikeCount='15' /></h3>

      </div>

    </div>)
}

export default MyPost;