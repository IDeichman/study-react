import React from "react";
import z from "./Post.module.css";

const Post = (props) =>{
    return <div className={z.posts}>
    <div className={z.item}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Rubens-Lady.of.the.Chamber.to.Infanta.Isabella.jpg/250px-Rubens-Lady.of.the.Chamber.to.Infanta.Isabella.jpg"/>
    {props.message}
    <div>
      <span>Like</span>
      {props.LikeCount}
    </div>
  </div>
  
  </div>
  
}

export default Post;