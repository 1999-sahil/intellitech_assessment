'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegBell  } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full h-[100px] bg-[#FFF] flex-shrink-0 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]'>
        {/** CONTAINER */}
        <div className='flex items-center'>
            {/** LOGO CONTAINER */}
            <div className='px-[150px] pt-[29px] pb-[29.5px]'>
                <Image
                    src='/formlogo_1.png'
                    alt='logo'
                    width={100}
                    height={41.5} 
                />
            </div>
            {/** MENU ITEMS  & SEARCH BAR */}
            <div className='flex items-center gap-[35px]'>
                <Link href='' className='w-[42px] h-[19px] text-[16px] font-urbanist font-medium leading-normal text-[#246BFD]'>Home</Link>
                <Link href='/details' className='w-[42px] h-[19px] text-black text-[16px] font-urbanist font-medium leading-normal hover:text-[#246BFD]'>Result</Link>
                <Link href='' className='w-[30px] h-[19px] text-black text-[16px] font-urbanist font-medium leading-normal hover:text-[#246BFD]'>FAQ</Link>
                <Link href='' className='w-[65px] h-[19px] text-black text-[16px] font-urbanist font-medium leading-normal hover:text-[#246BFD]'>About Us</Link>
                <Link href='' className='w-[79px] h-[19px] text-black text-[16px] font-urbanist font-medium leading-normal hover:text-[#246BFD]'>Contact Us</Link>
            </div>
            <div className='max-w-[250px] h-[30px] ml-[35px] relative flex items-center flex-shrink-0 text-[#9F9F9F] font-raleway focus-within:text-[#246BFD]'>
                <CiSearch className='absolute w-[16px] h-[16px] ml-3' />
                <input 
                    type='text'
                    name='search'
                    placeholder='Search exams here'
                    autoComplete='off'
                    aria-label='Search exams here'
                    className='rounded-full border-[0.5px] border-solid border-[#246BFD] font-raleway text-[12px] font-normal leading-normal focus-within:text-[#246BFD] outline-none pl-[42px] pt-[8px] pb-[8px] pr-[102px]'
                />
            </div>
            <div className='w-[24px] h-[24px] cursor-pointer ml-[45px] items-center flex-shrink-0'>
                <FaRegBell className='text-[#246BFD] text-xl font-semibold' />
            </div>
            {/** USER IMAGE */}
            <div className='ml-[32px] w-[50px] h-[50px] cursor-pointer items-center rounded-full'>
                <Image
                    src='/Ellipse_1.svg'
                    alt='user-logo'
                    objectFit='contain'
                    width={50}
                    height={50}
                />
            </div>
        </div>
    </div>
  )
}

export default Navbar