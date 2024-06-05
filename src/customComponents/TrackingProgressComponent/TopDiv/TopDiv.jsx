import ButtonPair from "@/components/OutlineButtonPairComponent/ButtonPair";
import ProfileDiv from "@/components/ProfileDivComponent/ProfileDiv";
import React from "react";
import style from "./TopDiv.module.css";

const TopDiv = ({ items, onClick, setOpen }) => {
  console.log("topDiv", onClick);
  return (
    <div className={style.picBtnDiv}>
      <ProfileDiv item={items[0]} />
      <div className={style.timeBtnDiv}>
        <span className={style.time}>00:12:54</span>
        <ButtonPair
          onClick={onClick}
          rightBtn={"Cancel"}
          leftBtn="Stop tracking hours"
          redCss
          setCancel={setOpen}       
          />
      </div>
    </div>
  );
};

export default TopDiv;
