import React from 'react'
import BackBtnHeading from '../BackBtnandHeadingComponent/BackBtnHeading'
import style from './EnterAmount.module.css'
import Image from 'next/image'
import discount from '../../../public/assets/discount.png'

const EnterAmount = ({ setShowManual, setShowPlaid }) => {
  return (
    <div className={style.mainDiv}>
      <BackBtnHeading
        headText="Please Enter Your Amount"
        hideBtn={false}
        setOpen={setShowManual}
      />
      <span className={style.select}>*$25 Minimum Amount</span>
      <div className={style.enterAmountDiv}>
        <input
          placeholder="$ 00.00"
          type="text"
          style={{
            outline: "none",
            border: "none",
          }}
        />
        <Image
          src={discount}
          alt="calender"
          width={22}
          height={10}
          unoptimized={false}
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <div className={style.buttonDiv}>
        <button
          className={style.button}
          onClick={() => {
            setShowPlaid(true);
            setShowManual(false);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EnterAmount
