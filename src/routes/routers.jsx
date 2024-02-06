import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import DashBoard from "../pages/AdminDashBoard/DashBoard";
import Home from "../components/Home";
import UploadWork from "../pages/AdminDashBoard/UploadWork";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/volunteers')
            }
        ]
    },
    {
        path:'/admin/dashboard',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path:'/admin/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/admin/dashboard/upload',
                element: <UploadWork></UploadWork>
            }
        ]
    }
])

export default router;