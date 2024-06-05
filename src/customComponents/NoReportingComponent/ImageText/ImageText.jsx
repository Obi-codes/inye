import React from "react";
import style from "./ImageText.module.css";
import Image from "next/image";

const ImageText = ({ image, onClick }) => {
  return (
    <div className={style.imageTextDiv}>
      <button onClick={onClick}>
        <Image

          className={style.imageClass}
          src={image}
          alt={`Report `}
          width={1200}
          height={1300}
          unoptimized={false}
        />
      </button>
      <p>
        Upload Media to fill up documents <br />
        stats
      </p>
    </div>
  );
};

export default ImageText;
