import { Rating } from "@mui/material";
import Container from "../../Shared/Container/Container";
import DetailImgCarousal from "./DetailImgCarousal";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { _id,
        name,
        brand,
        gender,
        price,
        available,
        description,
        shippingPrice,
        sizes,
        images,
        discount,
        buyingCost,
        profitPercentage,
        sellPrice,
        addedDate } = productDetails;
    return (
        <div>
            <div className="min-h-screen font-poppins">
                <div className="h-[250px] bg-yellow-300 bg-detail flex justify-center items-center bg-fixed">
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
                        <p className="text-sm mt-10 text-gray-600">{description}</p>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default ProductDetails;