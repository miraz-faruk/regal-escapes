import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper styles

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation]} // Corrected to use Navigation
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
            >
                {/* Swiper Slides */}
                <SwiperSlide>
                    <img 
                        src={`https://i.ibb.co/kh9FrD0/daniel-barnes-RKd-Ll-Tyjm5g-unsplash.jpg`} 
                        alt="Slide 1"
                        className="w-full max-h-screen"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={`https://i.ibb.co/m8t0bFz/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg`}
                        alt="Slide 2"
                        className="w-full max-h-screen"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={`https://i.ibb.co/LPGSjyk/umbrella-chair-around-swimming-pool.jpg`} 
                        alt="Slide 3"
                        className="w-full max-h-screen"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
