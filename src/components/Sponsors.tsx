import React from 'react'

type props = {
  img: string;
  text: string;
}

const Sponsors = ({img, text}:props) => {
  return (
    <div className='flex gap-2 items-center ssm:gap-0'>
        <img src={img} className='ssm:w-5 ssm:h-5 ssm:object-cover ssm:object-center'/>
        <h2 className='text-[#000000]/50 font-bold text-2xl ssm:text-sm'>{text}</h2>
    </div>
  )
}

export default Sponsors;