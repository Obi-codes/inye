import OverViewBtn from "@/components/OverviewAndBtnComponent/OverViewBtn";
import React from "react";
import style from "./NoReporting.module.css";
import profile from "../../../public/assets/Profile.png";
import ProfileDiv from "@/components/ProfileDivComponent/ProfileDiv";
import ButtonComponent from "@/components/GetStartedComponent/yellowButtonComponent/ButtonComponent";
import ImageCancel from "../../../public/assets/GroupCancel.png";
import ImageText from "./ImageText/ImageText";
import ReportBox from "../../components/ReportViewComponent/ReportBox/ReportBox";
import ReportTagsDiv from "../../components/ReportViewComponent/ReportTagsDiv";

const NoReporting = ({ handleButtonClick, progressPage }) => {
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
  const items = [
    {
      id: 1,
      profilePic: profile,
      name: "Healthcare Project",
      date: "24/08/2024",
      time: "02:12:54",
      amount: "$300",
    },
    {
      id: 2,
      profilePic: profile,
      name: "Education Project",
      date: "25/08/2024",
      time: "03:28:04",
      amount: "$400",
    },
    {
      id: 3,
      profilePic: profile,
      name: "Construction Project",
      date: "26/08/2024",
      time: "19:46:45",
      amount: "$500",
    },
  ];
  return (
    <div>
      {/* <OverViewBtn btnArray={adminButtonArray} /> */}
      <div className={style.reportDiv}>
        <div className={style.picBtnDiv}>
          <ProfileDiv item={items[0]} />
          <ButtonComponent
            buttonDivCss={style.buttonDiv}
            buttonCss={style.button}
            buttonText={"Start tracking hours"}
            setIsClick={() => handleButtonClick()}
          />
        </div>
        <hr
          style={{
            border: "0",
            height: "1px",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            marginBottom: 0,
          }}
        />
        {progressPage ? (
          <div>
            <ReportTagsDiv />
            {items.map((item) => (
              <ReportBox key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <>
            <p>Reports:</p>
            <ImageText image={ImageCancel} />
          </>
        )}
      </div>
    </div>
  );
};

export default NoReporting;
