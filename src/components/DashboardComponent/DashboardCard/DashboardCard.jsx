import React, { useState } from "react";
import style from "./DashboardCard.module.css";
import ProfileDiv from "@/components/ProfileDivComponent/ProfileDiv";
import profile1 from "../../../../public/assets/profile1.png";
import { useRouter } from "next/navigation";
import DialogModal from "../../../customComponents/DialogModal";
import Renderer from "./../Renderer";

const DashboardCard = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const item = {
    id: 1,
    profilePic: profile1,
    name: "Healthcare Project",
    date: "24/08/2024",
    quantity: "30 Person",
    amount: "$300",
  };

  return (
    <>
      {open && (
        <DialogModal
          sxStyle={{ backgroundColor: "none" }}
          maxWidth={"sm"}
          open={open}
          onClose={() => setOpen(false)}
          // children={<Renderer setOpen={setOpen} />}
          dividers={false}
        >
          <Renderer setOpen={setOpen} />
        </DialogModal>
      )}

      <div className={style.mainDiv}>
        <div className={style.detailTop}>
          <ProfileDiv item={item} />
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
          <div
            className={style.buttonDiv}
            onClick={() => router.push("/reportview")}
          >
            <button className={style.button}>Show Reports</button>
          </div>
          <div
            className={style.cancelSubscriptionDiv}
            onClick={() => setOpen(true)}
          >
            <button className={style.cancelButton}>Cancel Subscription</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
