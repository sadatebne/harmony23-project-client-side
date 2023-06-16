import ShowAllClasses from "../ShowClasses/ShowAllClasses";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useClass from "../../../../../hooks/useClass";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
    
    const [classes]=useClass()

    return (
        <div className="w-full">
            <Helmet>
               <title>Harmony23|Admin|AllClass</title>
            </Helmet> 
            <SectionTitle heading={'All classes'}></SectionTitle>
            <div className="overflow-x-auto w-full ml-5">
                <table className="table">
                    {/* head */}
                    <thead className="text-2xl text-white bg-teal-600">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>ClassName</th>
                            <th>Instructor</th>
                            <th>AvailableSets</th>
                            <th>Enroll Student</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Status</th>
                            <th>Status</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl bg-indigo-200">
                        {
                            classes.map((item,index) => <ShowAllClasses key={item._id} item={item} index={index}></ShowAllClasses>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default AllClasses;