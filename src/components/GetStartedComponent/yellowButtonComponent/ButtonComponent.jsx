import React from "react";

const ButtonComponent = ({ buttonDivCss, buttonCss, setIsClick ,buttonText}) => {
  return (
    <div className={buttonDivCss}>
      <button className={buttonCss} onClick={() => setIsClick(true)}>
        {buttonText}
      </button>
    </div>
  );
};

export default ButtonComponent;
