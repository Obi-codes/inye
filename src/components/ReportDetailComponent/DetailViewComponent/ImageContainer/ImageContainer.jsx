import React from 'react'
import style from './ImageContainer.module.css'
import Image from 'next/image'

const ImageContainer = ({img,index}) => {
  return (
   
       
                        <div key={index} className={style.imageWrapper}>
                            <Image
                                src={img}
                                alt={`Report ${index + 1}`}
                                width={800}
                                height={100}
                                unoptimized={false}
                                style={{ borderRadius: '8px' }}
                            />
                            <p>
                            9:45 PM
                            </p>
                        </div>
                 
   
  )
}

export default ImageContainer
