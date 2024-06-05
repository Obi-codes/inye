import React, { useState } from "react";
import style from "./ReportDetail.module.css";
import OverViewBtn from "../OverviewAndBtnComponent/OverViewBtn";
import DetailView from "./DetailViewComponent/DetailView";
import { galleryItems } from "../../utils/data";
import GalleryCard from "../GalleryCardComponent/GalleryCard";
import { useRouter } from "next/navigation";

const ReportDetail = () => {
  const [selectedButton, setSelectedButton] = useState(2);
  const router = useRouter();

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

  const backButton = <button className={style.backButton} onClick={() => router.back()}>{"< Back "}</button>;
  return (
    <div className={style.mainDiv}>
      <OverViewBtn overViewCss={style.overViewCss} backButton={backButton} btnArray={buttonArray}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton} />

      {selectedButton === 1 ? (
        <div className={style.galleryCardDiv}>
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <DetailView />
      )}
    </div>
  );
};

export default ReportDetail;
