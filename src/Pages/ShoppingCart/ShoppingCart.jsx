import { FaTrash } from "react-icons/fa";
import useCarts from "../../Components/Hooks/useCarts";
import Button from "../../Shared/Html/Button";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const ShoppingCart = () => {
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosPublic = useAxiosPublic();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your order has been cancelled.",
                                icon: "success"
                            });
                        }
                    })
                    .then(err => {
                        console.log(err);
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <div className="bg-white p-2 flex justify-evenly items-center gap-2">
                    <h2 className="text-3xl font-semibold my-3">Your Carts</h2>
                    <h2 className="text-3xl font-semibold my-3">Total Price : {totalPrice}$</h2>
                    <Button className={'text-white font-bold p-3'}>Pay Now</Button>
                </div>
                <div>
                    <div className="overflow-x-auto my-10 bg-white">
                        <table className="table table-zebra ">
                            <thead className="bg-[#42453d]">
                                <tr>
                                    <th className="text-base text-white text-center">Index</th>
                                    <th className="text-base text-white text-center">Product Name</th>
                                    <th className="text-base text-white text-center">Image</th>
                                    <th className="text-base text-white text-center">Brand</th>
                                    <th className="text-base text-white text-center">Price$</th>
                                    <th className="text-base text-white text-center">Cancle Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.map((cart, index) => <tr key={cart._id}>
                                    <th className="font-bold text-lg text-center">{index + 1}</th>
                                    <td className="font-bold text-lg text-center">{cart.name}</td>
                                    <td className="font-bold text-lg text-center">
                                        <div className="mask mask-squircle w-14 h-14 mx-auto">
                                            <img src={cart.images[0]} alt="" />
                                        </div>
                                    </td>
                                    <td className="font-bold text-lg text-center">{cart.brand}</td>
                                    <td className="font-bold text-lg text-center">{cart.price}$</td>
                                    <td className="font-bold text-lg text-center"><button onClick={() => handleDelete(cart._id)}><FaTrash className="text-red-500 text-2xl"></FaTrash></button></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;