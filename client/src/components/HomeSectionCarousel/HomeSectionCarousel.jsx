import AliceCarousel from 'react-alice-carousel';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from 'react';
import PropTypes from 'prop-types';

import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = ({ data, SectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },

    };

    const items = data.slice(0, 6).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    return (
        <div className=''>
            <h2 className='text-2xl font-extrabold text-gray-800'> {SectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel

                    items={items}
                    disableButtonsControls
                    // autoPlayInterval={1000}
                    // infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 &&
                    <Button variant="contained " className='z-50'
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: "8rem", right: "-4rem", transform: "translateX(-50%) rotate(90deg)"
                        }} aria-label='next'>
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
                    </Button>}
                {activeIndex !== 0 && <Button variant="contained " className='z-50' onClick={slidePrev}
                    sx={{
                        position: 'absolute',
                        top: "8rem", left: "-4rem", transform: "translateX(50%) rotate(90deg)"
                    }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
                </Button>}
            </div>
        </div>
    );
};

HomeSectionCarousel.propTypes = {
    data: PropTypes.object.isRequired,
    SectionName: PropTypes.object.isRequired, // Assuming product is an object, adjust the type accordingly
};
export default HomeSectionCarousel;
