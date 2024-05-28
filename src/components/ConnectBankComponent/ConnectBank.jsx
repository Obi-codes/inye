import React from "react";
import style from "./ConnectBank.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import Image from "next/image";
import plaidimage from "../../../public/assets/plaidimage.png";

const ConnectBank = ({ setShowPlaid, setIsSure }) => {
  const plaidDiv = (
    <Image
      src={plaidimage}
      alt="calender"
      width={100}
      height={100}
      unoptimized={false}
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
        setOpen={setShowPlaid}
      />
      <div className={style.buttonDiv}>
        <button
          className={style.button}
          onClick={() => {
            setIsSure(true);
            setShowPlaid(false);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConnectBank;
