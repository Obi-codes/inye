import React, { useState } from "react";
// import OverViewBtn from "@/components/OverviewAndBtnComponent/OverViewBtn";
import style from "./ProgressMedia.module.css";
import profile from "../../../public/assets/Profile.png";
import downloadImage from "../../../public/assets/downloadImage.png";
import TopDiv from "../TrackingProgressComponent/TopDiv/TopDiv";
// import ImageText from "../NoReportingComponent/ImageText/ImageText";
import Image from "next/image";
import ImageContainer from "@/components/ReportDetailComponent/DetailViewComponent/ImageContainer/ImageContainer";
import report1 from "../../../public/assets/reportImg1.png";
import report2 from "../../../public/assets/reportImg2.png";
import report3 from "../../../public/assets/reportImg3.png";
// import NoReporting from "../NoReportingComponent/NoReporting";
import GalleryDetailed from "../../components/GalleryDetailedComponent/GalleryDetailed";
import { useRouter } from "next/navigation";
import CancelRecording from "../../components/cancelRecording";
import DialogModal from "../DialogModal";
// import ReportView from '../../components/ReportViewComponent/ReportView'
const ProgressMedia = ({setShowTrackingProgress,checkBox}) => {
  const reportImg = [report1, report2, report3];

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
          <CancelRecording setOpen={setOpen} setShowTrackingProgress={setShowTrackingProgress} />
        </DialogModal>
      ) : null}

      <div>
        {/* <OverViewBtn btnArray={adminButtonArray} /> */}
        {showReportView ? (
          goToNoReportingPage()
        ) : (
          <div className={style.reportDiv}>
            <TopDiv
              items={items}
              onClick={() => setShowReportView(true)}
              setOpen={setOpen}

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

            <p>Upload pics / Videos Progress</p>
            <button className={style.uploadButton}>
              <Image
                src={downloadImage}
                alt="DOWNLOAD"
                width={800}
                height={700}
                className={style.imageClass}
              />
              <span className={style.uploadTag}>Upload Media</span>
            </button>
            <div className={style.imagesContainer}>
              {reportImg.map((img, index) => (
                <ImageContainer
                checkBoxClass = {checkBox}
                  img={img}
                  index={index}
                  cancelDivCondition
                  key={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProgressMedia;
