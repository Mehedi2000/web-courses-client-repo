import { createBrowserRouter } from "react-router-dom";
import Checkout from "../../component/Checkout/Checkout";
import CourseDetails from "../../component/CourseDetails/CourseDetails";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Login from "../../component/Login/Login";
import Register from "../../component/Register/Register";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/category/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://web-courses-server-omega.vercel.app/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://web-courses-server-omega.vercel.app/checkout/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
        ]
    }
])