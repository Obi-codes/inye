import React, { Fragment, useState } from "react";
import CancelContribution from "../CancelContributionComponent";
import ConfirmationCancel from "../ConfirmationCancelComponent/ConfirmationCancel";

const Renderer = ({ setOpen }) => {
  const [activeStep, setActiveStep] = useState(0);

  const renderingComponent = () => {
    switch (activeStep) {
      case 0:
        return <CancelContribution setOpen={setOpen} setActiveStep={setActiveStep}/>;
      case 1:
        return <ConfirmationCancel setOpen={setOpen} />;
      default:
        return null;
    }
  };

  return <Fragment>{renderingComponent()}</Fragment>;
};

export default Renderer;
