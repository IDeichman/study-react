import React from "react";
import MyPost from "./MyPost/MyPost";
import z from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () =>{
    return <div className={z.content}>
  <ProfileInfo />
  <MyPost />
  </div>
}

export default Profile;