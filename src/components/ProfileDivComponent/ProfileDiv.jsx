import React from "react";
import style from "./ProfileDiv.module.css";
import Image from "next/image";
const ProfileDiv = ({ item }) => {
  return (
    <div>
      <div className={style.profileDiv}>
        <Image
          src={item?.profilePic}
          className={style.profilePic}
          alt="profile"
        />
        <h3 className={style.profileName}>{item?.name}</h3>
        <p className={style.profileDate}>{item?.date}</p>
      </div>
    </div>
  );
};

export default ProfileDiv;
