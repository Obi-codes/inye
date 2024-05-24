"use client";
import { Fragment, useState } from "react";
import CreateProject from "@/customComponents/CreateProjectScreen";
import CreateProjectDetails from "@/customComponents/CreateProjectScreen/createprojectdetails";
import { Box } from "@mui/material";

const CreateProjectScreen = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    orgTitle: "",
    picture: "",
    desc: "",
  });

  const renderStepsComponents = (step) => {
    switch (step) {
      case 0:
        return (
          <CreateProject
            formData={formData}
            setFormData={setFormData}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        );
      case 1:
        return (
          <CreateProjectDetails
            formData={formData}
            setFormData={setFormData}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        );
      default:
        return <div>Nothign to render</div>;
    }
  };

  return (
    <Fragment>
      <Box>{renderStepsComponents(activeStep)}</Box>
    </Fragment>
  );
};

export default CreateProjectScreen;
