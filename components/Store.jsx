import Image from 'next/image'
import React from 'react'

const Store = ({ logo, text }) => {
  return (
    <div className='w-[153px] h-[51px] px-[15px] py-[10px] gap-[10px] flex items-center rounded-[10px] bg-[#120E0E] cursor-pointer'>
        <div className='w-[24px] h-[24px] flex items-center'>
            <Image
                src={logo}
                alt='store-logo'
                width={24}
                height={24} 
            />
        </div>
        <div className='w-[89px] h-[31px] flex flex-col items-start justify-center gap-1'>
            <h2 className='text-white font-urbanist text-[10px] font-normal leading-[114%]'>Download on the</h2>
            <h2 className='text-white font-urbanist text-[14px] font-medium leading-[114%]'>{text}</h2>
        </div>
    </div>
  )
}

export default Store