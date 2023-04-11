import ProductDetailsCrousel from "@/components/ProductDetailsCrousel";
import RightProductDetail from "@/components/RightProductDetail";
type Props = {};

const ImageZoom = (props: Props) => {
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
    </div>
  );
};

export default ImageZoom;
