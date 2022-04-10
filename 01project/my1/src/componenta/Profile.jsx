import React from "react";
import './Profile.module.css';

const Profile = () =>{
    return <div className='content'>
    <div>
 <img src='https://komandirovka.ru/upload/iblock/a42/a426f0dea1d58256260cc50f4088c84c.jpg'/>
  </div>
  <div className="item">
    ava+description
  </div>
  <div>
    <div className="item">
    my posts
    </div>
    <div className="item">
      new post
    </div>
    </div>
    <div className="posts">
      <div className="item">
      post1
    </div>
    <div className="item">
      post2
    </div>
  </div>
  </div>
}

export default Profile;