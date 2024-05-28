"use client";
import { Fragment, useLayoutEffect, useState } from "react";
import CreateProject from "@/customComponents/CreateProjectScreen";
import CreateProjectDetails from "@/customComponents/CreateProjectScreen/createprojectdetails";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

const CreateProjectScreen = () => {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const authUser =
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage?.getItem("inyeUserData"));

  const [formData, setFormData] = useState({
    name: "",
    orgTitle: "",
    picture: "",
    desc: "",
    deadline: 0,
    outline: "",
    goals: 0,
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
        return <div>Nothing to render</div>;
    }
  };

  useLayoutEffect(() => {
    if (!authUser || authUser?.type !== "admin") {
      router.push("/");
      return;
    }
  }, [authUser, router]);

  return (
    <Fragment>
      {authUser && authUser?.type == "admin" ? (
        <Box>{renderStepsComponents(activeStep)}</Box>
      ) : null}
    </Fragment>
  );
};

export default CreateProjectScreen;
