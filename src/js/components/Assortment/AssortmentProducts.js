import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import AssortmentProduct from "../../containers/AssortmentProduct";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {assortmentArray, fetchAssortment} from "../../store/assortment";

const AssortmentProducts = ({assortmentName}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAssortment())
    }, [dispatch])

    const assortment = useSelector(assortmentArray)
    const sortCategory = () => {
        return assortment.filter(item => item.categorySort.includes(assortmentName));
    }

    return (
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
    )
}

export default AssortmentProducts;