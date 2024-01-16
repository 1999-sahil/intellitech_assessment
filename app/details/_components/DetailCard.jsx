import Image from 'next/image'
import React from 'react'
import { IoMdShare } from 'react-icons/io'
import { IoBookmarkOutline } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'
import { FaPeopleGroup } from 'react-icons/fa6'

const DetailCard = () => {
  return (
    <div className='w-full h-[196px] mb-[20px] rounded-[10px] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)]'>
        <div className='p-[20px] flex justify-between items-center'>
            <div className='flex gap-[20px]'>
                <Image
                    src='/Rectangle_5.png'
                    alt='logo'
                    width={30}
                    height={30} 
                />
                <div className='w-[110px] h-[36px] flex flex-col'>
                    <h2 className='text-black font-urbanist text-[16px] font-semibold leading-normal'>JEE Mains 2023</h2>
                    <h2 className='text-[#246BFD] text-[10px] font-medium leading-normal font-urbanist'>National Testing Agency</h2>
                </div>
            </div>

            <div className='w-[52px] h-[20px] gap-[10px] flex'>
                <IoBookmarkOutline className='text-[#246BFD] text-[18px]' />
                <IoMdShare className='text-black text-[18px]' />
            </div>
        </div>

        {/** exam date and applicants */}
        <div className='pl-[20px] mb-[14px] flex flex-col gap-[16px]'>
            <div className='flex gap-[8px] items-center'>
                <SlCalender className='text-[#246BFD] text-[16px]' />
                <h2 className='text-black font-urbanist text-[10px] font-medium leading-normal'>Exam Date: 23 March 2023</h2>
            </div>
            <div className='flex gap-[8px] items-center'>
                <FaPeopleGroup className='text-[#246BFD] text-[16px]' />
                <h2 className='text-black font-urbanist text-[10px] font-medium leading-normal'>Applicants: 23 Lakhs+</h2>
            </div>
        </div>

        {/** line */}
        <div className='w-[480px] h-[1px] ml-[20px] bg-[#9F9F9F]'></div>

        {/** apply now */}
        <div className='w-[480px] h-[32px] p-[20px] inline-flex gap-[213px] items-center'>
            <div className='w-[187px] h-[14px]'>
                <h2 className='text-[#9F9F9F] font-urbanist text-[12px] font-medium leading-normal whitespace-nowrap'>Posted 50 days ago, ends on 31 Dec</h2>
            </div>
            <div className='w-[80px] h-[32px] mt-[30px] mb-[20px] inline-flex px-[15px] py-[10px] rounded-[20px] bg-[#246BFD] items-center justify-center'>
                <button className='text-white font-raleway text-[10px] font-semibold leading-normal whitespace-nowrap'>Apply now</button>
            </div>
        </div>
    </div>
  )
}

export default DetailCard