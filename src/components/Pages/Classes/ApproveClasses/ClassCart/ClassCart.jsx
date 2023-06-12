import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../../../hooks/useCart";

const ClassCart = ({item}) => {

    const {user}=useAuth()
    const[,refetch]=useCart()
   
    const {_id, image, name, instructorName, status, availableSeats, price}=item

    const handleAddToCart=(id)=>{
        const enrollCourse={course_id :id, image, name, instructorName, price, email:user?.email}
        axios.post('http://localhost:3000/addcarts', enrollCourse)
        .then(response=>{
            console.log(response.data)
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Successfully added item to cart',
                showConfirmButton: false,
                timer: 1500
              })
              refetch()
        })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                          <figure>
                            <img src={image} alt="Shoes" />
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title">{name}
                            <div className="badge badge-secondary">{status}</div>
                            </h2>
                            
                            <h2 className="card-title">Instructor: {instructorName}</h2>

                            <p className="text-xl font-semibold"> Available Seats: <span className="text-xl font-semibold">{availableSeats} </span> </p>

                            <p className="text-xl font-semibold"> Price: $<span className="text-xl font-semibold">{price} </span> </p>

                            <div className="card-actions justify-end">
                              <button onClick={()=>{handleAddToCart(_id)}} className="btn btn-primary">Buy Now</button>
                            </div>
                          </div>
                        </div>
    );
};

export default ClassCart;