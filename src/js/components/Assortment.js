import {useState} from "react";
// Import Swiper React components

import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Keyboard, Mousewheel} from "swiper/core";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import AssortmentProduct from "../containers/AssortmentProduct";
import assortmentArray from "../../JSON/assortmentProduct.json";

SwiperCore.use([Keyboard, Mousewheel]);
const Assortment = () => {
    const [isActive, setIsActive] = useState(1);
    const [assortmentName, setAssortmentName] = useState('all');

    const assortmentSelect = [
        {
            id: 1,
            category: 'Весь асортимент',
            categorySort: 'all'
        },
        {
            id: 2,
            category: 'Випічка',
            categorySort: 'baking'
        },
        {
            id: 3,
            category: 'Пельмені',
            categorySort: 'dumplings'
        },
        {
            id: 4,
            category: 'Вареники',
            categorySort: 'boiledDough'
        },
        {
            id: 5,
            category: 'Тісто',
            categorySort: 'dough'
        }
    ]

    const handlerClick = (category, id) => {
        setAssortmentName(category);
        setIsActive(id);
    }


    const sortCategory = () => {
        return assortmentArray.filter(item => item.categorySort.includes(assortmentName));
    }

    return (
        <>
            <div className="assortment">
                <div className="container">
                    <h2 className="h2 assortment_title">Асортимент</h2>
                    <Swiper
                        className="assortment-select _f _j-center"
                        spaceBetween={30}
                        slidesPerView={5}
                        keyboard={true}
                        mousewheel={true}
                        breakpoints={{
                            380: {
                                slidesPerView: 1.5,
                            },
                            540: {
                                slidesPerView: 2.5,
                            },
                            798: {
                                slidesPerView: 3,
                            },
                            1024: {
                                // spaceBetween: 10,
                                slidesPerView: 3,
                            },
                            1280: {
                                spaceBetween: 10,
                                slidesPerView: 4
                            },
                            1480: {
                                spaceBetween: 30,
                                slidesPerView: 5
                            },
                        }}
                    >
                        {assortmentSelect.map(item =>
                            <SwiperSlide key={item.id}>
                                <div
                                    className={`assortment-select_item ${(isActive === item.id ? "active" : '')}`}
                                    key={item.id}
                                    onClick={() => handlerClick(item.categorySort, item.id)}>{item.category}</div>
                            </SwiperSlide>)}
                    </Swiper>
                    <Swiper
                        className="_f _j-center assortment-products"
                        modules={[Pagination]}
                        pagination={{clickable: true}}
                        spaceBetween={30}
                        slidesPerView={6}
                        keyboard={true}
                        mousewheel={true}
                        breakpoints={{
                            380: {
                                slidesPerView: 1,
                            },
                            540: {
                                slidesPerView: 2,
                            },
                            798: {
                                slidesPerView: 3,
                            },
                            1024: {
                                // spaceBetween: 10,
                                slidesPerView: 3,
                            },
                            1280: {
                                spaceBetween: 10,
                                slidesPerView: 4
                            },
                            1480: {
                                spaceBetween: 20,
                                slidesPerView: 5
                            },
                            1600: {
                                spaceBetween: 20,
                                slidesPerView: 5
                            },
                            1920: {
                                spaceBetween: 30,
                                slidesPerView: 6
                            },
                        }}
                    >
                        {sortCategory().map(item =>
                            <SwiperSlide key={item.id}>
                                <AssortmentProduct title={item.title}
                                                   price={item.price}
                                                   src={item.src}
                                                   btn="Замовити"/>
                            </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Assortment;