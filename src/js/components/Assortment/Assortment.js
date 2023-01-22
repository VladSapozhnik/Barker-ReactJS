import {useState} from "react";
// Import Swiper React components

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Keyboard, Mousewheel} from "swiper/core";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import AssortmentProducts from "./AssortmentProducts";
import AssortmentSelect from "./AssortmentSelect";

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

    return (
        <>
            <div className="assortment">
                <div className="container">
                    <h2 className="h2 assortment_title">Асортимент</h2>
                    <AssortmentSelect handlerClick={handlerClick} isActive={isActive} assortmentSelect={assortmentSelect} />

                    <AssortmentProducts assortmentName={assortmentName} />
                </div>
            </div>
        </>
    )
}

export default Assortment;