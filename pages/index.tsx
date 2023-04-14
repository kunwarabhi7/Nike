import FirstComponent from "@/components/FirstComponent";
import HeroBanner from "@/components/HeroBanner";
import Product from "../components/Product";
import { fetchDataFromApi } from "../utils/api";
import { Key } from "react";

interface ProductData {
  id: string;
  attributes: {
    // define the shape of the attributes object here
  };
}

type Props = {
  products: {
    data: any;
    products: {
      data: ProductData[]; // update this to be an array of ProductData objects
    };
  };
};


const Home = (products : Props) => {
console.log(products.products)
  return (
    <div className="">
      <HeroBanner />
      <div className="grid grid-cols-2 md:grid-cols-3 my-8 mb-36">

{products?.products?.data?.map((da: {
    id: Key | null | undefined; attributes: {
      name: string; orignail_price: number; price: number; slug: string; description: string; thumbnail: {
        data: {
          attributes: { // define the shape of the attributes object here
            url: string;
          };
        };
      };
    };
  })=>(
  <Product key={da.id} data={da.attributes} />
  ))}
  </div>
      <FirstComponent />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const products = await fetchDataFromApi("/api/products?populate=*");

  const props = {
    products,
  };
  return { props };
};
