import React from "react";
import style from "./DashboardCard.module.css";
import ProfileDiv from "@/components/ProfileDivComponent/ProfileDiv";
import profile1 from "../../../../public/assets/profile1.png";

const DashboardCard = () => {
  const item = [
    {
      id: 1,
      profilePic: profile1,
      name: "Healthcare Project",
      date: "24/08/2024",
      quantity: "30 Person",
      amount: "$300",
    },
  ];

  return (
    <div className={style.mainDiv}>
      <div className={style.detailTop}>
        <ProfileDiv item={item[0]} />
        <div className={style.detailSubDiv}>
          <div className={style.subDiv}>
            <span className={style.subDiv1}>Amount Given:</span>
            <span className={style.subDiv2}>$16 per (month/yr)</span>
          </div>
          <div className={style.subDiv}>
            <span className={style.subDiv1}>Amount Raised:</span>
            <span className={style.subDiv2}>$16 per</span>
          </div>
          <div className={style.subDiv}>
            <span className={style.subDiv1}>Fund Goal:</span>
            <span className={style.subDiv2}>$16 per (month/yr)</span>
          </div>
        </div>
      </div>
      <div className={style.descriptionDiv}>
        <h3 className={style.descriptionTag}>Description:</h3>
        <p className={style.descriptionText}>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  "
          }
        </p>
        <div className={style.buttonDiv}>
          <button className={style.button}>Show Reports</button>
        </div>
        <div className={style.cancelSubscriptionDiv}>
          <button className={style.cancelButton}>Cancel Subscription</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
