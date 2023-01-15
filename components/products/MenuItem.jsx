import React from 'react'
import Image from "next/legacy/image";
import { RiShoppingCart2Fill } from 'react-icons/ri';

const MenuItem = () => {
  return (
    <div className='bg-secondary rounded-3xl'>
        <div className='w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl'>
        <div className='relative w-36 h-36 hover:scale-110 transition-all'>
            <Image
                src='/images/hamburger-1.png'
                alt='pizza' layout='fill' priority />
        </div>
        </div>
        <div className='p-[25px] text-white'>
            <h4 className='text-xl font-semibold'>pizza</h4>
            <p className='text-[15px]'>pizza</p>
            <div className='flex justify-between items-center mt-4'>
                <span>25Tl</span>
                <button
                    className='btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center'
                >
                    <RiShoppingCart2Fill />
                </button>
            </div>
        </div>
    </div>
  )
}

export default MenuItem