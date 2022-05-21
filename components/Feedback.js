import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, A11y } from 'swiper';
import { Tab, Container, Carousel, Row, Col, Card, Nav, Badge, Button } from 'react-bootstrap';
import Image from 'next/image'

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function Feedback() {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[EffectCoverflow, Autoplay, Pagination, A11y]}
                // d
                loop={true}
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={2}
                // slidesPerView={"auto"}
                pagination={{ dynamicBullets: true, clickable: true }}
                className="my-swiper-feedback"

                effect={"coverflow"}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
            // navigation={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="my-swiper-feedback-slide shadow-lg bg-body text-center bg-white" style={{ borderRadius: "10px" }}>
                    <div className="icon">
                        <Image src="/Green-log.png" alt="Green-log" className="" width="10px" height="10px" layout="responsive" objectFit="cover" />
                    </div>
                    <p>“Yours is a company that is true to all the promises it makes. Right from day one you really exceeded our expectations in providing a dry cleaning service tailored to the needs of our staff and our organisational constraints. Not only do you provide an exceptional level of service but your experience shows through in your efficiency and the finishing of dry cleaned items.”</p>
                    <div className="media">
                        <div className="media-body">
                            <h2>JOHN HAIDARI</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="my-swiper-feedback-slide shadow-lg bg-body text-center bg-white" style={{ borderRadius: "10px" }}>
                    <div className="icon">
                        <Image src="/Green-log.png" alt="Green-log" className="" width="10px" height="10px" layout="responsive" objectFit="cover" />
                    </div>
                    <p>“The London Dry Cleaning Company have made my life so much easier; having taken charge of our cleaning, laundry and ironing requirements allowing me so much more free time. Their friendly, efficient service and superb quality is second to none and continues to delight me, time and time again.  I love the personalised service and thoughtful attention to detail.”</p>
                    <div className="media">
                        <div className="media-body">
                            <h2>ANNA PETROU</h2>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="my-swiper-feedback-slide shadow-lg bg-body text-center bg-white" style={{ borderRadius: "10px" }}>
                    <div className="icon">
                        <Image src="/Green-log.png" alt="Green-log" className="" width="10px" height="10px" layout="responsive" objectFit="cover" />
                    </div>
                    <p> “Words can’t do justice to the praise that your company’s service deserves. Your staff are efficient, friendly and on the ball and have never let us down and the finished quality of the garments we send is just superb. Thank you so much for providing us with a fantastic dry cleaning service, time and time again!!”
                    </p>
                    <div className="media">
                        <div className="media-body">
                            <h2> ELEANOR D’SOUZA </h2>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="my-swiper-feedback-slide shadow-lg bg-body text-center bg-white" style={{ borderRadius: "10px" }}>
                    <div className="icon">
                        <Image src="/Green-log.png" alt="Green-log" className="" width="10px" height="10px" layout="responsive" objectFit="cover" />
                    </div>
                    <p> “Yours is a company that is true to all the promises it makes. Right from day one you really exceeded our expectations in providing a dry cleaning service tailored to the needs of our staff and our organisational constraints. Not only do you provide an exceptional level of service but your experience shows through in your efficiency and the finishing of dry cleaned items.” </p>
                    <div className="media">
                        <div className="media-body">
                            <h2> JOHN HAIDARI, </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
