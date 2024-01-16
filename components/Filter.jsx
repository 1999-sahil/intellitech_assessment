import React from 'react'

const Filter = ({ text }) => {
  return (
    <div className='inline-flex px-[15px] py-[10px] items-center justify-center rounded-[20px] border-[1px] border-solid border-[#246BFD] cursor-pointer hover:bg-[#246BFD] text-[#246BFD] hover:text-white'>
        <h2 className='font-raleway text-[14px] font-semibold leading-normal'>
            {text}
        </h2>
    </div>
  )
}

export default Filter