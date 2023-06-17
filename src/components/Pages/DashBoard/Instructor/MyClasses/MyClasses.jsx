import { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const MyClasses = () => {
    const { user } = useAuth()

    const [myClass, setMyClass] = useState([])
   
    useEffect(() => {
        axios.get(`https://harmony23-server-side.vercel.app/myclass/${user?.email}`)
            .then(response => {
                setMyClass(response.data);
            })
            .catch(error => {
                console.error('Error fetching classes:', error);
            });
    }, [user?.email])

    //console.log(myClass)

    return (
        <div className="w-full">
            <SectionTitle heading={'My Classes'}></SectionTitle>

            <div className="overflow-x-auto ml-5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead  className="text-2xl text-white bg-teal-600">
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Enroll Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl bg-emerald-200">
                        {
                            myClass.map(( item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    {item.Students}
                                </th>
                                <th>
                                    {item.status}
                                </th>
                                <th>
                                    {item.feedback}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClasses;