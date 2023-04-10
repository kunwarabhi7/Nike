import Image from 'next/image'
import React, { useState } from 'react'
import p1 from '../public/p1.png'
import p2 from '../public/p2.png'
import p3 from '../public/p3.png'
import p4 from '../public/p4.png'
import p5 from '../public/p5.png'
import p6 from '../public/p6.png'
import p7 from '../public/p7.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

type Props = {}

const ProductDetailsCrousel = (props: Props) => {
    const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
        <div className='text-xl w-full max-w-[360px] h-96 mx-auto sticky top-[50px] my-20'>
        <Carousel  infiniteLoop autoPlay autoFocus showThumbs={true}>
                <div>
                    <Image src={p1} alt='' />

                </div>
                <div>
                    <Image src={p2} alt=''/>
                </div>
                <div>
                    <Image src={p3}  alt=''/>
                </div>
            </Carousel>
    </div>
    </div>
  )
}

export default ProductDetailsCrousel