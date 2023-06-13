import ShowAllClasses from "../ShowClasses/ShowAllClasses";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useClass from "../../../../../hooks/useClass";

const AllClasses = () => {
    
    const [classes]=useClass()

    return (
        <div className="w-full">
            <SectionTitle heading={'All classes'}></SectionTitle>
            <div className="overflow-x-auto w-full mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
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
                    <tbody>
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