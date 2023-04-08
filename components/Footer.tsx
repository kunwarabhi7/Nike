import React from 'react'
import {AiFillTwitterCircle, AiOutlinePlus} from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs' 
import { TfiYoutube } from 'react-icons/tfi' 
import { ImInstagram } from 'react-icons/im'                  
import { HiLocationMarker } from 'react-icons/hi'                  
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black px-2     text-white '>
      <div className='md:flex items-center justify-between p-1'>
      <div className='uppercase text-[10px] font-semibold'>
        <p>Find a STORE</p>
        <p>Become a MEMBER</p>
        <p>sign up for email</p>
        <p>Send Us Feedback</p>
        <p>STUDENT DISCOUNTS</p>
      </div>
      <div  className='flex items-center justify-between p-2 text-[10px] my-1'>
        <p>GET HELP</p>
<AiOutlinePlus />
      </div>

      <div  className='flex items-center justify-between p-2 text-[10px] my-1'>
        <p>ABOUT NIKE</p>
<AiOutlinePlus />
      </div>
      <div className='flex items-center justify-start space-x-4 mx-2 my-2'  >
        <AiFillTwitterCircle className='text-gray-400 hover:text-white cursor-pointer'/>
        <BsFacebook className='text-gray-400 hover:text-white cursor-pointer' />
        <TfiYoutube className='text-gray-400 hover:text-white cursor-pointer'/>
        <ImInstagram className='text-gray-400 hover:text-white cursor-pointer' />
      </div>
      </div>
      <div className='md:hidden border-b border-gray-700 my-1'/>
        <div className='md:flex items-center justify-between'>

      <div className='flex text-[8px] items-center justify-start'>
<HiLocationMarker />
<p>India</p>
      </div>
      <div className='text-[8px] '>
        <p className='text-gray-400'>© 2023 Nike, Inc. All Rights Reserved
</p>
      </div>
      <div className='text-[8px] mt-2 pb-2 md:flex items-center justify-between space-x-2'>
        <p className='text-gray-400 cursor-pointer ml-2 md:ml-0 hover:text-white'>Guides</p>
        <p className='text-gray-400 cursor-pointer hover:text-white'>Terms of sale</p>
        <p className='text-gray-400 cursor-pointer hover:text-white'>Terms of use</p>
        <p className='text-gray-400 cursor-pointer hover:text-white'>Nike Privacy Policy</p>
      </div>
        </div>
    </div>
  )
}

export default Footer