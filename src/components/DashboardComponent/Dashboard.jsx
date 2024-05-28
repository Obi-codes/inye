import React from 'react'
import style from './Dashboard.module.css'
import OverViewBtn from '../OverviewAndBtnComponent/OverViewBtn'
import ProfileDiv from '../ProfileDivComponent/ProfileDiv'
import DashboardCard from './DashboardCard/DashboardCard'

const Dashboard = () => {




    return (
        <div className={style.mainDiv}>
            <OverViewBtn />
            <DashboardCard />

        </div>
    )
}

export default Dashboard
