import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'

const Navbar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/">Donation</Link></li>
        <li><Link to="/">Events</Link></li>
        <li><Link to="/">Blogs</Link></li>

    </>
    return (
        <div className="navbar h-32 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="w-52">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold ">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-5 text-white">
                <Link>
                    <button className="btn btn-primary">Register</button>
                </Link>
                <Link to="/admin/dashboard">
                    <button className="btn btn-info">Admin</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;