import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
  const items = mainCarouselData.map((item, index) => (
    <img
      key={index} // Use a unique identifier if available
      className='cursor-pointer'
      role='presentation'
      src={item.image}
      alt=''
    />
  ));

  return (
    <div>
      <AliceCarousel items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite />
    </div>
  );
};

export default MainCarousel;
