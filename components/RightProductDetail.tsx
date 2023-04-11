import React from "react";

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
            <div className="border cursor-pointer py-3 font-medium  rounded-md text-center  hover:border-black">UK 6 (EU 40)</div>
            <div className="border cursor-pointer py-3 font-medium  rounded-md text-center  hover:border-black">UK 6 </div>
            <div className="border cursor-pointer  rounded-md py-3 font-medium text-center  hover:border-black">UK 6 </div>
            <div className="border cursor-pointer  rounded-md text-center py-3 font-medium  hover:border-black">UK 6 </div>
            <div className="border cursor-pointer  rounded-md text-center  py-3 font-medium hover:border-black">UK 6 </div>
            <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">UK 6 </div>
            <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">UK 6 </div>
            <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">UK 6 </div>
            <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">UK 6 </div>
            <div className="border cursor-pointer  rounded-md text-center  hover:border-black py-3 font-medium">UK 6 </div>

        </div>
      </div>
    </div>
  );
};

export default RightProductDetail;
