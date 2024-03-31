import { Rating } from "@mui/material";
import Container from "../../Shared/Container/Container";
import DetailImgCarousal from "./DetailImgCarousal";
import { useLoaderData } from "react-router-dom";
import Button from "../../Shared/Html/Button";

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const {
        name,
        brand,
        gender,
        price,
        description,
        images,
        discount,
        profitPercentage,
    } = productDetails;
    return (
        <div>
            <div className="min-h-screen font-poppins">
                <div className="h-[450px] bg-yellow-300 bg-detail flex justify-center items-center bg-fixed">
                    <h3 className="text-gray-400 font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
                        Unveiling [{name}]:
                        <br /> {description}
                    </h3>
                </div>

                <Container className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-8 md:gap-0">
                    <div className="md:col-span-3 text-center">
                        <DetailImgCarousal images={images} />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2 ">
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <p className="  font-clashRegular text-gray-600 text-sm">
                            {brand?.name}
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold">$ {price}</p>
                            <Rating
                                name="half-rating-read"
                                value={4}
                                precision={0.5}
                                readOnly
                            />
                        </div>
                        <div className="flex justify-between gap-3">
                            <p className="text-sm mt-10 text-gray-600 font-bold">Gender : {gender}</p>
                            <p className="text-sm mt-10 text-gray-600 font-bold">Discount : {discount}%</p>
                            <p className="text-sm mt-10 text-gray-600 font-bold">Profit Percentage : {profitPercentage}%</p>
                        </div>
                        <div className="flex flex-col gap-2 mt-10">
                            <Button className="py-2 text-white">
                                Add To Cart
                            </Button>
                            <Button
                                className="py-2 text-black bg-white border border-black"
                            >
                                Save To Wishlist
                            </Button>
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default ProductDetails;