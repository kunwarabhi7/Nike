import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: {
    name: string;
    orignail_price: number;
    price: number;
    slug: string;
    description: string;
    subtitle: string;
    special: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

const Product = ({ data }: Props) => {
  console.log(data)
  return (
    <Link href={data.slug}>
      <div className="md:w-[396px] md:h-[590px]h-[280px] w-[280px]  md:mx-4 my-4 ">
        <Image
          src={data?.thumbnail?.data?.attributes?.url}
          alt={data.name}
          height={800}
          width={800}
          className="w-[225px] h-[225px] rounded-lg md:h-[396px] md:w-[396px] "
        />
        <div className=" md:mx-2 mx-4 md:space-y-2 space-y-1 bg-white text-xs md:text-sm">
          <p className="text-[#D09e54]  font-oswald">{data.special}</p>

          <p className="md:text-xl font-popins ">{data.name}</p>
          <p className="text-gray-500 ">{data.subtitle}</p>
          <p className="text-gray-500 ">
            {data.orignail_price} Colors Available
          </p>

          <p>Price{data.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
