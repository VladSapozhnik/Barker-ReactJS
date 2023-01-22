import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAssortmentSelect, assortmentSelect} from "../../store/assortment";

const AssortmentSelect = ({handlerClick, isActive}) => {
    const dispatch = useDispatch();
    const assortment = useSelector(assortmentSelect);

    useEffect(() => {
        dispatch(fetchAssortmentSelect())
    }, [dispatch])

    return (
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
            {assortment.map(item =>
                <SwiperSlide key={item.id}>
                    <div
                        className={`assortment-select_item ${(isActive === item.id ? "active" : '')}`}
                        key={item.id}
                        onClick={() => handlerClick(item.categorySort, item.id)}>{item.category}</div>
                </SwiperSlide>)}
        </Swiper>
    )
}

export default AssortmentSelect;