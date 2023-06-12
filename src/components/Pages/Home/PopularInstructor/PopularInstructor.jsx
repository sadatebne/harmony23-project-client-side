import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";

const PopularInstructor = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Fetch the JSON data
        axios
            .get('http://localhost:3000/popularcalsses')
            .then(response => {
                setClasses(response.data);
            })
            .catch(error => {
                console.error('Error fetching classes:', error);
            });
    }, []);

    const uniqueInstructors = [];

    const sixInstructors = classes.filter(classData => {
        if (!uniqueInstructors.includes(classData.instructorName)) {
            uniqueInstructors.push(classData.instructorName);
            return true;
        }
        return false;
    }).slice(0, 6);

    return (
        <div>
            <SectionTitle heading={"popular instructor"}></SectionTitle>
             
             <div className="grid md:grid-cols-3 gap-10 mt-10">
                {
                    sixInstructors.map(instructor=><div key={instructor._id} className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={instructor.instructorImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {instructor.instructorName}
                        <div className="badge badge-secondary">popular</div>
                      </h2>

                      <p className="text-2xl font-semibold"> Available In: <span className="text-xl font-semibold">{instructor.name} </span> </p>
                    </div>
                  </div>)
                }
             </div>
            
        </div>
    );
};

export default PopularInstructor;