
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Shared/Html/Button";


const ProductOverviewCard = ({ product }) => {

    const navigate = useNavigate();

    const { images, name, _id, brand } = product;
    const [hover, setHover] = useState(false);

    return (
        <div
            className="h-[350px] mb-48 group relative]"
            style={{ backgroundColor: "rgb(234 234 234)" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                style={{
                    backgroundImage: ` url(${images[0]})`,
                    backgroundSize: "cover",
                    width: "80%",
                }}
                className={`h-[90%] relative mx-auto  duration-[.4s] ${hover ? "scale-105" : ""
                    }`}
            ></div>
            <div className=" h-[50px] bg-[rgb(234 234 234)] w-full  font-bold text-center flex justify-evenly">
                <p>Name : {name}</p>  <p>Brand: {brand}</p>
            </div>
            {/* show on hover */}
            <div
                className={`absolute top-0 left-0 w-full h-[400px]  z-5 flex flex-col justify-center items-center gap-4 font-clashRegular  ${hover ? "backdrop-blur-sm" : ""
                    }`}
            >
                <Button
                    onClick={() => navigate(`/product/${_id}`)}
                    className={` w-[80%] border border-black bg-transparent text-black ${hover
                        ? " h-[10%] text-base "
                        : "w-0 h-0 text-[0px] border-none duration-[.5s]"
                        } duration-[.5s] hover:bg-black hover:text-white`}
                >
                    Details
                </Button>
            </div>
        </div>
    );
};

export default ProductOverviewCard;