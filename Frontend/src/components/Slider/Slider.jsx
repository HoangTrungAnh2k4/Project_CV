import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import slider1 from '../../assets/images/slider/slide1.webp';

function Slider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
    };

    return (
        <div className="w-full">
            <Carousel
                responsive={responsive}
                className="py-2"
                autoPlay={true}
                autoPlaySpeed={3000}
                customTransition="transform 1000ms ease-in-out"
            >
                {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="mx-2">
                        <img src={slider1} alt="slider1" className="h-full w-full object-cover" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;
