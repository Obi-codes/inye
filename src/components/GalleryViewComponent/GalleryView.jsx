import React, { useState } from "react";
import style from "./GalleryView.module.css";
import GalleryCard from "../GalleryCardComponent/GalleryCard";
import OverViewBtn from "../OverviewAndBtnComponent/OverViewBtn";
import { galleryItems } from "../../utils/data";
import DashboardCard from "../DashboardComponent/DashboardCard/DashboardCard";

const GalleryView = ({ authUser }) => {
  const [selectedButton, setSelectedButton] = useState(1);

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
  return (
    <div className={style.mainDiv}>
      <OverViewBtn
        btnArray={buttonArray}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {selectedButton === 1 ? (
        <div className={style.galleryCardDiv}>
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <DashboardCard authUser={authUser} />
      )}
    </div>
  );
};

export default GalleryView;
