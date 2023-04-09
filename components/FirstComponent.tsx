import React from 'react'

type Props = {}

const FirstComponent = (props: Props) => {
  return (
    <div className='my-2 max-w-7xl mx-4 md:text-center'>
        <p className='text-sm font-semibold'>Nike Vaporfly 3</p>
        <h1 className='md:text-3xl text-2xl font-extrabold'>RECORD BREAKERS</h1>
        <p className='text-xs md:text-sm '>Get access to an exclusive colourway available only on the Nike App.</p>
        <div className='flex item-center justify-center gap-4 my-1 mb-4'>
            <button className='bg-black text-white rounded-full px-2 py-1 hover:opacity-50 text-xs shadow-lg'>Shop</button>
            <button className='bg-black text-white rounded-full px-2 py-1 hover:opacity-50 text-xs shadow-lg'>Download the Nike App</button>
        </div>
    </div>
  )
}

export default FirstComponent