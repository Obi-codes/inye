"use client";
import React, { useState } from "react";
import style from "./GetStarted.module.css";
import Profile from "@/customComponents/ProfileScreen";
import GetStarted from "@/components/GetStartedComponent/GetStarted";

const GetStartedPage = () => {
  const [userType, selectUserType] = useState(null);
  const [isClick, setIsClick] = useState(false);

  const setUser = (type) => {
    selectUserType(type);
  };

  return (
    <div className={style.main}>
      <div className={style.subMain}>
        <span className={style.inye}>INYE</span>
        <span className={style.tagLine}>(Invest, Nurture, Yield Equity)</span>
        {userType && isClick ? (
          <Profile
            userType={userType}
            setIsClick={setIsClick}
            selectUserType={selectUserType}
            type={userType === "admin" ? "Admin" : "Person"}
          />
        ) : (
          <GetStarted
            setUser={setUser}
            userType={userType}
            setIsClick={setIsClick}
          />
        )}
      </div>
    </div>
  );
};

export default GetStartedPage;
