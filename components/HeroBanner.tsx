import React from "react";
import Image1 from "../public/slide-1.png";
import Image2 from "../public/slide-2.png";
import Image3 from "../public/slide-3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";
type Props = {};

const HeroBanner = (props: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto ">

    <Carousel
      className="mt-12 relative"
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className='absolute bottom-1 md:bottom-8 cursor-pointer right-6 z-10 '
            onClick={clickHandler}
          >
            <AiFillCaretLeft size={30}/>
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className='absolute bottom-1 md:bottom-8 cursor-pointer right-1 z-10'
            onClick={clickHandler}
          >
            <AiFillCaretRight  size={30}/>
          </div>
        );
      }}
      >
    
    
      <div>
        <Image alt="image1" className="object-cover" src={Image1} />
        <p className="absolute top-24 md:top-80 left-0 md:left-2 bg-white p-1 text-sm md:text-lg font-bold" >Buy Now</p>
        
      </div>
      <div>
        <Image alt="image2" src={Image2} />
        <p className="absolute top-24 md:top-80 left-0 md:left-2 bg-white p-1 text-sm md:text-lg font-bold">Buy Now</p>
        
      </div>
      <div>
        <Image alt="image3" src={Image3} />
        <p className="absolute top-24 md:top-80 left-0 md:left-2 bg-white p-1 text-sm md:text-lg font-bold">Buy Now</p>
        
      </div>
    </Carousel>
      </div>
  );
};

export default HeroBanner;
