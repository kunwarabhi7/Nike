import ProductDetailsCrousel from "@/components/ProductDetailsCrousel";
import RightProductDetail from "@/components/RightProductDetail";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import { fetchDataFromApi } from "@/utils/api";

type Props = {
  paths: {}
};

const ImageZoom = ({paths}: Props) => {
  console.log(paths)
  return (
    <div className="w-full md:py-24">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">

<div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">

   <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
    <ProductDetailsCrousel />
   </div>
   <div>
    <RightProductDetail />
   </div>
</div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
};

export default ImageZoom;



export async function getStaticPaths() {
  const category = await fetchDataFromApi('/api/categories?populate=*')
  const paths = category.data.map((c: { attributes: { slug: any; }; })=>({
    params: {
      slug: c.attributes.slug
    }
  }))
  return {
    paths,
    fallback:false
  }
}


export async function getStaticProps() {}
 