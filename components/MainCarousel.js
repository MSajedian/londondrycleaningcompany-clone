import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function MainCarousel() {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false
                // }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="my-swiper-main-carousel"
            >
                <SwiperSlide className="my-swiper-slide-main-carousel">
                    <Image
                        src="/Slide001.jpg"
                        alt="First slide"
                        width={1920}
                        height={1080}
                        layout="responsive"
                        objectFit="cover"
                        className="my-swiper-slide-main-carousel-img"
                    />
                    <div className="my-swiper-slide-main-carousel-text">
                        <div className="bdt-slideshow-content-wrapper bdt-position-z-index bdt-position-center bdt-position-large bdt-text-center">
                            <div><h1 className="bdt-slideshow-title bdt-display-inline-block">DRY CLEANING &amp; LAUNDRY TO YOUR DOOR</h1></div>
                            <div className="bdt-slideshow-text"><br />
                                We collect, clean &amp; deliver your items in as little as 48 hours<br />
                                    20% discount to all new customers use promo code 20off
                            </div>
                            <div><a href="/contact-us/" target="_self" className="bdt-slideshow-button bdt-display-inline-block elementor-animation-grow" rel="noreferrer">Contact us
                                <span className="bdt-button-icon-align-right bdt-slideshow-button-icon-right">

                                    <i aria-hidden="true" className="fa-fw fas fa-angle-double-right"></i>
                                </span>
                            </a></div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="my-swiper-slide-main-carousel">
                    <Image
                        src="/Slide002.jpg"
                        alt="Second slide"
                        width={1920}
                        height={1080}
                        layout="responsive"
                        objectFit="cover"
                    />
                    DRY CLEANING & LAUNDRY TO YOUR DOOR
                    We collect, clean & deliver your items in as little as 48 hours
                    20% discount to all new customers use promo code 20off
                    Contact us
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}
