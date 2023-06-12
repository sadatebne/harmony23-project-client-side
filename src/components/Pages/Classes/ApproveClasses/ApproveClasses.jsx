import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import ClassCart from "./ClassCart/ClassCart";
import Cover from "../../Common/Cover/Cover";


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
            <Cover></Cover>
            <SectionTitle heading={"all classes"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10 mt-10">
                {
                    views.map(item => <ClassCart key={item._id} item={item}></ClassCart>)
                }
            </div>
        </div>
    );
};

export default ApproveClasses;