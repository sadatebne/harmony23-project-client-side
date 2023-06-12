import Banner from "../../Home/Banner/Banner";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";


const ApproveClasses = () => {

    const status="approved";
    const [views, setViews]=useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:3000/aprovedcalsses/${status}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setViews(data)
        })
    },[])


    return (
        <div>
            <Banner></Banner>
            <SectionTitle heading={"all classes"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10 mt-10">
                {
                    views.map(item => (
                        <div key={item._id} className="card w-96 bg-base-100 shadow-xl mx-auto">
                          <figure>
                            <img src={item.image} alt="Shoes" />
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title">{item.name}
                            <div className="badge badge-secondary">{item.status}</div>
                            </h2>
                            
                            <h2 className="card-title">Instructor: {item.instructorName}</h2>

                            <p className="text-xl font-semibold"> Available Seats: <span className="text-xl font-semibold">{item.availableSeats} </span> </p>

                            <p className="text-xl font-semibold"> Price: $<span className="text-xl font-semibold">{item.price} </span> </p>

                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Buy Now</button>
                            </div>
                          </div>
                        </div>
                      ))
                }
            </div>
        </div>
    );
};

export default ApproveClasses;