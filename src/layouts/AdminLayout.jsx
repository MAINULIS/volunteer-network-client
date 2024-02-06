import { Outlet } from "react-router-dom";
import AdminNav from "../components/Common/AdminNav";

const AdminLayout = () => {
    return (
        <div className="flex bg-base-content">
            <AdminNav></AdminNav>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;