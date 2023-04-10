import React from "react";
import Product from "./Product";

const shoes = [
  {
    id: 1, 
    Seller : 'Just IN',
    name: "Nike AIR Max SYSTM",
    category: "Mens Shoes",
    colors: 6,
    MRP: "8595",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51fd150a-29bc-4385-b0b3-dd29f6487d60/air-max-systm-shoes-hLmQ85.png",
  },
  {
    id: 2,
    name: "Nike AIR FORCE 1 07",
    Seller : '',
    category: "Mens Shoes",
    colors: 1,
    MRP: "8895",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c9839ad-9907-477e-8d9e-4347d155c726/air-force-1-07-shoe-pZBS0b.png",
  },
  {
    id: 3,
    Seller : 'Bestseller',
    name: "Nike Air Force 1",
    category: "Mens Shoes",
    colors: 2,
    MRP: "7495",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    id: 4,
    Seller : '',
    name: "Nike Air Force 1 07",
    category: "Mens Shoes",
    colors: 1,
    MRP: "8695",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2a344274-603c-4af4-b54d-a0f8945cd05e/air-force-1-07-shoe-B3pSxK.png",
  },
  {
    id: 5,
    Seller : '',
    name: " Air Jordan 1 Mid SE",
    category: "Mens Shoes",
    colors: 2,
    MRP: "12295",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b8a8a4b-7dcb-4495-a3aa-83386f143cc8/air-jordan-1-mid-se-shoes-CQ6f9G.png",
  },
  {
    id: 6,
    Seller : '',
    name: " Nike Invincible 3",
    category: "Mens Shoes",
    colors: 3,
    MRP: "16995",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/70dec0ae-c9c2-4556-b806-f291e19b7924/invincible-3-road-running-shoes-Wwmmlp.png",
  },
];

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1  max-w-7xl md:mx-8 sm:gap-2 md:gap-3 ">
     {shoes?.map(({id,MRP,colors,category,name,image,Seller})=>(
        <Product key={id} name={name} Seller={Seller} category={category} colors={colors}  MRP={MRP} image={image}  />
     ))}
    </div>
  );
};

export default Products;
