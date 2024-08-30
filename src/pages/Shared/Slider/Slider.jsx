import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';
import { useState } from "react";

const Banner = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {/* Swiper Slides */}
                <SwiperSlide>
                    <img
                        src={`https://i.ibb.co/kh9FrD0/daniel-barnes-RKd-Ll-Tyjm5g-unsplash.jpg`}
                        alt="Slide 1"
                        className="w-full max-h-screen"
                    />
                    <p
                        className={`absolute bottom-16 lg:bottom-1/3 left-28 lg:left-1/3 text-xl lg:text-5xl text-white font-bold bg-white bg-opacity-10 py-2 rounded ${activeIndex === 0 ? 'animate__animated animate__bounceInUp' : ''
                            }`}
                    >
                        Indulge in the Finest
                    </p>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img
                        src={`https://i.ibb.co/m8t0bFz/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg`}
                        alt="Slide 2"
                        className="w-full max-h-screen"
                    />
                    <p
                        className={`absolute bottom-10 lg:bottom-32 left-8 lg:left-2/4 text-xl lg:text-4xl text-white font-bold bg-black bg-opacity-5 px-4 py-2 rounded ${activeIndex === 1 ? 'animate__animated animate__bounceInLeft' : ''
                            }`}
                    >
                        Curated Luxury, Unmatched Style
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={`https://i.ibb.co/LPGSjyk/umbrella-chair-around-swimming-pool.jpg`}
                        alt="Slide 3"
                        className="w-full max-h-screen"
                    />
                    <p
                        className={`absolute bottom-5 lg:bottom-32 left-8 lg:left-52 text-xl lg:text-4xl text-white font-bold bg-white bg-opacity-30 px-4 py-2 rounded ${activeIndex === 2 ? 'animate__animated animate__backInDown' : ''
                            }`}
                    >
                        Experience the Epitome of Luxury
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
