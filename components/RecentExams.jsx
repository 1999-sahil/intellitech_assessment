import React from 'react'

const RecentExams = () => {
  return (
    <div className='flex items-center pl-[150px] pt-[30px] mt-[30px]'>
        {/** text and seeAll */}
        <div className='flex items-center w-[108px] h-[19px]'>
            <h2 className='text-black font-raleway text-[16px] font-bold leading-normal'>Recent exams</h2>
        </div>
        <div className='flex items-center w-[54px] h-[19px] ml-[825px]'>
            <h2 className='text-[#246BFD] font-raleway font-bold leading-normal cursor-pointer'>See All</h2>
        </div>
    </div>
  )
}

export default RecentExams