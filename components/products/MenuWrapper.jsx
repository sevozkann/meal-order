import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className='px-5 mx-auto pb-5 xl:container'>
        <Title addClass={`text-center text-4xl`}>Our Menu</Title>
        <div className='flex justify-center items-center'>
            <button className='px-6 py-2 rounded-3xl bg-secondary text-white'>All</button>
            <button className='px-6 py-2 rounded-3xl'>Burger</button>
            <button className='px-6 py-2 rounded-3xl'>Pizza</button>
            <button className='px-6 py-2 rounded-3xl'>Drink</button>
        </div>
        <div className='mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </div>
  )
}

export default MenuWrapper