import React from "react";
import style from "./ConnectBank.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import Image from "next/image";
import plaidimage from "../../../public/assets/plaidimage.png";

const ConnectBank = ({ setActiveStep }) => {
  const plaidDiv = (
    <Image
      src={plaidimage}
      alt="plaid"
      width={100}
      height={100}
      unoptimized={true}
      style={{
        borderRadius: "50%",
        marginBottom: "0.2vw",
      }}
    />
  );

  return (
    <div className={style.mainDiv}>
      <BackBtnHeading
        headText={"Connect your BANK with Plaid"}
        plaidDiv={plaidDiv}
        setActiveStep={setActiveStep}
      />
      <div
        className={style.buttonDiv}
        onClick={() => {
          setActiveStep((prev) => prev + 1);
        }}
      >
        <button className={style.button}>Continue</button>
      </div>
    </div>
  );
};

export default ConnectBank;
