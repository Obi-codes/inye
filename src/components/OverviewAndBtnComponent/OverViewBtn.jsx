import React from "react";
import style from "./OverViewBtn.module.css";

const OverViewBtn = ({ btnArray, selectedButton, setSelectedButton }) => {
  return (
    <div>
      <div className={style.topDiv}>
        <h2 className={style.text}>Overview</h2>
        <div className={style.buttonDiv}>
          {btnArray?.map((item, i) => (
            <button
              className={`${style.button} ${
                selectedButton === item.id
                  ? style.selectedbtn
                  : style.notSelected
              }`}
              key={i}
              onClick={() => setSelectedButton(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <hr
        style={{
          border: "0",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          marginTop: 0,
        }}
      />
    </div>
  );
};

export default OverViewBtn;
