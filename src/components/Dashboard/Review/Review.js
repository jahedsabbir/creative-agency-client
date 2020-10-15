import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('placed success')
            }
        })
    };
    return (
        <section>
        <div style={{backgroundColor: "#F4FDFB"}} className="row">
            <div className="col-md-2 col-sm-6 col-12">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/company name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="title" placeholder="company name or designation" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} style={{height:'200px'}} name="description" placeholder="Description" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="form-group">
                    <button style={{width:'120px'}} className="bg-dark text-white p-1">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Review;