import React from "react";
import style from "./AppliedAmount.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";

const AppliedAmount = ({ setOpen, setSelectedButton }) => {
  const headText = (
    <>
      {`We've applied`}
      <span className={style.amount}>$15</span>
      to your
      <br />
      bank account.
    </>
  );

  const handleClick = () => {
    setOpen(false);
    setSelectedButton(2);
  };

  return (
    <div className={style.mainDiv}>
      <BackBtnHeading headText={headText} hideBtn />
      <span className={style.description}>
        {`Funds will be held in escrow until project's goal has been met, project
        deadline exceeded, or transaction cancelled.`}
      </span>
      <div className={style.buttonDiv} onClick={handleClick}>
        <button className={style.button}>Continue</button>
      </div>
    </div>
  );
};

export default AppliedAmount;
