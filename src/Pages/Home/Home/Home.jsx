import About from "../About/About";
import Banner from "../Banner/Banner";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import ShoeBrands from "../ShoeBrands/ShoeBrands";
import Subscribtion from "../Subscribtion/Subscribtion";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShoeBrands></ShoeBrands>
            <BrandCarousel></BrandCarousel>
            <About></About>
            <Testimonial></Testimonial>
            <Subscribtion></Subscribtion>
        </div>
    );
};

export default Home;