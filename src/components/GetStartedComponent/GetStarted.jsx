import React from "react";
import style from "./GetStartedComponent.module.css";
import fundImg from "../../../public/assets/ri_funds-line.png";
import circleImg from "../../../public/assets/icon-park-outline_funds.png";
import SmallBox from "./GetStartedInnerSmallBox/SmallBox";
import ButtonComponent from "./yellowButtonComponent/ButtonComponent";
import LinkComponent from "./LinkDivComponent/LinkComponent";

const circleText = (
  <>
    Wants to <br /> fund
  </>
);
const fundText = (
  <>
    Needs to <br />
    be funded
  </>
);

const boxesArray = [
  {
    id: 1,
    type: "person",
    image: fundImg,
    text: fundText,
  },
  {
    id: 2,
    type: "admin",
    image: circleImg,
    text: circleText,
  },
];

const GetStarted = ({ setUser, userType, setIsClick }) => {
  return (
    <div className={style.main}>
      <h1 className={style.heading}>Let’s Get Started</h1>
      <h2 className={style.subHeading}>Please select your role to Login</h2>
      <div className={style.smallBoxDiv}>
        {boxesArray.map((item, i) => (
          <SmallBox
            key={`${item.id}.${i}`}
            image={item.image}
            text={item.text}
            type={item.type}
            setUser={setUser}
            isSelected={userType === item.type}
          />
        ))}
      </div>
      <ButtonComponent
        buttonDivCss={style.buttonDiv}
        buttonCss={style.button}
        setIsClick={setIsClick}
      />
      <LinkComponent />
    </div>
  );
};

export default GetStarted;
