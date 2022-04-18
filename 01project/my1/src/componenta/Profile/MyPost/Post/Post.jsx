import React from "react";
import z from "./Post.module.css";

const Post = () =>{
    return <div className={z.posts}>
    <div className={z.item}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Rubens-Lady.of.the.Chamber.to.Infanta.Isabella.jpg/250px-Rubens-Lady.of.the.Chamber.to.Infanta.Isabella.jpg"/>
    post1
    <div>
      <span>Like</span>
    </div>
  </div>
  <div className={z.item}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Michel_Sittow_002.jpg"/>
    post2
    <div>
      <span>Like</span>
    </div>
  </div>
  <div className={z.item}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ralph_Earl_002.jpg/800px-Ralph_Earl_002.jpg"/>
    post3
    <div>
      <span>Like</span>
    </div>
  </div>
  <div className={z.item}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Peter_der-Grosse_1838.jpg/800px-Peter_der-Grosse_1838.jpg"/>
    post4
    <div>
      <span>Like</span>
    </div>
  </div>
  <div className={z.item}>
    <img src ="https://upload.wikimedia.org/wikipedia/commons/d/d2/Peter_I_in_1697-98_detail.jpg"/>
    post5
    <div>
      <span>Like</span>
    </div>
  </div>
</div>
}

export default Post;