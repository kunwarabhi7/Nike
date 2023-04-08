import { useState } from "react";

type Props = {};

const NewDropdown = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center ">
      <div onMouseLeave={() => setOpen(false)} className="">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center  p-2"
        >
          <span className="">New & Featured</span>
        </button>
        <ul
          className={`absolute right-0 w-full bg-gray-100 h-64 py-2 mt-2 rounded-lg shadow-xl ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex text-sm font-semibold">
            <li className="flex flex-col  w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              <div>New & Featured</div>
              <p className="text-xs font-thin text-gray-500">New Arrivals</p>
              <p className="text-xs font-thin text-gray-500">Latest Shoes</p>
              <p className="text-xs font-thin text-gray-500">Latest Clothing</p>
              <p className="text-xs font-thin text-gray-500">SNKRS Launch Calender</p>
              <p className="text-xs font-thin text-gray-500">Get EM in SNKRS</p>
              <p className="text-xs font-thin text-gray-500">Customise with Nike By You</p>
              <p className="text-xs font-thin text-gray-500">Nike App Exclusive</p>
              <p className="text-xs font-thin text-gray-500">Bestsellers</p>
              <p className="text-xs font-thin text-gray-500">Member Exclusive</p>
            </li>
            <li className="flex flex-col w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              <div>Shop Icons</div>
              <p className="text-xs font-thin text-gray-500">Air Force 1</p>
              <p className="text-xs font-thin text-gray-500">Air Jordan 1</p>
              <p className="text-xs font-thin text-gray-500">Air Max</p>
              <p className="text-xs font-thin text-gray-500">Dunk</p>
              <p className="text-xs font-thin text-gray-500">Blazer</p>
              <p className="text-xs font-thin text-gray-500">Pegaus</p>
            </li>
            <li className="flex flex-col w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              <div>New For Men</div>
              <p className="text-xs font-thin text-gray-500">Shoes</p>
              <p className="text-xs font-thin text-gray-500">Clothing</p>
              <p className="text-xs font-thin text-gray-500">Accessories</p>
              <p className="text-xs font-thin text-gray-500">Shop All New</p>
            </li>
            <li className="flex flex-col w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              <div>New For Women</div>
              <p className="text-xs font-thin text-gray-500">Shoes</p>
              <p className="text-xs font-thin text-gray-500">Clothing</p>
              <p className="text-xs font-thin text-gray-500">Accessories</p>
              <p className="text-xs font-thin text-gray-500">Shop All New</p>
            </li>
            <li className="flex flex-col w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
              <div>New For Kids</div>
              <p className="text-xs font-thin text-gray-500">Shoes</p>
              <p className="text-xs font-thin text-gray-500">Clothing</p>
              <p className="text-xs font-thin text-gray-500">Accessories</p>
              <p className="text-xs font-thin text-gray-500">Shop All New</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NewDropdown;