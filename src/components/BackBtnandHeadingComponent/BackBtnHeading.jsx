import React from "react";
import style from "./BackBtnHeading.module.css";

const BackBtnHeading = ({
  headText,
  plaidDiv,
  hideBtn,
  setOpen,
  activeStep,
  setActiveStep,
}) => {
  
  const handleBack = () => {
    if (activeStep === 0) {
      setOpen && setOpen(false);
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div className={style.mainDiv}>
      {!hideBtn && (
        <button className={style.backButton} onClick={handleBack}>
          {"< Back "}
        </button>
      )}
      {plaidDiv}
      <p className={style.headText}>{headText}</p>
    </div>
  );
};

export default BackBtnHeading;
