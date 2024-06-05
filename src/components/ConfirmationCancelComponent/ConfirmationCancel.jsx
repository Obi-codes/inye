import React from "react";
import style from "./ConfirmationCancel.module.css";
import cancelBtn from "../../../public/assets/cancelBtn.png";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import Image from "next/image";

const ConfirmationCancel = ({ setOpen }) => {
  const headText = (
    <>
      {`Thank you! We've canceled your contribution to  `}
      <br />
      <span className={style.amount}>Healthcare Project.</span>
      You will receive email receipt
    </>
  );

  return (
    <div className={style.mainDiv}>
      <button onClick={() => setOpen(false)}>
        <Image
        className={style.cancelButton}
          src={cancelBtn}
          alt="cancel"
          width={22}
          height={10}
          unoptimized={true}
          loading="lazy"
        />
      </button>
      <BackBtnHeading headText={headText} hideBtn />
    </div>
  );
};

export default ConfirmationCancel;
