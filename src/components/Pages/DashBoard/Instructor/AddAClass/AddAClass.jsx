import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";


const image_hosting_token=import.meta.env.VITE_image_api


const AddAClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()

    const [axiosSecure]=useAxiosSecure()

    const img_hosting_url=`https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {

        const formData= new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url,{
            method:'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imageResponse=>{
           const ImgURL= imageResponse.data.display_url

           const {name, instructorName,status,price,email,seats,Students}=data
           
           const newItem={name,instructorName,email,seats, price:parseFloat(price),instructorImage:user?.photoURL, image:ImgURL, status, availableSeats:seats, Students}
           console.log(newItem)

           axiosSecure.post('/addclass',newItem)
           .then(data=>{
            console.log(data)
            reset()
           })

        })

        
    }
    return (
        <div className="w-full">
            <SectionTitle heading={'Add a class'}></SectionTitle>

            <form className="w-2/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>

                <div className="flex gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input {...register("instructorName", { required: true, maxLength: 120 })} type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-bordered w-full " readOnly/>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input {...register("email", { required: true, maxLength: 120 })} type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered w-full " readOnly/>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available seats </span>
                        </label>
                        <input {...register("seats", { required: true, maxLength: 50 })} type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Student Seats</span>
                        </label>
                        <input {...register("Students", { required: true,maxLength: 5 })} defaultValue={0} type="text" placeholder="Type here" className="input input-bordered w-full " readOnly/>
                    </div>

                </div>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Course Price</span>
                    </label>
                    <input {...register("price", { required: true, maxLength: 120 })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Course Status</span>
                    </label>
                    <input {...register("status", { required: true, maxLength: 10 })} defaultValue='pending' type="text" placeholder="Type here" className="input input-bordered w-full " readOnly/>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Course Image</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                </div>

                <input className="btn btn-sm mt-4" type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddAClass;