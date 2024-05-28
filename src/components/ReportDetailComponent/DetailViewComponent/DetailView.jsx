import React from 'react'
import style from './DetailView.module.css'
import profile1 from '../../../../public/assets/profile1.png'
import report1 from '../../../../public/assets/reportImg1.png'
import report2 from '../../../../public/assets/reportImg2.png'
import report3 from '../../../../public/assets/reportImg3.png'
import ProfileDiv from '@/components/ProfileDivComponent/ProfileDiv';
import Image from 'next/image';
import ImageContainer from './ImageContainer/ImageContainer'

const DetailView = () => {
    const reportImg = [report1, report2, report3]
    const items = [
        { id: 1, profilePic: profile1, name: 'Healthcare Project', date: '24/08/2024', time: '02:12:54', amount: '$300' },
    ];
    return (
        <div className={style.detailViewDiv}>

            <div className={style.loggedDiv} >
                <ProfileDiv item={items[0]} />
                <div className={style.logInnerDiv}>
                    <h3 className={style.name}>Total Hours Logged </h3>
                    <p className={style.date}>00:12:54</p>
                </div>

            </div>
            <hr style={{ border: '0', height: '1px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.05)', }} />
            <p>Uploaded Pics & Videos</p>

            <div className={style.imagesContainer}>

                {reportImg.map((img, index) => (

                    <ImageContainer img = {img} index = {index} />
                ))}
            </div>




        </div>
    )
}

export default DetailView
