import FirstComponent from '@/components/FirstComponent';
import HeroBanner from '@/components/HeroBanner';
import Products from '@/components/Products';
import { useEffect, useState } from 'react';
import {fetchDataFromApi} from '../utils/api'
type Props = {};

const Home = (props: Props) => {
const [data , setData] =   useState(null)


const fetchProduct =async () => {
  const {data} =  await fetchDataFromApi("/api/products")
  setData(data)
}
useEffect(()=>{
  fetchProduct()
},[])
console.log(data)


  return (
    <div className=''>
<HeroBanner />
<FirstComponent />
<Products />
</div>
  );
};

export default Home;
