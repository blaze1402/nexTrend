// import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1, 1, 1, 1, 1].map((item, index) => (
        <HomeSectionCard key={index} />
    ));

    return (
        <div className='border border-black'>
             <div className='relative p-5 border'>
                <AliceCarousel

                    items={items}
                    disableButtonsControls
                    autoPlayInterval={1000}
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />
                <Button variant="contained " className='z-50'
                    sx={{
                        position: 'absolute',
                        top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)"
                    }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform:"rotate(90deg)" }} />
                </Button>
                <Button variant="contained " className='z-50'
                    sx={{
                        position: 'absolute',
                        top: "8rem", left: "0rem", transform: "translateX(50%) rotate(90deg)"
                    }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform:"rotate(-90deg)" }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarosel;
