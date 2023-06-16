import { FaTrashAlt, FaWallet } from "react-icons/fa";
import useCart from "../../../../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const CartItems = () => {
    const [cart,refetch] = useCart()

    

    const handleDelete=(id)=>{
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
                  fetch(`https://harmony23-server-side-sadatebne.vercel.app/carts/${id}`,{
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
                     // console.log(data)
                  })         
            }
            
          })
    }

    

    return (
        <div className="overflow-x-auto w-full ml-5">
            <table className="table">
                {/* head */}
                <thead className="bg-green-600 text-2xl text-white">
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="bg-green-300 text-xl">
                    {/* row 1 */}
                    {cart.map((item, index) => <tr key={item._id}>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>{item.instructorName}</td>
                        <td>${item.price}</td>
                        <td>
                            <button onClick={()=>{handleDelete(item._id)}}  className="btn btn-square btn-outline bg-red-500 text-white">
                                <FaTrashAlt />
                            </button>
                        </td>
                       
                      <Link to={`payment/${item._id}`}>
                      <td>
                        <button className="btn btn-outline btn-primary"><FaWallet></FaWallet>Pay</button>
                        </td>
                      </Link>
                    </tr>)}

                </tbody>
                
            </table>
    
        </div>
    );
};

export default CartItems;