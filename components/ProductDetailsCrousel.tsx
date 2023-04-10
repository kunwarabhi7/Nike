import Image from "next/image";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    id: 1,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53a1614a-a5fd-4bfe-977e-6921451ed50e/air-force-1-react-shoes-mm8pv3.png",
  },
  {
    id: 2,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2dffeb94-7082-47be-ab56-963e7584ca01/air-force-1-react-shoes-mm8pv3.png",
  }, {
    id: 3,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53a1614a-a5fd-4bfe-977e-6921451ed50e/air-force-1-react-shoes-mm8pv3.png",
  }, {
    id: 4,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53a1614a-a5fd-4bfe-977e-6921451ed50e/air-force-1-react-shoes-mm8pv3.png",
  }, {
    id: 5,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53a1614a-a5fd-4bfe-977e-6921451ed50e/air-force-1-react-shoes-mm8pv3.png",
  }, {
    id: 6,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53a1614a-a5fd-4bfe-977e-6921451ed50e/air-force-1-react-shoes-mm8pv3.png",
  }, {
    id: 7,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53a1614a-a5fd-4bfe-977e-6921451ed50e/air-force-1-react-shoes-mm8pv3.png",
  }, {
    id: 8,
    url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53a1614a-a5fd-4bfe-977e-6921451ed50e/air-force-1-react-shoes-mm8pv3.png",
  },
];

type Props = {};

const ProductDetailsCrousel = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
      <div className=" z-40 text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
          className="productCarousel"
          thumbWidth={60}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          
          autoFocus
        >
          {images.map((image, index) =>(
           
                <img key={index} alt="image"  src={image.url} />
           ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetailsCrousel;
