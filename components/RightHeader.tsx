import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import {SiJordan} from 'react-icons/si'
import {AiOutlineHeart,AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
type Props = {}

const RightHeader = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='flex relative items-center justify-center space-x-2'>
        <div className='md:flex hidden items-center justify-center bg-gray-200 rounded-full w-24 h-5'>
            <BsSearch size={20} className='px-1'/>
            <input type='text' className=' bg-transparent rounded-full w-16 text-sm pl-2 py-1 focus:outline-none ' placeholder='search' />
        
        </div>
        <div><BsSearch size={15} className='md:hidden'/></div>
        <div><AiOutlineHeart className='hidden md:flex' /></div>
        <div><BiShoppingBag /></div>
        <div className='md:hidden '>
            
        
        {isOpen ? '' : <AiOutlineMenu onClick={toggleMenu}  />}

      {isOpen && (
        <div className="bg-white w-40 border rounded h-screen absolute top-0 -right-5 ">
          <ul className='flex flex-col space-y-1 text-sm font-semibold'>
            <AiOutlineClose onClick={toggleMenu} size={15}/>
            <li>New & Featured</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKRS</li>
            <li><SiJordan size={20}/></li>
          </ul>
        </div>
      )}
        </div>
    </div>
  )
}

export default RightHeader