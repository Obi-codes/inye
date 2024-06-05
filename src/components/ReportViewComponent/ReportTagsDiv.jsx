import React from 'react'
import style from './ReportView.module.css'

const ReportTagsDiv = () => {
  return (
    <div className={style.tagsDiv}>
    <span className={style.nameTags}> Project Name</span>
    <span style={{ marginRight: '-3vw' }} className={style.nameTags}>Reports Date</span>
    <span style={{ marginRight: '1vw' }} className={style.nameTags}>Hours Tracked</span>
  </div>
  )
}

export default ReportTagsDiv
