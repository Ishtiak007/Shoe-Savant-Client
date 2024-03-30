import CoverImage from "../../Shared/CoverImage/CoverImage";
import image1 from '../../assets/NikeDone.jpg'


const Login = () => {
    return (
        <div>
            <CoverImage img={image1} title={'Login Now'} description={'Welcome to Shoe-Savant World'}></CoverImage>
        </div>
    );
};

export default Login;