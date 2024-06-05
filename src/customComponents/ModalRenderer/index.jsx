"use client";
import React, { Fragment, useState } from "react";
import ChoseMoney from "./../../components/ChoseHowMuchMoneyComponent/ChoseMoney";
import EnterAmount from "../../components/EnterAmountComponent";
import ConnectBank from "../../components/ConnectBankComponent/ConnectBank";
import AmountConformation from "../../components/AmountConformationComponent/AmountConformation";
import AppliedAmount from "../../components/AppliedAmountComponent/AppliedAmount";

const ModalRenderer = ({ setOpen, setSelectedButton }) => {
  const [activeStep, setActiveStep] = useState(0);

  const renderingModalComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <ChoseMoney
            setOpen={setOpen}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        );
      case 1:
        return (
          <EnterAmount setActiveStep={setActiveStep} />
        );
      case 2:
        return <ConnectBank setActiveStep={setActiveStep} />;
      case 3:
        return <AmountConformation setActiveStep={setActiveStep} />;
      case 4:
        return (
          <AppliedAmount
            setOpen={setOpen}
            setSelectedButton={setSelectedButton}
          />
        );
      default:
        return null;
    }
  };

  return <Fragment>{renderingModalComponent()}</Fragment>;
};

export default ModalRenderer;
