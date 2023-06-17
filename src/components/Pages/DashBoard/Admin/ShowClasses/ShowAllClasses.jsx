import Swal from "sweetalert2";
import useClass from "../../../../../hooks/useClass";
import Modal from "../../../../Modal/Modal";
import { useState } from "react";
//import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const ShowAllClasses = ({ item, index }) => {


    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen((prev) => !prev);

    const [, refetch] = useClass()
    const { _id, name, image, instructorName, availableSeats, Students, price, status, feedback } = item
    const currentStatus = status

    const [textFeedback, setTextFeedback] = useState("");

    const handleApproved = (id) => {
        fetch(`https://harmony23-server-side.vercel.app/classes/approved/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
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

    const handleDeny=(id)=>{

        fetch(`https://harmony23-server-side.vercel.app/classes/denied/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
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

    const handleFeedback = (id) => {
        
        // console.log(id)
        // console.log(feedback);  
        const newItem={feedback:textFeedback}

        fetch(`https://harmony23-server-side.vercel.app/classes/feedback/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
          })
          .then(response => {
            if (response.ok) {
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: 'Feedback Sent',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
                setOpen(false)
            } else {
              // Handle error response
              console.error('Error updating feedback');
            }
          })
          .catch(error => {
            // Handle network error
            console.error('Network error:', error);
          });
    }

    return (
        <tr>
            <Modal open={open}>
                <h3 className="font-bold text-lg">
                    {item.name}
                </h3>

                <p className="py-4 font-semibold">
                    Feedback
                </p>

                <input type="text" name="feedback" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs my-5" onChange={(e) => setTextFeedback(e.target.value)}/>

                <div className="modal-action">
                    {/* closes the modal */}
                    <button onClick={() => handleFeedback(item._id)} className="btn btn-primary">
                        Send Feedback
                    </button>
                </div>

                <button onClick={handleToggle} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </Modal>

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
                <button disabled={currentStatus === 'approved' || currentStatus === 'denied'} className="btn btn-warning">
                    Pending
                </button>
            </th>
            <th>
                <button onClick={() => { handleApproved(_id) }} disabled={currentStatus === 'approved'} className="btn btn-success">Approve</button>
            </th>
            <th>
                <button onClick={()=>{handleDeny(_id)}} disabled={currentStatus === 'approved' || currentStatus === 'denied'} className="btn btn-error">Deny</button>
            </th>
            <th>
                <button disabled={feedback} onClick={handleToggle} className="btn btn-outline">Feedback</button>
            </th>

        </tr>
    );
};

export default ShowAllClasses;