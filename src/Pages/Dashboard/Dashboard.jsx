import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../../Components/Hooks/useCarts';
import { FaDolly } from "react-icons/fa";
import { RiFeedbackLine } from "react-icons/ri";

const Dashboard = () => {
    const [cart] = useCarts();
    return (
        <div>
            <div className="lg:flex md:flex">
                <div className="lg:w-64 md:w-48 min-h-screen bg-black bg-opacity-70">
                    <div className="menu space-y-3">
                        <> <h1 className="text-center font-bold text-2xl text-white my-4">User Home</h1>
                            <li>
                                <NavLink to='/dashboard/cart'><span className="text-white flex gap-2 items-center font-bold"><FaShoppingCart className="text-xl"></FaShoppingCart> My Cart ({cart.length})</span></NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/feedback'><span className="text-white flex gap-2 items-center font-bold"><RiFeedbackLine className='text-xl'></RiFeedbackLine> Add Your Feedback</span></NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory'><span className="text-white flex gap-2 items-center font-bold"><FaDolly className='text-xl'></FaDolly> Payment History</span></NavLink>
                            </li>
                            <li>
                                <NavLink to='/'><span className="text-white flex gap-2 items-center font-bold"><FaHome className='text-xl'></FaHome> Go to Home</span></NavLink>
                            </li>
                        </>
                    </div>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;