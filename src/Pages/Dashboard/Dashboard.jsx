import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../../Components/Hooks/useCarts';

const Dashboard = () => {
    const [cart] = useCarts();
    return (
        <div>
            <div className="lg:flex md:flex">
                <div className="lg:w-64 md:w-64 min-h-screen bg-black bg-opacity-70">
                    <div className="menu space-y-3">
                        <> <h1 className="text-center font-bold text-2xl mt-20">User Home</h1>
                            <li>
                                <NavLink to='/dashboard/cart'><span className="text-white flex gap-2 items-center font-bold"><FaShoppingCart className="text-xl"></FaShoppingCart> My Cart ({cart.length})</span></NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/review'><span className="text-white flex gap-2 items-center font-bold"> Add Review</span></NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory'><span className="text-white flex gap-2 items-center font-bold">Payment History</span></NavLink>
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