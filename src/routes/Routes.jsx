import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import EstateDetails from "../pages/EstateDetails/EstateDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
            // commented this router for showing 404 error
            // {
            //     path: '/about-us',
            //     element: <AboutUs></AboutUs>
            // },
            {
                path: '/services',
                element: <PrivateRoutes><Services></Services></PrivateRoutes>
            },
            {
                path: '/update-profile',
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: '/estate-details/:id',  // Add dynamic id parameter
                element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>
            }
        ]
    }
]);

export default router;