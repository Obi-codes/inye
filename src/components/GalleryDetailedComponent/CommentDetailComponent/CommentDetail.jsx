import React from 'react'
import style from './CommentDetail.module.css'
import Image from 'next/image'
import commentImage from '../../../../public/assets/commentImage.png'
const CommentDetail = () => {
  return (
    <div className={style.commentMainDiv}>
      <Image
       src={commentImage}
       alt="calender"
       width={22}
       height={10}
       unoptimized={false}
       style={{
         borderRadius: "50%",
         marginTop: '-3.5vw'
       }}/>
      <div style={{
         paddingLeft: "0.9vw",
       }}>
        <div className={style.nameDiv}>
          <span className={style.name}>
          Hammer Zeelon
          </span>
          <span className={style.commentTime}>
          1 day ago
          </span>
        </div>
        <p className={style.descriptionText}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}</p>
      </div>
    </div>
  )
}

export default CommentDetail
