import React from "react";
import style from "./AmountConformation.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import ButtonPair from "../OutlineButtonPairComponent/ButtonPair";

const AmountConformation = ({ setIsSure, setShowApplied }) => {
  const headText = (
    <>
      Are you sure you want to be billed <br />
      <span className={style.amount}>$15</span> yearly/monthly
    </>
  );
  return (
    <div className={style.mainDiv}>
      <BackBtnHeading headText={headText} hideBtn={true} />
      <ButtonPair
        leftBtn={"No"}
        rightBtn={"Yes"}
        width
        setIsSure={setIsSure}
        setShowPlaid={setShowApplied}
      />
    </div>
  );
};

export default AmountConformation;
