import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


const Navbar = () => {
    //currentUser
    const { user, logout } = useAuth()
    console.log(user)

    const handleLogout = () => {
        logout()
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'> Classes</Link></li>
        { user?.email ? <li><Link to='/dashboard'>Dashboard</Link></li> : <></>}
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