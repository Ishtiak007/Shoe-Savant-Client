import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import Dashboard from "../Pages/Dashboard/Dashboard";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: 'cart',
                        element: <ShoppingCart></ShoppingCart>
                    },
                ]
            }
        ]
    },
]);