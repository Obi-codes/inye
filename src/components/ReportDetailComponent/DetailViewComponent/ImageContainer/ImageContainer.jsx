import React from "react";
import style from "./ImageContainer.module.css";
import Image from "next/image";
import cross from "../../../../../public/assets/crossImage.png";

const ImageContainer = ({ img, index, cancelDivCondition,checkBoxClass }) => {
  return (
    <div key={index} className={style.imageWrapper}>
      <Image
        src={img}
        alt={`Report ${index + 1}`}
        width={800}
        height={100}
        unoptimized={false}
        style={{ borderRadius: "8px" }}
      />
      {cancelDivCondition && (
        <div className={checkBoxClass ? checkBoxClass : style.checkBox}>
          <Image src={cross} className={style.cross} alt="checkbox" />
        </div>
      )}
      {!cancelDivCondition && <p>9:45 PM</p>}
    </div>
  );
};

export default ImageContainer;
