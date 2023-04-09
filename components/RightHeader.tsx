import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { SiJordan } from "react-icons/si";
import { AiOutlineHeart, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
type Props = {};

const RightHeader = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(3);
  const [likedItem, setLikedItem] = useState(2);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex relative items-center justify-center space-x-2">
      <div className="md:flex hidden items-center justify-center bg-gray-200 rounded-full w-24 h-5">
        <BsSearch size={20} className="px-1" />
        <input
          type="text"
          className=" bg-transparent rounded-full w-16 text-sm pl-2 py-1 focus:outline-none "
          placeholder="search"
        />
      </div>
      <div>
        <BsSearch size={15} className="md:hidden" />
      </div>
      <div className="relative hidden md:flex">
        <AiOutlineHeart  />
        {likedItem > 0 && (
          <span className="absolute top-2 right-0 inline-flex items-center justify-center px-1  -mt-2 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {likedItem}
          </span>
        )}
      </div>
      <div className="relative">
        <BiShoppingBag />
        {itemsInCart > 0 && (
          <span className="absolute top-2 right-0 inline-flex items-center justify-center px-1  -mt-2 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {itemsInCart}
          </span>
        )}
      </div>
      <div className="md:hidden ">
        {isOpen ? "" : <AiOutlineMenu onClick={toggleMenu} />}

        {isOpen && (
          <div className="bg-white w-40 border rounded h-screen absolute -top-2 -right-5 z-50">
            <ul className="flex flex-col space-y-1 text-sm font-semibold">
              <AiOutlineClose onClick={toggleMenu} size={15} />
              <li>New & Featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
              <li>SNKRS</li>
              <li>
                <SiJordan size={20} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightHeader;
