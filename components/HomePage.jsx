'use client'

import Image from 'next/image'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import RecommendExams from './RecommendExams.jsx'
import RecentExams from './RecentExams'
import Card from './Card'
import Filter from './Filter'

const HomePage = () => {
  return (
    <div className='w-full h-[1000px] bg-[#F8F9FA] relative'>
      <div className='w-[20px] h-[50px] bg-[#D9D9D9] items-center justify-center flex absolute ml-[170px] mt-[60px] cursor-pointer'>
        <FaChevronLeft className='w-[20px] h-[20px] text-slate-600' />
      </div>
      {/** Banner */}
      <div className='w-[980px] h-[180px] flex items-center justify-center gap-[50px] ml-[170px] mt-[40px] mr-[150px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-gradient-to-r from-black via-black to-gray-700'>
        <Image
          src='/image_12.png'
          alt='image-con'
          width={102}
          height={102}
          className='pt-4'
        />
        {/** text */}
        <div className='w-[102px] h-[67px] flex flex-col items-center'>
          <h2 className='text-white font-urbanist font-semibold text-[40px] leading-[120%]'>GATE</h2>
          <span className='text-white font-urbanist font-normal text-center text-[20px] leading-[120%]'>RESULTS</span>
          <div className='flex items-center'>
            <div className='w-[20px] h-[1px] bg-[#9F9F9F]'></div>
            <span className='w-[50px] h-[15px] rounded-[20px] bg-white text-black text-center flex items-center justify-center font-urbanist text-[8px] font-semibold leading-[120%] mt-[4px]'>
              2022
            </span>
            <div className='w-[20px] h-[1px] bg-[#9F9F9F]'></div>
          </div>
        </div>
        {/** right icon */}
        <div className='w-[20px] h-[50px] bg-[#D9D9D9] items-center justify-center flex absolute ml-[960px] cursor-pointer'>
          <FaChevronRight className='w-[20px] h-[20px] text-slate-600' />
        </div>
      </div>
      {/** recommend exams */}
      <RecommendExams />

      {/** Recommended Exams Cards */}
      <div className='flex items-center space-x-[20px]'>
        <Card
          image='/Rectangle_5.png'
          title='JEE Mains 2023'
          subHeading='National Testing Agency'
          userImage='/fa_group.svg'
          userText='More than 20 Lakhs'
          priceImage='/Group.svg'
          priceText='Rs 1200'
          tags={['Engineering', 'IIT', 'PCM']}
        />

        <Card
          image='/civil.png'
          title='Civil Services 2023'
          subHeading='Union Public Service Commision'
          userImage='/fa_group.svg'
          userText='More than 15 Lakhs'
          priceImage='/Group.svg'
          priceText='Rs 1500'
          tags={['Engineering', 'PCM']}
        />

        <Card
          image='/ssc.png'
          title='SSC CGL 2023'
          subHeading='Staff Selection Commission'
          userImage='/fa_group.svg'
          userText='More than 10 Lakhs'
          priceImage='/Group.svg'
          priceText='Rs 1000'
          tags={['Engineering', 'PCM']}
        />
        
      </div>

      {/** recent exams */}
      <RecentExams />

      {/** Filter tag list */}
      <div className='flex items-center ml-[150px] mt-[30px] gap-[20px]'>
        <div className='inline-flex px-[15px] py-[10px] items-center justify-center rounded-[20px] border-[1px] border-solid border-[#246BFD] bg-[#246BFD] cursor-pointer'>
          <h2 className='font-raleway text-white text-[14px] font-semibold leading-normal'>
            All
          </h2>
        </div>
        <Filter text='Gate' />
        <Filter text='AP EAPCET' />
        <Filter text='BITSAT' />
        <Filter text='JEE Mains' />
        <Filter text='JEE Advance' />
        <Filter text='TS EAMCET' />
        <Filter text='Amity JEE' />
        <Filter text='UPSC' />
      </div>

      {/** Recent Exams Cards */}
      <div className='flex items-center space-x-[20px]'>
        <Card
          image='/vit.png'
          title='VITEEE 2023'
          subHeading='Vellore Institute of Technology'
          userImage='/fa_group.svg'
          userText='More than 10 Lakhs'
          priceImage='/Group.svg'
          priceText='Rs 1500'
          tags={['Engineering', 'PCM']}
        />

        <Card
          image='/srm.png'
          title='SRMJEE 2023'
          subHeading='SRMIST'
          userImage='/fa_group.svg'
          userText='More than 10 Lakhs'
          priceImage='/Group.svg'
          priceText='Rs 1000'
          tags={['Engineering', 'PCM']}
        />

        <Card
          image='/ts.png'
          title='TS EAMCT 2023'
          subHeading='TASCHE'
          userImage='/fa_group.svg'
          userText='More than 10 Lakhs'
          priceImage='/Group.svg'
          priceText='Rs 1000'
          tags={['Engineering', 'PCM']}
        />
      </div>
    </div>
  )
}

export default HomePage