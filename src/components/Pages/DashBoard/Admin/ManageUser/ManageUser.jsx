import { FaTrash, FaUser, FaUsers } from "react-icons/fa";
import useUser from "../../../../../hooks/useUser";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";


const ManageUser = () => {
    const [users, refetch] = useUser()

    const handleAdmin = (id) => {
        fetch(`http://localhost:3000/users/admin/${id}`, {
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
        fetch(`http://localhost:3000/users/instructor/${id}`, {
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
                          fetch(`http://localhost:3000/users/delete/${id}`,{
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
            <SectionTitle heading={'manage users'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
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
                                    <FaUser></FaUser>
                                </button>
                                }
                            </th>
                            <th>
                                {user.role == 'instructor' ? 'Instructor ' : <button onClick={() => { handleInstructor(user._id) }} className="btn btn-square btn-outline">
                                    <FaUsers></FaUsers>
                                </button>
                                }
                            </th>
                            <th>
                                <button onClick={() => { handleDelete(user._id) }} className="btn btn-square btn-outline">
                                    <FaTrash></FaTrash>
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