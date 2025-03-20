import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider/Slider';
import Category from './Category';
import ItemCard from '../../components/Item.card/Item.card';

import pc from '../../assets/images/PC/pc1.jpg';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function HomePage() {
    return (
        <div className="container mx-auto">
            <Slider />

            <h1 className="mb-6 mt-12 border-l-4 border-primary pl-3 text-xl font-semibold text-textColor1">
                DANH MỤC NỔI BẬT
            </h1>
            <Category className="" />

            <div className="mt-12 flex items-center justify-between">
                <h1 className="block border-l-4 border-primary pl-3 pt-[2px] text-xl font-semibold text-textColor1">
                    PC THEO NHU CẦU
                </h1>
                <Link to={'/list-product/pc'} className="block border px-2 py-1">
                    Xem tất cả
                </Link>
            </div>
            <Carousel responsive={responsive} className="mt-6 py-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <ItemCard
                        key={index}
                        item={{
                            image: pc,
                            bestSale: true,
                            name: 'Màn hình TUF Gaming VG249Q3A (24 inch/ Full HD/ 180Hz/ FreeSync/ 1ms GTG)',
                            oldPrice: '20.000.000đ',
                            newPrice: '18.000.000đ',
                            discount: '-10%',
                            countSold: '20',
                        }}
                    />
                ))}
            </Carousel>

            <div className="mt-12 flex items-center justify-between">
                <h1 className="border-l-4 border-primary pl-3 pt-[2px] text-xl font-semibold text-textColor1">
                    CPU - BỘ VI XỬ LÝ
                </h1>
                <Link to={'/list-product/cpu'} className="border px-2 py-1">
                    Xem tất cả
                </Link>
            </div>
            <Carousel responsive={responsive} className="mt-6 py-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <ItemCard
                        key={index}
                        item={{
                            image: pc,
                            bestSale: true,
                            name: 'Màn hình TUF Gaming VG249Q3A (24 inch/ Full HD/ 180Hz/ FreeSync/ 1ms GTG)',
                            oldPrice: '20.000.000đ',
                            newPrice: '18.000.000đ',
                            discount: '-10%',
                            countSold: '20',
                        }}
                    />
                ))}
            </Carousel>

            <div className="mt-12 flex items-center justify-between">
                <h1 className="border-l-4 border-primary pl-3 pt-[2px] text-xl font-semibold text-textColor1">
                    VGA - CARD MÀN HÌNH
                </h1>
                <Link to={'/list-product/vga'} className="border px-2 py-1">
                    Xem tất cả
                </Link>
            </div>
            <Carousel responsive={responsive} className="mt-6 py-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <ItemCard
                        key={index}
                        item={{
                            image: pc,
                            bestSale: true,
                            name: 'Màn hình TUF Gaming VG249Q3A (24 inch/ Full HD/ 180Hz/ FreeSync/ 1ms GTG)',
                            oldPrice: '20.000.000đ',
                            newPrice: '18.000.000đ',
                            discount: '-10%',
                            countSold: '20',
                        }}
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default HomePage;
