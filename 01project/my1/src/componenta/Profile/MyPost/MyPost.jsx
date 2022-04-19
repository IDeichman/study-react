import React from "react";
import z from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () =>{
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
    <textarea></textarea>
    <button>add post</button>
    </div>
    </div>
    <div>
    <Post message='hi,im here' LikeCount = '20' />
    
    <Post message='i too' LikeCount = '15' />
    
    </div>
    
</div>  )
}

export default MyPost;