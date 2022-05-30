import { FaAngleDoubleRight } from 'react-icons/fa';
// import required modules
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";



export default function MainCarousel() {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="my-swiper-main-carousel"
            >
                <SwiperSlide className="my-swiper-main-carousel-slide-1">
                    <h1 className="slideshow-title">DRY CLEANING & <br className="d-sm-none d-lg-flex"/>LAUNDRY DELIVERY SERVICE</h1>
                    <div className="slideshow-text"><br />
                        We Collect, Clean and Deliver <br />
                        Directly to your Door
                    </div>
                    <a href="/contact-us/" target="_self" className="slideshow-button" rel="noreferrer">Contact us
                        <FaAngleDoubleRight />
                    </a>
                </SwiperSlide>
                <SwiperSlide className="my-swiper-main-carousel-slide-2">
                    <h1 className="slideshow-title">DRY CLEANING & <br className="d-sm-none d-lg-flex"/>LAUNDRY TO YOUR DOOR</h1>
                    <div className="slideshow-text">
                    We collect, clean & deliver your items in as little as 48 hours <br />
                    20% discount to all new customers use promo code 20off
                    </div>
                    <a href="/contact-us/" target="_self" className="slideshow-button" rel="noreferrer">Contact us
                        <FaAngleDoubleRight />
                    </a>
                </SwiperSlide>
                {/* 
                </SwiperSlide> 
                    <SwiperSlide className="my-swiper-main-carousel-slide">
                    <Image src="/Slide002.jpg" alt="Second slide" width={1920} height={1080} layout="responsive" objectFit="cover" />
                    DRY CLEANING & LAUNDRY TO YOUR DOOR
                    We collect, clean & deliver your items in as little as 48 hours
                    20% discount to all new customers use promo code 20off
                    Contact us
                </SwiperSlide> 
                <SwiperSlide className="my-swiper-main-carousel-slide-1">
                    <Image src="/Slide001.jpg" alt="First slide" width={1920} height={1080} layout="responsive" // objectFit="cover" className="my-swiper-main-carousel-slide-img" />
                    <div className="my-swiper-main-carousel-slide-content">
                        <div className="slideshow-content-wrapper"> 
                        <div><h1 className="slideshow-title">DRY CLEANING & LAUNDRY DELIVERY SERVICE</h1></div>
                        <div className="slideshow-text"><br />
                            We Collect, Clean and Deliver <br />
                            Directly to your Door
                        </div>
                        <div className="">
                            <a href="/contact-us/" target="_self" className="slideshow-button" rel="noreferrer">Contact us
                                <FaAngleDoubleRight />
                            </a>
                        </div>
                        </div> 
                    </div>
                    
                */}
            </Swiper >
        </>
    );
}
