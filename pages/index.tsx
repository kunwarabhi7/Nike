import FirstComponent from '@/components/FirstComponent';
import HeroBanner from '@/components/HeroBanner';
import Products from '@/components/Products';

import {fetchDataFromApi} from '../utils/api'
type Props = {products :  {} };

const Home = ({products}: Props) => {

console.log(products)

  return (
    <div className=''>
<HeroBanner />
<FirstComponent />

<Products />


</div>
  );
};

export default Home;


export async function getStaticProps(){
  const products =  await fetchDataFromApi("/api/products")
  

  return {
    props : {
 products
    }
  }
}