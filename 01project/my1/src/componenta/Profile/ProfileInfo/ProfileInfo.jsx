import React from "react";
import z from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
    <div className={z.content}>
        <div>
            <img src='https://komandirovka.ru/upload/iblock/a42/a426f0dea1d58256260cc50f4088c84c.jpg' />
        </div>
        <div className={z.item}>
            ava+description
        </div>
    </div>

    )
}

export default ProfileInfo;