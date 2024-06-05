import React from "react";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import style from "./EnterAmount.module.css";
import Image from "next/image";
import discount from "../../../public/assets/discount.png";

const EnterAmount = ({ setActiveStep }) => {
  return (
    <div className={style.mainDiv}>
      <BackBtnHeading
        headText="Please Enter Your Amount"
        hideBtn={false}
        setActiveStep={setActiveStep}
      />
      <span className={style.select}>*$25 Minimum Amount</span>
      <div className={style.enterAmountDiv}>
        <input
          placeholder="$ 00.00"
          type="number"
          style={{
            outline: "none",
            border: "none",
            width: "100%",
            MozAppearance: "textfield",
          }}
          className={style.no_spinner}
        />
        <Image
          src={discount}
          alt="discount"
          width={22}
          height={10}
          unoptimized={true}
          loading="lazy"
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <div
        className={style.buttonDiv}
        onClick={() => setActiveStep((prev) => prev + 1)}
      >
        <button className={style.button}>Continue</button>
      </div>
    </div>
  );
};

export default EnterAmount;
