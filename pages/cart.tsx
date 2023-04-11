import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import Image from "next/image";
import React from "react";
import {AiOutlineHeart} from 'react-icons/ai'
import {BsTrash3} from 'react-icons/bs'
 type Props = {};

const Cart = (props: Props) => {
  return (
    <div>


    <div
      className="py-20 text-black w-full
    
      flex flex-col md:flex-row  item-center justify-around"
    >
      <div className="text-xl ">
        <p className="text-center md:text-left md:ml-5 font-bold"> Bag</p>
        <div className=" flex shadow  p-2  ">
          <div className="my-2">
            <Image
              src="https://secure-images.nike.com/is/image/DotCom/CD7069_101?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
              alt="cart"
              width={280}
              height={280}
            />
          </div>
          <div className="w-full ml-8 mt-4">
            <div className="flex items-center justify-between">
              <p>Air Jordan Legacy 312 Low</p>
              <p>MRP: ₹ 12 995.00</p>
            </div>
            <p>Men's Shoes</p>
            <p>Summit White/Tech Grey/Black/Fire Red</p>
            <div className="flex">
              <p>Size 8</p>
              <p>Quantity 1</p>
            </div>
            <div className="flex my-4 space-x-4">
              <AiOutlineHeart size={30} />
              <BsTrash3  size={30}/>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl  ">
        <p> Summary</p>
        <div className="flex justify-between ">
          <p>Subtotal</p>
          <p>₹ 12 995.00</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-">Estimated Delivery & Handling</p>
          <p>₹ 750.00</p>
        </div>
        <div className="border-t border-gray-300  "/>
        <div className="flex justify-between my-3">
          <p>Total</p>
          <p>₹ 13 745.00</p>
        </div>
        <div className="border-t border-gray-300 "/>
        <div className="flex flex-col space-y-2 mt-5">
          <button className="bg-black rounded-full py-1 text-white">Guest CheckOut</button>
          <button className="bg-black text-white py-1 rounded-full">Member Checkout</button>
        </div>
      </div>
    </div>
    <YouMayAlsoLike />
    </div>
  );
};

export default Cart;
