import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import Button from "../../Shared/Html/Button";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";


const Register = () => {
    const { createUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        const minNumberofChars = 6;
        const maxNumberofChars = 16;
        const regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (password.length < minNumberofChars || password.length > maxNumberofChars) {
            toast.error("password should contain atleast 6 character ");
            return;
        }
        else if (!regularExpression.test(password)) {
            toast.error("password should contain atleast one number,one capital letter, one small letter and one special character");
            return;
        }

        else if (!terms) {
            toast.error("Please Accept our terms and conditions");
            return;
        }

        createUser(email, password)
            .then((result) => {
                toast.success('Congratulation!!! Your Registration process Successfully done!')
                console.log(result.user);
                e.target.reset();

            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <div>
            <CoverImage title={'Register from here'} description={'Welcome to Shoe-Savant World'}></CoverImage>
            <div className="h-[100vh] flex justify-center items-center">
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">

                            <form onSubmit={handleRegister} className="card-body">
                                <div>
                                    <p className="py-4 text-center text-xl font-semibold">Register Form</p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Name</span>
                                    </label>
                                    <input type="text" name="text" placeholder="Enter Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered" required />
                                    <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </span>
                                </div>
                                <div className='py-3'>
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className='ml-2' htmlFor="terms">Accept our terms and conditions</label>
                                </div>
                                <div className="form-control">
                                    <Button className="px-4 py-1 text-white font-poppins">Register</Button>
                                </div>
                                <div>
                                    <p className="my-3">Already Have an Account? So, <Link to='/login' className="text-blue-600 underline">Login</Link></p>
                                </div>
                                <SocialLogin></SocialLogin>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Register;