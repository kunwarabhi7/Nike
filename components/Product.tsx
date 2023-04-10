import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {
    MRP:string;
    image: string ;
    colors : number;
    category : string;
    name : string;
    Seller:string;
    
}

const Product = ({MRP,image,colors,category,name,Seller}: Props) => {
  return (
    <Link href='/'>
<div  className='md:h-[440px] md:w-[320px] h-[280px] w-[120px]  md:mx-4 '>
    <Image alt={name} src={image} width={320} height={320} className='w-[145px] h-[145px] rounded-lg md:h-[260px] md:w-[260px] '/>
    <div className=' md:mx-8 mx-4 md:space-y-2 space-y-1 bg-white text-xs md:text-sm'>

    <p className='text-[#D09e54]  font-oswald'>{Seller}</p>
    <p className='md:text-xl font-popins '>{name}</p>
    <p className='text-gray-500 '>{category}</p>
    <p className='text-gray-500 '>{colors}Colors Available</p>
    <p>Price{MRP}</p>
    </div>
</div>
    </Link>
  )
}

export default Product