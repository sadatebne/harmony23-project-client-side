import { FaTrash, FaUserGraduate, FaUserShield } from "react-icons/fa";
import useUser from "../../../../../hooks/useUser";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ManageUser = () => {
    const [users, refetch] = useUser()

    const handleAdmin = (id) => {
        fetch(`https://harmony23-server-side.vercel.app/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'success',
                        text: 'User Updated as Admin',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    const handleInstructor = (id) => {
        fetch(`https://harmony23-server-side.vercel.app/users/instructor/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'success',
                        text: 'User Updated as Instructor',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    const handleDelete = (id) => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                          fetch(`https://harmony23-server-side.vercel.app/users/delete/${id}`,{
                            method:'DELETE'
                          })
                          .then(res=>res.json())
                          .then(data=>{
                            Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )
                              refetch();
                              console.log(data)
                          })
                                   
                    }
                    
                  })
             
    }

    return (
        <div className="w-full">
            <Helmet>
               <title>Harmony23|Admin|ManageUser</title>
            </Helmet>
            <SectionTitle heading={'manage users'}></SectionTitle>
            <div className="overflow-x-auto ml-5">
                <table className="table">
                    {/* head */}
                    <thead className="text-2xl text-white bg-teal-600">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl bg-teal-300">
                        {users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>


                                </div>
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>{user.email}</td>
                            <th>
                                {user.role == 'admin' ? 'Admin ' : <button onClick={() => { handleAdmin(user._id) }} className="btn btn-square btn-outline">
                                <FaUserShield color='green' fontSize="2em"></FaUserShield>
                                </button>
                                }
                            </th>
                            <th>
                                {user.role == 'instructor' ? 'Instructor ' : <button onClick={() => { handleInstructor(user._id) }} className="btn btn-square btn-outline">
                                <FaUserGraduate color='blue' fontSize="2em"></FaUserGraduate>
                                </button>
                                }
                            </th>
                            <th>
                                <button onClick={() => { handleDelete(user._id) }} className="btn btn-square btn-outline">
                                    <FaTrash color='red' fontSize="2em"></FaTrash>
                                </button>
                            </th>
                        </tr>)}
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUser;