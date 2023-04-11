import Image from "next/image";
import React from "react";
import {AiOutlineHeart} from 'react-icons/ai'
import {BsTrash3} from 'react-icons/bs'

type Props = {}


const CartItem = (props: Props) => {
  return (
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
      <p className="text-gray-400">Men's Shoes</p>
      <p className="text-gray-400">Summit White/Tech Grey/Black/Fire Red</p>
      <div className="flex space-x-4 my-2 text-gray-400">
        <p>Size 8</p>
        <p>Quantity 1</p>
      </div>
      <div className="flex my-4 space-x-4">
        <AiOutlineHeart size={30} />
        <BsTrash3  size={30}/>
      </div>
    </div>
  </div>
  )
}

export default CartItem