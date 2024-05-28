import React, { useState } from "react";
import OverViewBtn from "../OverviewAndBtnComponent/OverViewBtn";
import style from "./GalleryDetailed.module.css";
import ProfileDiv from "../ProfileDivComponent/ProfileDiv";
import CommentDetail from "./CommentDetailComponent/CommentDetail";
import Image from "next/image";
import profileImg from "/public/assets/profil.png";
import writeComment from "../../../public/assets/writeComment.png";
import DialogModal from "../../customComponents/DialogModal";
import ChoseMoney from "@/components/ChoseHowMuchMoneyComponent/ChoseMoney";

const GalleryDetailed = ({ item, authUser }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [open, setOpen] = useState(false);

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
      <DialogModal
        sxStyle={{ backgroundColor: "none" }}
        maxWidth={"sm"}
        open={open}
        onClose={() => setOpen(false)}
        children={<ChoseMoney setOpen={setOpen} />}
        dividers={false}
      />

      <div className={style.mainDiv}>
        <OverViewBtn
          btnArray={authUser?.type === "admin" ? adminButtonArray : buttonArray}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        <div className={style.detailTop}>
          <ProfileDiv item={item} />
          <div className={style.detailSubDiv}>
            <div className={style.subDiv}>
              <span className={style.subDiv1}>Fund Goal:</span>
              <span className={style.subDiv2}>$16 per (month)</span>
            </div>
            <div className={style.subDiv}>
              <span className={style.subDiv1}>No of Donators:</span>
              <span className={style.subDiv2}>30</span>
            </div>
            <div className={style.subDiv}>
              <span className={style.subDiv1}>Amount Raised:</span>
              <span className={style.subDiv2}>$3500</span>
            </div>
          </div>
        </div>
        <div className={style.descriptionDiv}>
          <>
            {authUser?.type === "admin" ? null : (
              <>
                <h3 className={style.descriptionTag}>Description:</h3>
                <p className={style.descriptionText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <div className={style.buttonDiv}>
                  <button
                    className={style.button}
                    onClick={() => setOpen(true)}
                  >
                    Fund this Project
                  </button>
                </div>
              </>
            )}
            <hr
              style={{
                border: "0",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                marginTop: "30px",
              }}
            />
            <div className={style.commentDiv}>
              <h2 className={style.text}>Comments</h2>
              <div className={style.commentSubDiv}>
                <span className={style.view}>16 Views</span>
                <span className={style.view}>3 Comments</span>
              </div>
            </div>
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            {authUser?.type === "admin" ? null : (
              <div className={style.writeCommentDiv}>
                <Image
                  src={profileImg}
                  alt="calender"
                  width={22}
                  height={10}
                  unoptimized={false}
                  style={{
                    borderRadius: "50%",
                  }}
                />
                <div className={style.writeCommentInputDiv}>
                  <input placeholder="Write a Comment.." type="text" />
                  <Image
                    src={writeComment}
                    alt="calender"
                    width={22}
                    height={10}
                    unoptimized={false}
                    style={{
                      borderRadius: "50%",
                      height: "15px",
                      width: "15px",
                    }}
                  />
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default GalleryDetailed;
