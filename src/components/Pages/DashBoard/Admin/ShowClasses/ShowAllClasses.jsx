import Swal from "sweetalert2";
import useClass from "../../../../../hooks/useClass";

const ShowAllClasses = ({ item, index }) => {
    const[,refetch]=useClass()
    const { _id, name, image, instructorName, availableSeats, Students, price, status } = item
    const currentStatus = status
    const handleApproved=(id)=>{
        fetch(`http://localhost:3000/classes/approved/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
         if(data.modifiedCount){
            Swal.fire({
                title: 'success',
                text: 'Approved',
                icon: 'success',
                confirmButtonText: 'OK'
              })
              refetch()
         }
        })
    }
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}

            </td>
            <td>{instructorName}</td>
            <th>
                {availableSeats}
            </th>
            <th>
                {Students}
            </th>
            <th>
                ${price}
            </th>
            <th>
                <button disabled={currentStatus === 'approved' || currentStatus === 'deny' } className="btn btn-warning">
                    Pending
                </button>
            </th>
            <th>
                <button onClick={()=>{handleApproved(_id)}} disabled={currentStatus === 'approved'} className="btn btn-success">Approve</button>
            </th>
            <th>
                <button disabled={currentStatus === 'approved' || currentStatus === 'deny'} className="btn btn-error">Deny</button>
            </th>
            <th>
            <button className="btn btn-outline">Feedback</button>
            </th>
            
        </tr>
    );
};

export default ShowAllClasses;