"use client";
import React from "react";
import style from "./GalleryCard.module.css";
import ProfileDiv from "../ProfileDivComponent/ProfileDiv";
import { useRouter } from "next/navigation";

const GalleryCard = ({ item }) => {
  const router = useRouter();
  return (
    <div className={style.mainDiv}>
      <ProfileDiv item={item} />
      <div className={style.donatorDiv}>
        <div className={style.subDiv}>
          <span className={style.subDiv1}>No of Donators:</span>
          <span className={style.subDiv2}>{item.quantity}</span>
        </div>
        <div className={style.subDiv}>
          <span className={style.subDiv1}>Amount Raised:</span>
          <span className={style.subDiv2}>{item.amount}</span>
        </div>
      </div>
      <div className={style.buttonDiv}>
        <button
          className={style.button}
          onClick={() => router.push(`/projectdetail/${item.slug}`)}
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
