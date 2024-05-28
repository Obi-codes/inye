import React, { useState } from "react";
import style from "./ChoseMoney.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import ButtonPair from "../OutlineButtonPairComponent/ButtonPair";
import EnterAmount from "../EnterAmountComponent/EnterAmount";
import ConnectBank from "../ConnectBankComponent/ConnectBank";
import AmountConformation from "../AmountConformationComponent/AmountConformation";
import AppliedAmount from "../AppliedAmountComponent/AppliedAmount";

const amount = [
  { doller: "$" },
  { doller: "$$" },
  { doller: "$$$" },
  { doller: "$$$$" },
];
const ChoseMoney = ({ setOpen }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showManual, setShowManual] = useState(false);
  const [showPlaid, setShowPlaid] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const [showApplied, setShowApplied] = useState(false);

  if (showManual === true) {
    return (
      <EnterAmount setShowManual={setShowManual} setShowPlaid={setShowPlaid} />
    );
  }

  if (showPlaid === true) {
    return <ConnectBank setShowPlaid={setShowPlaid} setIsSure={setIsSure} />;
  }

  if (isSure === true) {
    return (
      <AmountConformation
        setIsSure={setIsSure}
        setShowApplied={setShowApplied}
      />
    );
  }

  if (showApplied) {
    return <AppliedAmount setOpen={setOpen} />;
  }

  return (
    <div className={style.mainDiv}>
      <BackBtnHeading
        setOpen={setOpen}
        hideBtn={false}
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
        setShowManual={setShowManual}
        setShowPlaid={setShowPlaid}
      />
    </div>
  );
};

export default ChoseMoney;
