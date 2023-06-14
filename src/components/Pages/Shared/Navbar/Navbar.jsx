import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useCart from "../../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
import useAdmin from "../../../../hooks/useAdmin";
import useInstructor from "../../../../hooks/useInstructor";


const Navbar = () => {
    //getCart
    const [cart] = useCart()

    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/allclasses'> Classes</Link></li>
        {user?.email ? <li><Link to='/dashboard'>Dashboard</Link></li> : <></>}
    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-opacity-40 bg-black text-white">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Harmony23</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                {user?.email ? <div className="navbar-end">

                    {!(isAdmin || isInstructor) && (
                        <Link to='/dashboard/cartitems'>
                            <div className="flex relative">
                                <FaShoppingCart className="absolute right-5 -top-2" size={"2em"} color="white" />
                                <div className="badge badge-secondary mx-1 absolute right-7 -top-4">+{cart?.length || 0}</div>
                            </div>
                        </Link>
                    )}



                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <p className="text-xl p-2" onClick={handleLogout}>Logout</p>
                </div> :
                    <div className="navbar-end">
                        <p className="text-xl p-2"><Link to='/login'>Login</Link></p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;