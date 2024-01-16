import React from 'react'
import ExamCard from './ExamCard'

const RelatedExam = () => {
  return (
    <div className='w-full h-[650px] rounded-[10px] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)]'>
        {/** container */}
        <div className='w-[380px] h-[563px] p-[20px] gap-[19px]'>
            {/** heading */}
            <div className='w-[269px] h-[22px] mb-[19px]'>
                <h2 className='text-black font-urbanist text-[18px] font-bold whitespace-nowrap'>
                    Exams you might be interested in
                </h2>
            </div>

            {/** exams */}
            <div className='w-full h-[522px] gap-[20px]'>
                <div className='space-y-[20px]'>
                    <ExamCard
                        logo='/beee.png'
                        title='BEEE 2023'
                        name='Bharat University'
                        users='More than 5 Lakhs'
                        price='Rs. 1600'
                    />

                    <ExamCard
                        logo='/ts.png'
                        title='TS EAMCET 2023'
                        name='TSCHE'
                        users='More than 15 Lakhs'
                        price='Rs. 1000'
                    />

                    <ExamCard
                        logo='/srm.png'
                        title='SRMJEE 2023'
                        name='SRMST'
                        users='More than 10 Lakhs'
                        price='Rs. 1500'
                    />

                    <ExamCard
                        logo='/vit.png'
                        title='VITJEE 2023'
                        name='Vellore Institute of Technology'
                        users='More than 10 Lakhs'
                        price='Rs. 1500'
                    />
                </div>
                <div className='w-[85px] justify-center items-center inline-flex h-[34px] px-[15px] py-[10px] mt-[25px] ml-[40%] rounded-[20px] border-[2px] border-solid border-[#246BFD]'>
                    <h2 className='text-[#246BFD] font-raleway text-[12px] font-semibold'>View all</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RelatedExam