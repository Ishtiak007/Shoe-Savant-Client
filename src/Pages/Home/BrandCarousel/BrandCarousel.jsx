import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../../../Shared/Container/Container";
import BrandCarouselCard from "./BrandCarouselCard";

const BrandCarousel = () => {
    const brands = [
        {
            "name": "Nike Done",
            "logo": "https://i.ibb.co/NybVq1D/NikeDone.jpg"
        },
        {
            "name": "Puma",
            "logo": "https://i.ibb.co/fq880Wj/Puma.jpg"
        },
        {
            "name": "Reebok",
            "logo": "https://i.ibb.co/JqtTbmH/Reebok.jpg"
        },
        {
            "name": "Converse",
            "logo": "https://i.ibb.co/9hxDRDP/Converse.jpg"
        },
        {
            "name": "Vans",
            "logo": "https://i.ibb.co/thXvjWd/Vans.jpg"
        },
        {
            "name": "Skechers",
            "logo": "https://i.ibb.co/fdzcb8Y/Skechers.jpg"
        },
        {
            "name": "Fila Done",
            "logo": "https://i.ibb.co/y0SkfJc/Fila.jpg"
        },
        {
            "name": "Timberland",
            "logo": "https://i.ibb.co/2yxCJks/Timberland.jpg"
        },
        {
            "name": "Adidas",
            "logo": "https://i.ibb.co/xGKcfv2/Adidas-Done.jpg"
        },
        {
            "name": "NikeDone",
            "logo": "https://i.ibb.co/NybVq1D/NikeDone.jpg"
        },

    ]


    return (
        <div>
            <h1 className="text-center font-bold lg:text-3xl text-lg my-10">Explore Brands</h1>
            <Container>

                <Swiper
                    // slidesPerView={"auto"}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper "
                    style={{
                        height: "400px",
                        width: "100%",
                    }}
                    breakpoints={{
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                        },
                    }}
                >
                    {/* <SwiperSlide className="h-[100px]">Slide 1</SwiperSlide> */}

                    {brands?.map((brand) => (
                        <SwiperSlide key={brand._id} className="h-[350px]">
                            <BrandCarouselCard brand={brand} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default BrandCarousel;