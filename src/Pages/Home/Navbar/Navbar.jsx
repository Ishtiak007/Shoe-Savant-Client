import { FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import useAuth from "../../../Components/Hooks/useAuth";
import toast from "react-hot-toast";
import Button from "../../../Shared/Html/Button";
import useCarts from "../../../Components/Hooks/useCarts";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCarts();

    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'>Home</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Collection</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Checkout</Link></li>
        <li><Link className='font-semibold text-white' to='/dashboard/cart'>Dashboard</Link></li>
        <li><Link className='font-semibold text-white' to='/login'>Login</Link></li>

    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out successfully!');
            })
            .catch(() => {
                toast.error("Something wrong. Please Try again")
            })
    }
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars></FaBars>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><h1 className="font-bold text-xl">Shoe <span className="text-red-700">Savant</span></h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                <div>
                    <Link className='font-semibold text-white' to='/dashboard/cart'>
                        <button className="btn">
                            <BsCart2 className="text-2xl"></BsCart2>
                            <div className="badge badge-outline"><span className="text-green-600">+ {cart.length}</span></div>
                        </button>
                    </Link>
                </div>

                <div className="dropdown dropdown-left z-10">
                    <label tabIndex={0} className="m-5">
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
                                {
                                    user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                }
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-500 bg-opacity-70 rounded-box w-52">
                        <div className="text-center my-3">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {
                                        user ? <div><img className="mr-3 w-[40px] rounded-full" src={user.photoURL} alt="" /></div> : <FaUser className='mx-auto text-3xl'></FaUser>
                                    }
                                </div>
                            </div>
                            <div className='my-5 text-xs text-white'>User Name : <br />{user ? <>{user.displayName}</> : <span className='text-red-500 font-bold'>(You are not Log in)</span>}</div>
                            <div className='my-5 text-xs text-white'>User Email : <br />{user ? <>{user.email}</> : <span className='text-red-500 font-bold'>(You are not Log in)</span>}</div>

                            <li><Link className='font-semibold text-white mx-auto' ><Button onClick={handleLogOut} className='px-3 py-1 bg-blue-500 hover:bg-orange-600 w-full'>Log Out</Button></Link></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;