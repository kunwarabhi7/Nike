import ProductDetailsCrousel from "@/components/ProductDetailsCrousel";

type Props = {};

const ImageZoom = (props: Props) => {
  return (
    <div className="w-full md:py-20">
<div className="flex flex-col md:flex-row md:px-10 gap-[50px] lg:gap-[100px] items-center justify-evenly">

   <div className="w-full md:w-auto flex-[1.5]  max-w-[500px] lg:max-w-full">
    <ProductDetailsCrousel />
   </div>
   <div>right</div>
</div>
    </div>
  );
};

export default ImageZoom;
