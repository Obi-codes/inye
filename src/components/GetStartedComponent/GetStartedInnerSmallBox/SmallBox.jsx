"use client";
import React, { useCallback } from "react";
import style from "./SmallBox.module.css";
import Image from "next/image";
import checkBoxImg from "../../../../public/assets/charm_tick.png";

const SmallBox = ({ text, image, type, setUser, isSelected }) => {
  const handleClick = useCallback(() => {
    setUser(type);
  }, [setUser, type]);

  return (
    <div
      className={`${style.box} ${isSelected ? style.border : style.noBorder}`}
      onClick={handleClick}
    >
      <Image src={image} className={style.imgCss} alt="circleimage" />
      <p className={style.text}>{text}</p>
      {isSelected ? (
        <div className={style.checkBox}>
          <Image src={checkBoxImg} className={style.kk} alt="checkbox" />
        </div>
      ) : null}
    </div>
  );
};

export default SmallBox;
