import { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [valid, setValid] = useState([])

    axiosSecure.get(`/payment/${user?.email}`)
        .then(res => {
            setValid(res.data)
        })

    return (
        <div className="w-full">
            <SectionTitle heading={"Payment Hitory"}></SectionTitle>
            <div className="overflow-x-auto ml-5">
                <table className="table">
                    {/* head */}
                    <thead className="text-2xl bg-purple-500 text-white">
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {valid.map((item, index) => <tr className="bg-purple-200 text-xl" 
                        key={item._id}>
                            <th>{index+1}</th>
                            <td>{item.courseName}</td>
                            <td>{item.price}</td>
                            <td>{item.email}</td>
                            <td>{item.TransactionId}</td>
                            <td className="text-green-600">{item.status}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;