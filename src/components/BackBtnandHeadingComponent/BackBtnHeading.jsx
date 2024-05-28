import React from 'react'
import style from './BackBtnHeading.module.css'

const BackBtnHeading = ({ headText, plaidDiv, hideBtn, setOpen }) => {
  return (
    <div className={style.mainDiv}>
      {!hideBtn && (
        <button className={style.backButton} onClick={() => setOpen(false)}>
          {"< Back "}
        </button>
      )}
      {plaidDiv}
      <p className={style.headText}>{headText}</p>
    </div>
  );
};

export default BackBtnHeading
