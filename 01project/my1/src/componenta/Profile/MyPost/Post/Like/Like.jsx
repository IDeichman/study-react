import React from "react";
import z from "./Like.module.css";

const Like = (props) =>{
    return <div className={z.posts}>
    
    <div>
      <span>Like</span>
      {props.press}
    </div>
  </div>
  
}

export default Like;