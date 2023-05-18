import {
    createBrowserRouter,

} from "react-router-dom";

import App from "../App";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import CheckOut from "../pages/checkout/CheckOut";
import Booking from "../pages/bookings/Booking";
import PrivateRoutes from "./PrivateRoutes";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:7000/services/${params.id}`)

            },
            {
                path: 'bookings',
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>,
            },
        ]
    },
]);

export default router;