import AboutParallax from "../AboutParallax/AboutParallax";
import Banner from "../Banner/Banner";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import ShoeBrands from "../ShoeBrands/ShoeBrands";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShoeBrands></ShoeBrands>
            <BrandCarousel></BrandCarousel>
            <AboutParallax></AboutParallax>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;