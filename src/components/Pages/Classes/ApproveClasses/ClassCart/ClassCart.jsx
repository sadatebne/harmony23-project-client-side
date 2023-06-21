import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../../../hooks/useCart";
import useAdmin from "../../../../../hooks/useAdmin";
import useInstructor from "../../../../../hooks/useInstructor";
import { Flip } from "react-awesome-reveal";

const ClassCart = ({ item }) => {

  const { user } = useAuth()
  const [, refetch] = useCart()

  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()

  const { _id, image, name, instructorName, status, availableSeats, price, Students } = item

  const handleAddToCart = (id) => {
    const enrollCourse = { course_id: id, image, name, instructorName, price, email: user?.email }
    axios.post('https://harmony23-server-side.vercel.app/addcarts', enrollCourse)
      .then(response => {
        //console.log(response.data)
        if (user) {
          Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Successfully added item to cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
        refetch()
      })
  }

  return (
    <Flip>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto h-[600px]">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        {availableSeats === 0 ? <div className="card-body bg-red-500">
          <h2 className="card-title">{name}
            <div className="badge badge-secondary">{status}</div>
          </h2>

          <h2 className="card-title">Instructor: {instructorName}</h2>

          <p className="text-xl font-semibold"> Available Seats: <span className="text-xl font-semibold">{availableSeats} </span> </p>

          <p className="text-xl font-semibold"> Enroll Student: <span className="text-xl font-semibold">{Students} </span> </p>

          <p className="text-xl font-semibold"> Price: $<span className="text-xl font-semibold">{price} </span> </p>

          <div className="card-actions justify-end">
            <button onClick={() => { handleAddToCart(_id) }} className="btn btn-primary" disabled={isAdmin || isInstructor || availableSeats === 0}>Buy Now</button>
          </div>
        </div>
          :
          <div className="card-body">
            <h2 className="card-title">{name}
              <div className="badge badge-secondary">{status}</div>
            </h2>

            <h2 className="card-title">Instructor: {instructorName}</h2>

            <p className="text-xl font-semibold"> Available Seats: <span className="text-xl font-semibold">{availableSeats} </span> </p>

            <p className="text-xl font-semibold"> Enroll Student: <span className="text-xl font-semibold">{Students} </span> </p>

            <p className="text-xl font-semibold"> Price: $<span className="text-xl font-semibold">{price} </span> </p>

            <div className="card-actions justify-end">
              <button onClick={() => { handleAddToCart(_id) }} className="btn btn-primary" disabled={isAdmin || isInstructor || availableSeats === 0}>Buy Now</button>
            </div>
          </div>}

      </div>
    </Flip>
  );
};

export default ClassCart;