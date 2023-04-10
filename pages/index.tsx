import FirstComponent from '@/components/FirstComponent';
import HeroBanner from '@/components/HeroBanner';
import Products from '@/components/Products';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className=''>
<HeroBanner />
<FirstComponent />
<Products />
</div>
  );
};

export default Home;
