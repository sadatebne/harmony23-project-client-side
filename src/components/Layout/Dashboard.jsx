import { FaAddressBook, FaBook, FaHome, FaShoppingCart, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Dashboard = () => {
    const [cart] = useCart()
    const { user, logout } = useAuth()

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    const navigate=useNavigate()

    const handleLogout=()=>{
        logout();
        navigate('/')
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">

                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content space-y-5">

                    <div className="flex justify-around items-center">

                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">{user?.displayName}</h3>
                            <button onClick={handleLogout} className="btn btn-outline btn-accent">Logout</button>
                        </div>
                    </div>

                    <div className="divider"></div>
                    {isAdmin ?
                        <>
                            <li><NavLink to="/dashboard/home"><FaHome /><h2 className="card-title">Admin Home</h2></NavLink></li>

                            <li><NavLink to="/dashboard/allclasses"><FaUtensils /><h2 className="card-title">All Classes</h2></NavLink></li>

                            <li><NavLink to="/dashboard/allusers"><FaBook /><h2 className="card-title">Manage Users</h2></NavLink></li>
                        </>
                    
                   
                    : isInstructor ? <>

                        <li><NavLink to="/dashboard/home"><FaHome /><h2 className="card-title">Instructor Home</h2></NavLink></li>

                        <li><NavLink to="/dashboard/addclass"><FaAddressBook/><h2 className="card-title">Add a Class</h2></NavLink></li>

                        <li><NavLink to="/dashboard/myclass"><FaBook /><h2 className="card-title">My Classes</h2></NavLink></li>
                    </>
                    :
                    <>
                        <li><NavLink to="/dashboard/home"><FaHome /><h2 className="card-title">User Home</h2></NavLink></li>
                        <li><NavLink to="/dashboard/payment/:id"><FaWallet /><h2 className="card-title">Payment History</h2></NavLink></li>

                        <li><NavLink to="/dashboard/cartitems"><FaShoppingCart />
                            <h2 className="card-title">
                                mycart
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </h2>
                        </NavLink></li>
                    </>
                    }

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome /><h2 className="card-title">Home</h2></NavLink>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;