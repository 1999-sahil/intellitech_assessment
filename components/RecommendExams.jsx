import React from 'react'

const RecommendExams = () => {
  return (
    <div className='flex items-center ml-[150px] mt-[30px]'>
        {/** text and seeAll */}
        <div className='flex items-center w-[172px] h-[19px]'>
            <h2 className='text-black font-raleway text-[16px] font-bold leading-normal'>Recommended exams</h2>
        </div>
        <div className='flex items-center w-[54px] h-[19px] ml-[760px]'>
            <h2 className='text-[#246BFD] font-raleway font-bold leading-normal cursor-pointer'>See All</h2>
        </div>
    </div>
  )
}

export default RecommendExams