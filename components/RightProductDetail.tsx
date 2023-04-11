import React from "react";
import {AiOutlineHeart} from 'react-icons/ai'

type Props = {};

const RightProductDetail = (props: Props) => {
  return (
    <div>
      <p className="text-xl font-semibold">Nike Air Force 1 React</p>
      <p>Men's Shoes</p>
      <p>MRP : ₹ 13 295.00</p>
      <p className="text-gray-500">incl. of taxes</p>
      <p className="text-gray-500">(Also includes all applicable duties)</p>
      <div>
        <div className="flex item-center justify-between my-2">
          <p>Select Size</p>
          <p className="text-gray-500">Size Guide</p>
        </div>
        <div className="grid grid-cols-3 gap-2  ">
          <div className="border cursor-pointer py-3 font-medium  rounded-md text-center  hover:border-black">
            UK 6 (EU 40)
          </div>
          <div className="border cursor-pointer py-3 font-medium  rounded-md text-center  hover:border-black">
            UK 6{" "}
          </div>
          <div className="border cursor-pointer  rounded-md py-3 font-medium text-center  hover:border-black">
            UK 6{" "}
          </div>
          <div className="border cursor-pointer  rounded-md text-center py-3 font-medium  hover:border-black">
            UK 6{" "}
          </div>
          <div className="border cursor-pointer  rounded-md text-center  py-3 font-medium hover:border-black">
            UK 6{" "}
          </div>
          <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">
            UK 6{" "}
          </div>
          <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">
            UK 6{" "}
          </div>
          <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">
            UK 6{" "}
          </div>
          <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">
            UK 6{" "}
          </div>
          <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">
            UK 6{" "}
          </div>
        </div>
        <div className="flex flex-col space-y-3">

        <button className="bg-black text-white rounded-full py-2 font-bold hover:opacity-50">Add to Bag</button>


        <button className="border bg-white flex item-center justify-center text-black rounded-full py-2 font-bold hover:border-black">Favorite <span  className='mt-[2px] text-gray-500 ml-1'><AiOutlineHeart size={20} /></span> </button>
        </div>
      </div>
    </div>
  );
};

export default RightProductDetail;
