import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../../../assets/images/balcony-with-view-city-planter-with-view-city-background.jpg';
import img2 from '../../../assets/images/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg';
import img3 from '../../../assets/images/umbrella-chair-around-swimming-pool.jpg';

const Banner = () => {
    return (
        <Swiper className='max-h-screen'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='w-full' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={img1} alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Banner;