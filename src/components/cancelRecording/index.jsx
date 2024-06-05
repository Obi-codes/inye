import React from "react";
import style from "./cr.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import ButtonPair from "../OutlineButtonPairComponent/ButtonPair";

const CancelRecording = ({ setOpen, setShowTrackingProgress }) => {
  const headText = (
    <>
      Are you sure you want to cancel your <br />
      recording?
    </>
  );

  return (
    <div className={style.mainDiv}>
      <BackBtnHeading headText={headText} hideBtn />
      <ButtonPair
        leftBtn={"No"}
        rightBtn={"Yes"}
        width
        setOff={setOpen}
        setShowTrackingProgress={setShowTrackingProgress}
      />
    </div>
  );
};

export default CancelRecording;
