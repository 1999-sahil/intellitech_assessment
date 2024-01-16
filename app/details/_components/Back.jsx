import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Back = () => {
  return (
    <div className='w-[75px] h-[24px] flex items-center gap-[10px] cursor-pointer mb-[22px]'>
        <FaArrowLeft className='text-[#757474]' />
        <h2 className='text-black font-raleway text-[16px] font-bold leading-normal'>Back</h2>
    </div>
  )
}

export default Back