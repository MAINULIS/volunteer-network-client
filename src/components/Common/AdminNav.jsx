import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'

const AdminNav = () => {
    return (
        <nav className="navbar bg-neutral text-neutral-content items-start grid w-40" style={{ height: "100vh" }}>
            <div className="">
                <ul className="menu menu-horizontal px-1 font-semibold gap-5">
                <Link className="w-36">
                    <img src={logo} alt="" />
                </Link>
                    <Link to='/'>Home</Link> <br />
                    <Link to="/admin/dashboard">DashBoard</Link>
                    <Link to="/admin/dashboard/upload">Upload Work</Link>
                </ul>

            </div>
        </nav>
    );
};

export default AdminNav;