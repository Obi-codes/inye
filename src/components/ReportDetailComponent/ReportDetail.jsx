import React from 'react'
import style from './ReportDetail.module.css'
import OverViewBtn from '../OverviewAndBtnComponent/OverViewBtn'
import DetailView from './DetailViewComponent/DetailView'


const ReportDetail = () => {
   

    const backButton = <button className={style.backButton}>
        {"< Back "}
    </button>
    return (
        <div className={style.mainDiv}>
            <OverViewBtn backButton={backButton} />
           <DetailView/>

        </div>
    )
}

export default ReportDetail
