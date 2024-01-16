'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { LuBookmark } from 'react-icons/lu'

const Card = ({ image, title, subHeading, userImage, userText, priceImage, priceText, tags }) => {

  return (
    <Link 
        className='flex items-center ml-[150px] mt-[30px] w-[300px] h-[230px] cursor-pointer rounded-[10px] border-[0.5px] border-solid border-[#C0C0C0] bg-[#FFF]'
        href='/details'
    >
        {/** Container */}
        <div className='px-[16px] py-[20px] inline-block items-center'>
            <div className='w-[268px] h-[50] pt-[13px]'>
                {/** Image and title and bookmark*/}
                <div className='flex gap-3 items-center'>
                    <Image
                        src={image}
                        alt='exam-logo'
                        width={50}
                        height={50} 
                    />
                    <div className='w-[135px] h-[36px] inline-block items-center'>
                        <h2 className='text-[#000] font-urbanist text-[16px] font-semibold leading-normal'>{title}</h2>
                        <h2 className='text-[#A1A1A1] text-start whitespace-nowrap font-urbanist text-[12px] font-medium leading-normal'>{subHeading}</h2>
                    </div>
                    <div className='w-[24px] h-[24px]  ml-[35px] mb-[25px] justify-center items-center flex-shrink-0'>
                        <LuBookmark className='text-[#236BFD] text-2xl' />
                    </div>
                </div>
            </div>

            <div className='w-[268px] h-[0.3px] bg-[#9F9F9F] mt-[13px]'></div>

            {/** details */}
            <div className='w-full h-[120px] pl-[66px] pt-[10px] pr-[18px] mb-[30px]'>
                <div className='w-[154px] h-[24px] inline-flex gap-[8px] mb-[13px]'>
                    <Image
                        src={userImage}
                        alt='user-image'
                        width={24}
                        height={24}
                    />
                    <h2 className='w-[122px] h-[17px] font-urbanist text-[14px] font-medium'>{userText}</h2>
                </div>

                <div className='w-[154px] h-[24px] inline-flex gap-[8px] mb-[13px]'>
                    <Image
                        src={priceImage}
                        alt='price-image'
                        width={24}
                        height={24}
                    />
                    <h2 className='w-[40px] h-[17px] font-urbanist text-[14px] font-medium whitespace-nowrap'>{priceText}</h2>
                </div>

                <div className='w-[184px] h-[30px] pb-[20px] space-x-[7px]'>
                    {tags.map((tag, index) => (
                        <div 
                            key={index} 
                            className='inline-flex px-[10px] py-[8px] items-center justify-center rounded-[10px] border-[1px] border-solid border-[#9E9E9E]'
                        >
                            <h2 className='text-[#9E9E9E] font-urbanist text-[12px] font-semibold leading-normal'>{tag}</h2>
                        </div>
                    ))}
                </div>

                <div className='w-full h-[12px] inline-flex gap-[8px] pt-[20px] items-center'>
                    <h2 className='text-[#246BFD] font-urbanist text-[10px] font-semibold leading-normal whitespace-nowrap'>
                        View details
                    </h2>
                    <FaAngleRight className='w-[12px] h-[12px] flex-shrink-0 text-[#246BFD]' />
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card