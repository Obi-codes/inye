import React from "react";
import style from "./ReportBox.module.css";
import Image from "next/image";
import msgImage from "../../../../public/assets/msgImage.png";
import { useRouter } from "next/navigation";

const ReportBox = ({ item }) => {
  const router = useRouter();
  return (
    <div className={style.nameDetailedDiv}>
      <Image
        src={item.profilePic}
        alt="calender"
        width={22}
        height={10}
        unoptimized={false}
        style={
          {
            // borderRadius: "50%",
            // marginTop: '-3.5vw'
          }
        }
      />
      <span className={style.name}>{item.name}</span>
      <span className={style.date}> {item.date}</span>
      <span className={style.time}> {item.time}</span>
      <span
        className={style.details}
        onClick={() => router.push("/reportview/reportdetail")}
      >
        View Details
      </span>
      <button className={style.message}>
        <Image
          src={msgImage}
          alt="calender"
          width={22}
          height={10}
          unoptimized={false}
          style={
            {
              // borderRadius: "50%",
              // marginTop: '-3.5vw'
            }
          }
        />{" "}
      </button>
    </div>
  );
};

export default ReportBox;
