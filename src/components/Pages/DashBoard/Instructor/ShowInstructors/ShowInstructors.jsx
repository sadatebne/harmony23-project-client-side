import { useState } from "react";
import Cover from "../../../Common/Cover/Cover";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import axios from "axios";
import { useEffect } from "react";
import { JackInTheBox } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const ShowInstructors = () => {

    const image = 'https://as1.ftcdn.net/v2/jpg/05/88/45/12/1000_F_588451259_ZCVfw9KSH6RvFXKTIADlV6WqnwVTIeLO.jpg'

    const [show, setShow] = useState([]);

    useEffect(() => {
        // Fetch the JSON data
        axios.get('https://harmony23-server-side-sadatebne.vercel.app/instructors')
            .then(response => {
                setShow(response.data);
            })
            .catch(error => {
                console.error('Error fetching classes:', error);
            });
    }, []);
    return (
        <div>
            <Helmet>
               <title>Harmony23|Instructor</title>
            </Helmet> 
            <Cover photo={image}></Cover>
            <SectionTitle heading={'all instructors'}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
                {
                    show.map(item =>
                        <JackInTheBox key={item._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={item.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.email}</p>

                                </div>
                            </div>
                        </JackInTheBox>
                    )
                }
            </div>
        </div>
    );
};

export default ShowInstructors;