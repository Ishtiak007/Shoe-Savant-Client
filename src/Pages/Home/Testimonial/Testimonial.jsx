import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
    Navigation,
    Pagination,
    Scrollbar,
    EffectCube,
    Autoplay,
} from "swiper/modules";

const Testimonial = () => {
    const testimonialData = [
        {
            rating: 4.5,
            review:
                "Our journey with this shoe website has been fantastic! The shoes are of superior quality, and the customer service is truly exceptional. We wholeheartedly recommend it to anyone looking for top-notch footwear and exemplary support.",
            authorName: "John Doe",
            authorPosition: "Web Developer",
            authorCompany: "ABC Inc",
            brand: "NIKE",
            imageUrl:
                "https://i.ibb.co/x1dS58K/IMG-20210618-180837.jpg",
        },
        {
            rating: 4.5,
            review:
                "Our journey with this shoe website has been phenomenal! The shoes boast unmatched quality, and the customer service is superb. We wholeheartedly recommend it to anyone seeking premium footwear!",
            authorName: "John Doe",
            authorPosition: "Marketing Manager",
            authorCompany: "ABC Inc",
            brand: "NIKE",
            imageUrl:
                "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            rating: 3.8,
            review:
                "Our time with this shoe website has been remarkable! The shoes surpass expectations in terms of quality, and the customer service is second to none. We enthusiastically endorse it to anyone looking for superior footwear and exceptional support.",
            authorName: "Jane Smith",
            authorPosition: "Fashion Blogger",
            authorCompany: "Style Hub",
            brand: "Adidas",
            imageUrl:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            rating: 5.0,
            review:
                "We've been thoroughly impressed with this shoe website! Not only are the shoes of exceptional quality, but the customer service has also been outstanding. We highly recommend it to anyone seeking top-tier footwear and excellent service.",
            authorName: "Alex Rodriguez",
            authorPosition: "Fitness Enthusiast",
            authorCompany: "FitLife",
            brand: "Puma",
            imageUrl:
                "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="pb-0 bg-gray-50">
            <p className="pt-16 text-xl text-center font-bold md:text-2xl lg:text-3xl">
                Satisfaction in Words
            </p>
            <Swiper
                // pagination={true}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
                className="mySwiper"
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                speed={2000}
            >
                {testimonialData.map((testimonial) => (
                    <SwiperSlide key={testimonial.imageUrl}>
                        <TestimonialCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;