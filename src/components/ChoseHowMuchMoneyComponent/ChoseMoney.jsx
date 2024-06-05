import React, { useState } from "react";
import style from "./ChoseMoney.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import ButtonPair from "../OutlineButtonPairComponent/ButtonPair";

const amount = [
  { doller: "$" },
  { doller: "$$" },
  { doller: "$$$" },
  { doller: "$$$$" },
];

const ChoseMoney = ({
  setOpen,
  setActiveStep,
  activeStep,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={style.mainDiv}>
      <BackBtnHeading
        setOpen={setOpen}
        hideBtn={false}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        headText={
          <>
            Choose how much you want to <br /> fund yearly/monthly
          </>
        }
      />
      <span className={style.select}>*Select One</span>
      <div className={style.amountWholeDiv}>
        {amount.map((item, index) => (
          <div
            key={index}
            className={`${style.amountDiv} ${
              selectedOption === item.doller && style.amountDivCurrent
            }`}
            onClick={() => setSelectedOption(item.doller)}
          >
            {item.doller}
          </div>
        ))}
      </div>
      <ButtonPair
        leftBtn={"Enter Amount  - Manually"}
        rightBtn={" Continue"}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default ChoseMoney;
