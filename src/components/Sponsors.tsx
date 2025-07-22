import React from 'react'
import { assets } from '../assets/assets';

type props = {
  img: string;
  text: string;
}

const Sponsors = ({img, text}:props) => {
  return (
    <div className='flex gap-2 items-center'>
        <img src={img}/>
        <h2 className='text-[#000000]/50 font-bold text-2xl'>{text}</h2>
    </div>
  )
}

export default Sponsors;