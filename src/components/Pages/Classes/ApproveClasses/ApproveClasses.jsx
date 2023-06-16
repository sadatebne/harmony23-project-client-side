import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import ClassCart from "./ClassCart/ClassCart";
import Cover from "../../Common/Cover/Cover";
import { Helmet } from "react-helmet-async";


const ApproveClasses = () => {

    const image='https://as2.ftcdn.net/v2/jpg/03/11/45/19/1000_F_311451974_zJ2z9crtmbHsidKDVTDmtyTeTCh0zyWo.jpg'

    const status="approved";
    const [views, setViews]=useState([])
    
    useEffect(()=>{
        fetch(`https://harmony23-server-side-sadatebne.vercel.app/aprovedclasses/${status}`)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data)
            setViews(data)
        })
    },[])

    return (
        <div>
            <Helmet>
               <title>Harmony23|Classes</title>
            </Helmet> 
            <Cover photo={image}></Cover>
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