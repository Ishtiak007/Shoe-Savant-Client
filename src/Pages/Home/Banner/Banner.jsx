import { Link } from "react-router-dom";
import Container from "../../../Shared/Container/Container";
import Button from "../../../Shared/Html/Button";



const Banner = () => {
    return (
        <Container>
            {/* Banner Title */}
            <div className="pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[10%] w-full grid grid-cols-1 md:grid-cols-5  ">
                <h1 className="text-xl font-bold md:col-span-3 sm:text-2xl md:text-3xl lg:text-4xl">
                    Find Your Ideal Fit
                </h1>
                <div className="md:col-span-2 ">
                    <p className="font-poppins text-[12px] md:text-sm text-gray-400 mb-4 w-[70%]">
                        Delve into our carefully selected assortment of the newest footwear trends. Discover the ideal pair that matches your unique style and ensures your comfort.
                    </p>
                    <Link to='/register'>
                        <Button className="px-4 py-1 text-white font-poppins">
                            Find Your Perfect Pair
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Banner Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 h-[400px] mt-10 mb-10">
                <div className="banner bg-banner1 relative md:col-span-3 overflow-hidden hover:bg-[160%] duration-[.6s] ">
                    <h2 className="absolute left-[10%] bottom-[20%] text-white font-clashSemibold text-2xl">
                        Classic Sophistication, Unmatched Comfort
                    </h2>
                </div>
                <div className="grid gap-2 grid-row-2 md:col-span-2">
                    <div className="bg-banner3 relative hover:bg-[160%] duration-[.6s] ">
                        <h2 className="absolute left-[10%] bottom-[20%] text-white font-clashSemibold text-xl">
                            Relaxed Ease, Seamless Fashion.
                        </h2>
                    </div>
                    <div className="bg-banner2 relative hover:bg-[160%] duration-[.6s] ">
                        <h2 className="absolute left-[10%] bottom-[20%] text-white font-clashSemibold text-xl">
                            Push Past Boundaries with Your Run.
                        </h2>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;