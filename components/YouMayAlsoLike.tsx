import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import Image from 'next/image';

type Props = {}

const YouMayAlsoLike = (props: Props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 40 },
          items: 1
        }
      };
  return (
    <div className=' mx-8 w-full'>
        <p className='font-bold text-xl my-2'>You May Also Like</p>
<Carousel  infinite={true} 
 responsive={responsive}>
    <div className='mr-2'>
 <Image width={500} height={500} src='https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/d465f39d-0cf2-424b-9714-78ea2e098b89/air-jordan-1-low-se-craft-shoes-q1ktlR.png' alt=''  />
 <p className='font-bold'>Air Jordan Legacy 312 Low</p>
 <p className='text-gray-400'>Men's Shoes</p>
 <p>MRP : ₹ 12 995.00 </p>
    </div>
    <div className='mr-2'>
 <Image width={500} height={500} src='https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/d465f39d-0cf2-424b-9714-78ea2e098b89/air-jordan-1-low-se-craft-shoes-q1ktlR.png' alt=''  />
 <p>Air Jordan Legacy 312 Low</p>
 <p className='text-gray-400'>Men's Shoes</p>
 <p>MRP : ₹ 12 995.00 </p>
    </div>
    <div className='mr-2'>
 <Image width={500} height={500} src='https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/d465f39d-0cf2-424b-9714-78ea2e098b89/air-jordan-1-low-se-craft-shoes-q1ktlR.png' alt=''  />
 <p>Air Jordan Legacy 312 Low</p>
 <p className='text-gray-400'>Men's Shoes</p>
 <p>MRP : ₹ 12 995.00 </p>
    </div>
    <div className='mr-2'>
 <Image width={500} height={500} src='https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/d465f39d-0cf2-424b-9714-78ea2e098b89/air-jordan-1-low-se-craft-shoes-q1ktlR.png' alt=''  />
 <p>Air Jordan Legacy 312 Low</p>
 <p className='text-gray-400'>Men's Shoes</p>
 <p>MRP : ₹ 12 995.00 </p>
    </div>
    <div className='mr-2'>
 <Image width={500} height={500} src='https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/d465f39d-0cf2-424b-9714-78ea2e098b89/air-jordan-1-low-se-craft-shoes-q1ktlR.png' alt=''  />
 <p>Air Jordan Legacy 312 Low</p>
 <p className='text-gray-400'>Men's Shoes</p>
 <p>MRP : ₹ 12 995.00 </p>
    </div>
 </Carousel>;
   
    </div>
  )
}

export default YouMayAlsoLike