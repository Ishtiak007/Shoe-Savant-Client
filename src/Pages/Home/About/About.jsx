import { Link } from "react-router-dom";
import Button from "../../../Shared/Html/Button";


const About = () => {
    return (
        <div className="min-h-[500px] h-[80vh] w-full bg-about bg-fixed flex  justify-center items-center">
            <div className="flex flex-col  items-center justify-center text-white w-[70%] gap-4">
                <h3 className="text-sm text-center md:text-medium font-clashSemibold">
                    Embark on Your Stylish Journey Here.
                </h3>
                <h1 className="text-2xl text-center md:text-3xl lg:text-5xl font-bold">
                    Experience the <br /> Excellence of Footwear.
                </h1>
                <p className="text-[10px] md:text-sm text-center w-full md:w-[80%] text-gray-200">
                    Begin a fashionable journey with our handpicked footwear selection. From enduring classics to pioneering styles, we embrace variety with each stride. Navigate a realm where tradition merges with creativity, where each pair narrates its distinctive tale. Enhance your look, enhance your walk—explore extraordinary footwear that mirrors your uniqueness.
                </p>
                <Link to='/register'><Button className={'p-3 text-white text-center my-5 font-bold'}>Resister Now</Button></Link>
            </div>
        </div>
    );
};

export default About;