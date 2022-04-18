import React from "react";
import z from "./Post.module.css";

const Post = () =>{
    return <div className={z.posts}>
    <div className={z.item}>
    post1
  </div>
  <div className={z.item}>
    post2
  </div>
</div>
}

export default Post;