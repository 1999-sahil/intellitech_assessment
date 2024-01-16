import React from 'react'
import Back from './_components/Back'
import DetailCard from './_components/DetailCard'
import ExamDescription from './_components/ExamDescription'
import RelatedExam from './_components/RelatedExam'
import Link from 'next/link'

const Details = () => {
  return (
    <div className='w-full bg-[#F8F9FA] pl-[150px] flex gap-[40px]'>
      {/** left div */}
      <div className='w-[520px] pt-[40px]'>
        {/** back */}
        <Link href='/'>
          <Back />
        </Link>

        {/** card */}
        <DetailCard />

        {/** exam desc and eligibility */}
        <ExamDescription />
      </div>

      {/** right div */}
      <div className='w-[420px] pt-[90px]'>
        <RelatedExam />
      </div>
    </div>
  )
}

export default Details