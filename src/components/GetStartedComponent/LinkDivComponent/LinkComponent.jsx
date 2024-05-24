import React from "react";
import style from "./LinkComponent.module.css";
import Link from "next/link";

const LinkComponent = () => {
  return (
    <div className={style.linkDiv}>
      <span className={style.spanText}>Already Have an Account?</span>{" "}
      <Link href={""} className={style.linkText}>
        Login Here
      </Link>
    </div>
  );
};

export default LinkComponent;
