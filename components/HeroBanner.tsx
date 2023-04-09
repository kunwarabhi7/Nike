import React from "react";
import Image1 from "../public/slide-1.png";
import Image2 from "../public/slide-2.png";
import Image3 from "../public/slide-3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
type Props = {};

const HeroBanner = (props: Props) => {
  return  <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false}>
  <div>
      <Image alt="image1" src={Image1} />
      {/* <p className="legend">Legend 1</p> */}
  </div>
  <div>
      <Image alt="image2" src={Image2} />
      {/* <p className="legend">Legend 2</p> */}
  </div>
  <div>
      <Image alt="image3" src={Image3} />
      {/* <p className="legend">Legend 3</p> */}
  </div>
</Carousel>
};

export default HeroBanner;
