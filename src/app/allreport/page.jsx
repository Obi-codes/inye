"use client";

import React, { useState } from 'react'
import dynamic from "next/dynamic";
import OverViewBtn from '../../components/OverviewAndBtnComponent/OverViewBtn';
import style from '../../customComponents/NoReportingComponent/NoReporting.module.css'
import DetailedDiv from '../../components/GalleryDetailedComponent/DetailedDiv';
import TrackingProgress from '../../customComponents/TrackingProgressComponent/TrackingProgress';
import DashboardCard from '../../components/DashboardComponent/DashboardCard/DashboardCard';
import profile from "../../../public/assets/Profile.png";


const NoReporting = dynamic(
  () => import("@/customComponents/NoReportingComponent/NoReporting"),
  { ssr: false }
);
const AllReportPage = ({ authUser }) => {
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

  const item = [
    {
      id: 1,
      profilePic: profile,
      name: "Healthcare Project",
      date: "24/08/2024",
      time: "02:12:54",
      amount: "$300",
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

    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "#141316",
      height: "100%",
      flex: 1,
    }}>

      <div style={{ padding: "3vw", height: "100%" }} className={style.mainDiv}>
        <OverViewBtn btnArray={adminButtonArray}
          selectedButton={selectedButton}
          setSelectedButton={handleButtonClick}
        />
        {selectedButton === 1 ? (
          //  <DashboardCard authUser={authUser} />
          <DetailedDiv item={item[0]} authUser={authUser} setOpen={setOpen} />

        ) : (
          //  showTrackingProgress ? <NoReporting progressPage /> : <DashboardCard authUser={authUser} />
          showTrackingProgress ? (<TrackingProgress setShowTrackingProgress={setShowTrackingProgress} />) : <NoReporting progressPage handleButtonClick={handleNoReportingButtonClick} />

        )}


      </div>
    </div>

  )
}

export default AllReportPage;
