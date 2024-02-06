import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'

const AdminNav = () => {
    return (
        <nav className="navbar bg-neutral text-neutral-content items-start grid w-40" style={{ height: "100vh" }}>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold gap-5">
                    <Link className="w-36">
                        <img src={logo} alt="" />
                    </Link>
                    <Link to='/'>Home</Link> <br />
                    <Link to="/admin/dashboard">DashBoard</Link>
                    <Link to="/admin/dashboard/upload">Upload Work</Link>
                </ul>

            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <ul className="menu menu-horizontal px-1 font-semibold gap-5">
                        <Link className="w-36">
                            <img src={logo} alt="" />
                        </Link>
                        <Link to='/'>Home</Link> <br />
                        <Link to="/admin/dashboard">DashBoard</Link>
                        <Link to="/admin/dashboard/upload">Upload Work</Link>
                    </ul>

                </ul>
            </div>
        </nav>
    );
};

export default AdminNav;