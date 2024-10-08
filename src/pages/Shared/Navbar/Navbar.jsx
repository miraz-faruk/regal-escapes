import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/update-profile">Update Profile</NavLink></li>
    </>

    // Handle sign-out
    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("User signed out");
            })
            .catch(error => {
                console.error("Sign out error:", error);
            });
    };

    // Placeholder while loading
    if (loading) {
        return (
            <h2>Loading...</h2>
        );
    }

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl lg:text-3xl text-[#00308E] p-0">Regal <span className="text-[#d4af37]">Escapes</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex flex-row-reverse">
                            <button onClick={handleSignOut} className="btn bg-[#BD9E24] text-[#00308E] font-bold">Sign Out</button>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-1 lg:mr-2 tooltip tooltip-left flex justify-center" data-tip={user.displayName || "User"}>
                                <div className="w-10 rounded-full">
                                    <img
                                        alt={user.displayName || "User Avatar"}
                                        src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <Link to="/login">
                            <button className="btn bg-[#BD9E24] text-[#00308E] font-bold">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;