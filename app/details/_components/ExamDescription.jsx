import Image from 'next/image'
import React from 'react'
import { FaSquareFacebook, FaXTwitter  } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
const ExamDescription = () => {
  return (
    <div className='w-full h-[720px] mb-[40px] rounded-[10px] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)]'>
      {/** container */}
      <div className='w-[480px] h-[652px] p-[20px]'>
        {/** exam desc */}
        <div className='w-full h-[184px] gap-[17px] flex flex-col mb-[40px]'>
          <h2 className='text-black font-urbanist text-[18px] font-bold leading-normal w-[146px] h-[22px]'>
            Exam Description:
          </h2>
          <div className='w-full h-[145px]'>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - JEE Main is a standardized test conducted across different states in India.
            </p>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - The exam is held at an undergraduate level to offer admissions to some of the 
              best engineering and technical institutions that are Government funded or privately-owned.
            </p>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - The exam conducting authority considers the best NTA score in preparing the ranks/merit list.
            </p>
          </div>
        </div>

        {/** eligibility */}
        <div className='w-full h-[177px] gap-[17px] flex flex-col mb-[40px]'>
          <h2 className='text-black font-urbanist text-[18px] font-bold leading-normal w-[78px] h-[22px]'>
            Eligibility:
          </h2>
          <div className='w-full h-[138px]'>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - Age Limit - No age limit
            </p>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - Qualifying Exam - Class 12/Equivalent Exam
            </p>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - Percentage - At least 75% in class 12/equivalent exam
            </p>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - Year of Passing - 2021, 2022 or appearing in 2023
            </p>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - Number of attempts - Candidate can appear in JEE Main for 3 consecutive years 
              after passing their class 12/equivalent exam
            </p>
          </div>
        </div>

        {/** imp details */}
        <div className='w-full h-[166px] gap-[17px] flex flex-col mb-[40px]'>
          <h2 className='text-black font-urbanist text-[18px] font-bold leading-normal w-[144px] h-[22px] whitespace-nowrap'>
            Important Details:
          </h2>
          <div className='w-full h-[124px]'>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - JEE Main 2023 January Session: NTA released the JEE Main 2023 session 1 will be 
              conducted between 24th January and 1st February, 2023.
            </p>
            <p className='text-black text-justify font-urbanist text-[16px] font-normal leading-normal'>
              - JEE Main 2023 April Session: NTA released the JEE Main 2023 session 1 will be conducted 
              between 1st April, 2023 and 15th April, 2023.
            </p>
          </div>
        </div>

        {/** social icons */}
        <div className='w-full h-[0.3px] bg-[#9F9F9F] mb-[20px]'></div>

        <div className='w-[114px] h-[30px] flex gap-[12px]'>
          <div className='w-[24px] h-[24px]'>
            <FaSquareFacebook className='text-[#246BFD] rounded-lg text-[24px]' />
          </div>
          <div className='w-[24px] h-[24px]'>
            <FaXTwitter className='text-white bg-black rounded-lg p-1 text-[24px]' />
          </div>
          <div className='w-[24px] h-[24px]'>
            <FaLinkedin className='text-[#356fe4fd] rounded-lg  text-[24px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamDescription