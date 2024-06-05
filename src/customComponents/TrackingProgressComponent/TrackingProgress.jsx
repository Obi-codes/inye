import React, { useState } from "react";
import style from "./TrackingProgress.module.css";
import profile from "../../../public/assets/Profile.png";
import ImageAdd from "../../../public/assets/GroupAdd.png";
import ImageText from "../NoReportingComponent/ImageText/ImageText";
import TopDiv from "./TopDiv/TopDiv";
import ProgressMedia from "../ProgressMedia/ProgressMedia";
import GalleryDetailed from "../../components/GalleryDetailedComponent/GalleryDetailed";
import { useRouter } from "next/navigation";
import DialogModal from "../../customComponents/DialogModal";
import CancelRecording from "./../../components/cancelRecording/index";

const TrackingProgress = ({setShowTrackingProgress,checkBox}) => {
  const items = [
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

  const [showProgressMedia, setShowProgressMedia] = useState(false);
  const [showReportView, setShowReportView] = useState(false);
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const goToNoReportingPage = () => {
    router.push('/allreport'); // Replace '/path/to/NoReportingPage' with the actual path
  };

  return (
    
    <>
      {open ? (
        <DialogModal
          sxStyle={{ backgroundColor: "none" }}
          maxWidth={"sm"}
          open={open}
          onClose={() => setOpen(false)}
          dividers={false}
        >
          <CancelRecording setOpen={setOpen}  setShowTrackingProgress={setShowTrackingProgress}/>
        </DialogModal>
      ) : null}

<div >
      
      {showProgressMedia ? (
       <ProgressMedia checkBox={checkBox} setShowTrackingProgress ={setShowTrackingProgress} />
     ) :
     showReportView ? (
       goToNoReportingPage()
     )  : (
     <div className={style.reportDiv}>
       <TopDiv 
       items={items}
       onClick={() => setShowReportView(true)} 
       setOpen = {setOpen}
       />
       <hr
         style={{
           border: "0",
           height: "1px",
           width: "100%",
           backgroundColor: "rgba(255, 255, 255, 0.05)",
           marginBottom: 0,
         }}
       />
       <ImageText 
       image={ImageAdd}
        onClick={() => setShowProgressMedia(true)} />
          </div>
        )}
      </div>
    </>
  );
};

export default TrackingProgress;
