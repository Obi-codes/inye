"use client";
import React, { useState } from "react";
import OverViewBtn from "../OverviewAndBtnComponent/OverViewBtn";
import style from "./GalleryDetailed.module.css";
import DashboardCard from "../DashboardComponent/DashboardCard/DashboardCard";
import DialogModal from "../../customComponents/DialogModal";
import DetailedDiv from "./DetailedDiv";
import ModalRenderer from "../../customComponents/ModalRenderer";
import NoReporting from "../../customComponents/NoReportingComponent/NoReporting";
import TrackingProgress from "../../customComponents/TrackingProgressComponent/TrackingProgress";

const GalleryDetailed = ({ item, authUser, progressPage }) => {
  const [selectedButton, setSelectedButton] = useState(2);
  const [open, setOpen] = useState(false);
  const [showTrackingProgress, setShowTrackingProgress] = useState(false);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    setShowTrackingProgress(false);
  };

  const handleNoReportingButtonClick = () => {
    // Show TrackingProgress when NoReporting button is clicked
    setShowTrackingProgress(true);
  };

  const buttonArray = [
    {
      id: 1,
      title: "Gallery",
    },
    {
      id: 2,
      title: "Dashboard",
    },
  ];

  const adminButtonArray = [
    {
      id: 1,
      title: "Dashboard",
    },
    {
      id: 2,
      title: "Reporting",
    },
  ];

  return (
    <>
      {open ? (
        <DialogModal
          sxStyle={{ backgroundColor: "none" }}
          maxWidth={"sm"}
          open={open}
          onClose={() => setOpen(false)}
          // children={
          //   <ModalRenderer
          //     setOpen={setOpen}
          //     setSelectedButton={setSelectedButton}
          //   />
          // }
          dividers={false}
        >
          <ModalRenderer
            setOpen={setOpen}
            setSelectedButton={setSelectedButton}
          />
        </DialogModal>
      ) : null}

     
        <div className={style.mainDiv}>
          <OverViewBtn
            btnArray={
              authUser?.type === "admin" ? adminButtonArray : buttonArray
            }
            selectedButton={selectedButton}
            setSelectedButton={handleButtonClick}
          />
          {selectedButton === 1 ? (
            <DetailedDiv item={item} authUser={authUser} setOpen={setOpen} />
          ) : selectedButton === 2 && authUser?.type === "admin" ? (
            showTrackingProgress ? (
              <TrackingProgress checkBox = {style.checkBox}
                setShowTrackingProgress={setShowTrackingProgress}
              />
            ) : (
              <NoReporting handleButtonClick={handleNoReportingButtonClick} />
            )
          ) : (
            <DashboardCard authUser={authUser} />
          )}
        </div>
   
    </>
  );
};

export default GalleryDetailed;
