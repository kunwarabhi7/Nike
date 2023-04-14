import FirstComponent from '@/components/FirstComponent';
import HeroBanner from '@/components/HeroBanner';
import Products from '@/components/Products';
import {fetchDataFromApi} from '../utils/api'

const Home = (products) => {
console.log(products.products)
  return (
    <div className=''>
<HeroBanner />
<FirstComponent />

{products?.products.data.map((product)=>(
  <div className='text-7xl'>{product.attributes.name}</div>
))}

<Products  />


</div>
  );
};

export default Home;


export const getStaticProps = async() =>{
  const products =  await fetchDataFromApi("/api/products?populate=*")
  
const props  ={
  products,
}
  return {props,
  }
}