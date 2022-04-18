import React from "react";
import z from './MyPost.module.css'

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
    
</div>  )
}

export default MyPost;