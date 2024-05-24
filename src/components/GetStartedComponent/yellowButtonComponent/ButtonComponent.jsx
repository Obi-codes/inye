import React from "react";

const ButtonComponent = ({ buttonDivCss, buttonCss, setIsClick }) => {
  return (
    <div className={buttonDivCss}>
      <button className={buttonCss} onClick={() => setIsClick(true)}>
        Continue To Signup
      </button>
    </div>
  );
};

export default ButtonComponent;
