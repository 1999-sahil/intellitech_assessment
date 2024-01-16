import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin  } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Store from './Store'

const Footer = () => {
  return (
    <div className='w-full h-[228px] bg-[#FFFFFF]'>
        {/** Container */}
        <div className='w-full h-[183px] pt-[23px] pb-[22px]'>
          <div className='w-[984px] h-[125px] ml-[150px] flex items-center justify-between'>
            {/** three div's */}

            {/** Logo and social links */}
            <div className='w-[120px] h-[79.5px] gap-[20px] flex items-center flex-col'>
              <div className='w-[100px] h-[41.5px] items-center'>
                <Image 
                  src='/formlogo_1.png'
                  alt='footer-logo'
                  width={100}
                  height={41.5}
                />
              </div>
              <div className='flex w-[120px] h-[18px] items-center text-[#7C7C7C] gap-[16px]'>
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter  />
                <FaLinkedin />
              </div>
            </div>

            {/** Footer menu lists */}
            <div className='w-[338px] h-[116px] flex items-center justify-between gap-[45px]'>
              <div className='w-[103px] h-[116px] flex flex-col gap-[14px]'>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>About Us</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Sitemap</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Credits</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Help Center</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal whitespace-nowrap'>Community Guidelines</h2>
              </div>
              
              <div className='w-[103px] h-[116px] flex flex-col gap-[14px]'>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Accessibility</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Mobile</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Marketing</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Advertising</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Report Issue</h2>
              </div>
              
              <div className='w-[103px] h-[116px] flex flex-col gap-[14px]'>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal'>Privacy Policy</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal whitespace-nowrap'>Terms & Conditions</h2>
                <h2 className='text-[#7C7C7C] font-urbanist text-[10px] font-semibold leading-normal whitespace-nowrap'>Trust & Safety</h2>
              </div>
            </div>

            {/** google-playstore/app store */}
            <div className='w-[123px] h-[125px] flex flex-col gap-[23px] items-center justify-center'>
              <Store
                logo='/apple.svg'
                text='App Store' 
              />

              <Store
                logo='/play-store.svg'
                text='Play Store' 
              />
            </div>
          </div>
        </div>

        <div className='w-full h-[1px] bg-[rgba(197,197,197,0.32)]'></div>
        <div className='w-[210px] h-[20px] ml-[150px] my-[15px] pb-[22px]'>
          <h2 className='text-[#7C7C7C] font-urbanist text-[8px] font-medium leading-normal'>
            All trademarks are the property of their respective owners
            All rights reserved © 2024 FormEase
          </h2>
        </div>
    </div>
  )
}

export default Footer