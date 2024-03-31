import About from "../About/About";
import Banner from "../Banner/Banner";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import ProductOverview from "../ProductOverview/ProductOverview";
import ShoeBrands from "../ShoeBrands/ShoeBrands";
import Subscribtion from "../Subscribtion/Subscribtion";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShoeBrands></ShoeBrands>
            <BrandCarousel></BrandCarousel>
            <ProductOverview></ProductOverview>
            <About></About>
            <Testimonial></Testimonial>
            <Subscribtion></Subscribtion>
        </div>
    );
};

export default Home;