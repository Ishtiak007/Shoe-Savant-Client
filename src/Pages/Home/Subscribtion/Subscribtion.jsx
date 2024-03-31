import Container from "../../../Shared/Container/Container";
import Button from "../../../Shared/Html/Button";


const Subscribtion = () => {
    return (
        <div
            className="bg-[#151515] min-h-[400px] lg:min-h-[500px] h-[60vh]  text-white font-poppins flex items-center bg-subscribe"
        >
            <Container className="flex flex-col items-center justify-center gap-2 md:block">
                <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl w-[80%] md:w-[40%] font-bold text-center md:text-left">
                    Keep Informed with Special Deals.
                </h1>
                <p className="text-[12px] text-center md:text-left text-gray-400">
                    Sign up for our newsletter and stay ahead with our newest updates and exclusive offers.
                </p>
                <div className="flex items-center justify-center w-full gap-1 md:justify-start">
                    <input
                        type="text"
                        className="focus:outline-none  py-2 pl-3 w-[60%] sm:w-[80%] md:w-[40%] my-2  text-black text-sm rounded-l-md"
                        placeholder="Your Email Address "
                    />
                    <Button className="px-3 py-2 text-sm text-white bg-black rounded-r-md">
                        Join With Us
                    </Button>
                </div>
                <p className="text-[12px] text-center md:text-left text-gray-400">
                    By becoming a member, you consent to abide by our terms and conditions.
                </p>
            </Container>
        </div>
    );
};

export default Subscribtion;