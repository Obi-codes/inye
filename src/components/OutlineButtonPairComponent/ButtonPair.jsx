"use client";
import React from "react";
import style from "./ButtonPair.module.css";

const ButtonPair = ({
  leftBtn,
  rightBtn,
  width,
  redCss,
  setActiveStep,
  setOff,
  onClick,
  setCancel,
  setShowTrackingProgress,
}) => {
  const buttonStyle = width ? { width: 130 } : {};
  const buttonDivClass = redCss ? style.redButtonDiv : style.buttonDiv;
  const buttonClass = redCss ? style.redButton : style.button;
  return (
    <div>
      <div className={buttonDivClass}>
        {leftBtn == "Stop tracking hours" ? (
          <button
            className={buttonClass}
            style={buttonStyle}
            onClick={() => {
              onClick && onClick();
            }}
          >
            {leftBtn}
          </button>
        ) : leftBtn == "No" ? (
          <button
            className={buttonClass}
            style={buttonStyle}
            onClick={() => {
              setOff && setOff(false);
              setActiveStep && setActiveStep((prev) => prev - 1);
            
            }}
          >
            {leftBtn}
          </button>
        ) : (
          <button
            className={buttonClass}
            style={buttonStyle}
            onClick={() => {
              setOff && setOff(false);
              setActiveStep((prev) => prev + 1);
            }}
          >
            {leftBtn}
          </button>
        )}
        {rightBtn == "Yes" ? (
          <button
            className={buttonClass}
            style={buttonStyle}
            onClick={() => {
              setActiveStep &&
                setActiveStep && setActiveStep((prev) => prev + 1);
                setShowTrackingProgress && setShowTrackingProgress(false);
            }}
          >
            {rightBtn}
          </button>
        ) : (
          <button
            className={buttonClass}
            style={buttonStyle}
            onClick={() => {
              setActiveStep && setActiveStep((prev) => prev + 2);
              setCancel && setCancel(true);
            }}
          >
            {rightBtn}
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonPair;
