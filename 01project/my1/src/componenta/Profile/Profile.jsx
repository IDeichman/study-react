import React from "react";
import MyPost from "./MyPost/MyPost";
import Post from "./MyPost/Post/Post";
import z from "./Profile.module.css";

const Profile = () =>{
    return <div className={z.content}>
    <div>
 <img src='https://komandirovka.ru/upload/iblock/a42/a426f0dea1d58256260cc50f4088c84c.jpg'/>
  </div>
  <div className={z.item}>
    ava+description
  </div>
  <MyPost />
  <Post />
  <Post />
  <Post />
  </div>
}

export default Profile;