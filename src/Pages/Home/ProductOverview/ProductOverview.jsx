
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useProducts from "../../../Components/Hooks/useProducts";
import Container from "../../../Shared/Container/Container";
import ProductOverviewCard from "./ProductOverviewCard";
import Button from "../../../Shared/Html/Button";
import { Link } from "react-router-dom";

const ProductOverview = () => {
    const [products] = useProducts();
    return (
        <div>
            <Container className="my-28">
                <h1 className="my-5 font-bold text-black lg:text-3xl text-xl text-center">Choose your favorite pair</h1>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{
                        height: "400px",
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
                    }}
                >
                    {/* <SwiperSlide className="h-[100px]">Slide 1</SwiperSlide> */}

                    {products?.map((product) => (
                        <SwiperSlide key={product?._id} className="h-[100px]">
                            <ProductOverviewCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center items-center">
                    <Link to='/collection'><Button className={"p-3 text-white font-bold"}>Go to collection</Button></Link>
                </div>
            </Container>
        </div>
    );
};

export default ProductOverview;