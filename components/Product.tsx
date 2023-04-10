import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Image1 from '../public/product-1.webp'

type Props = {}

const Product = (props: Props) => {
  return (
    <Link href='/'>
<div className='md:h-[440px] md:w-[320px] h-[280px] w-[120px]  md:mx-4 '>
    <Image alt='/' src={Image1} className='w-[145px] h-[145px] rounded-lg md:h-[260px] md:w-[260px] '/>
    <div className=' md:mx-8 mx-4 md:space-y-2 space-y-1 bg-white text-xs md:text-sm'>

    <p className='text-[#D09e54]  font-oswald'>Best Seller</p>
    <p className='md:text-xl font-popins '>Name</p>
    <p className='text-gray-500 '>Category</p>
    <p className='text-gray-500 '>Colors Available</p>
    <p>Price</p>
    </div>
</div>
    </Link>
  )
}

export default Product