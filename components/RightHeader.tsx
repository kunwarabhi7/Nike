import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import {AiOutlineHeart , AiOutlineMenu} from 'react-icons/ai'
type Props = {}

const RightHeader = (props: Props) => {
  return (
    <div className='flex items-center justify-center space-x-2'>
        <div className='md:flex hidden items-center justify-center bg-gray-200 rounded-full w-24 h-5'>
            <BsSearch size={20} className='px-1'/>
            <input type='text' className=' bg-transparent rounded-full w-16 text-sm pl-2 py-1 focus:outline-none ' placeholder='search' />
        
        </div>
        <div><BsSearch size={15} className='md:hidden'/></div>
        <div><AiOutlineHeart className='hidden md:flex' /></div>
        <div><BiShoppingBag /></div>
        <div><AiOutlineMenu className='md:hidden'/></div>
    </div>
  )
}

export default RightHeader