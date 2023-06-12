import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Fetch the JSON data
        axios.get('http://localhost:3000/popularcalsses')
            .then(response => {
                setClasses(response.data);
            })
            .catch(error => {
                console.error('Error fetching classes:', error);
            });
    }, []);

    // Sort the classes based on maxStudents
    const sortedClasses = classes.sort((a, b) => b.maxStudents - a.maxStudents);

    // Slice the sorted list to get the top 6 classes
    const topSixClasses = sortedClasses.slice(0, 6);
    return (
        <div>
            <SectionTitle heading={'popular classes'}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10 mt-10"> 
                {topSixClasses.map(classData => (

                    <div key={classData._id} className="card w-96 bg-base-100 shadow-xl space-y-5">
                        <figure><img src={classData.image} alt="Shoes" /></figure>
                        <div className="card-body space-y-2">
                            <h2 className="card-title">
                                {classData.name}
                                <div className="badge badge-secondary">popular</div>
                            </h2>
                            <p className="text-2xl font-semibold"> Instructor: <span className="text-xl font-semibold">{classData.instructorName} </span> </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default PopularClasses;