import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {
data : {
  name:string,
  orignail_price:number,
  price : number,
  slug:string,
  description:string,
  thumbnail:{
    data:{
attributes:{
  url:string
}
    }
  }

}
}

const Product = ({data}: Props) => {
  // console.log(data)
  return (
    <Link href={data.slug}>
<div  className='md:h-[440px] md:w-[320px] h-[280px] w-[120px]  md:mx-4 '>
 
    <Image src={data?.thumbnail?.data?.attributes?.url} alt={data.name} height={500} width={500} className='w-[145px] h-[145px] rounded-lg md:h-[260px] md:w-[260px] '/>
    <div className=' md:mx-8 mx-4 md:space-y-2 space-y-1 bg-white text-xs md:text-sm'>

    <p className='text-[#D09e54]  font-oswald'>{data.description}</p>
    <p className='md:text-xl font-popins '>{data.name}</p>
    <p className='text-gray-500 '>{data.orignail_price}</p>
    <p>Price{data.price}</p>
    </div>
</div>
    </Link>
  )
}

export default Product