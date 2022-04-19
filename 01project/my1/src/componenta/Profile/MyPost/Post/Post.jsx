import React from "react";
import Like from "./Like/Like";
import z from "./Post.module.css";

const Post = (props) =>{
    return <div className={z.posts}>
    <div className={z.item}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Rubens-Lady.of.the.Chamber.to.Infanta.Isabella.jpg/250px-Rubens-Lady.of.the.Chamber.to.Infanta.Isabella.jpg"/>
    {props.message}
  
  </div>
  
</div>
}

export default Post;