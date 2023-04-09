import FirstComponent from '@/components/FirstComponent';
import HeroBanner from '@/components/HeroBanner';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className='mx-4xl max-w-7xl'>
<HeroBanner />
<FirstComponent />
</div>
  );
};

export default Home;
