import React from "react";
import z from "./Profile.module.css";

const Profile = () =>{
    return <div className={z.content}>
    <div>
 <img src='https://komandirovka.ru/upload/iblock/a42/a426f0dea1d58256260cc50f4088c84c.jpg'/>
  </div>
  <div className={z.item}>
    ava+description
  </div>
  <div>
    <div className={z.item}>
    my posts
    </div>
    <div className={z.item}>
      new post
    </div>
    </div>
    <div className={z.posts}>
      <div className={z.item}>
      post1
    </div>
    <div className={z.item}>
      post2
    </div>
  </div>
  </div>
}

export default Profile;