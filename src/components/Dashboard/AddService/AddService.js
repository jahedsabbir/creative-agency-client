import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addService',{
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
        <div className="row">
        <Sidebar></Sidebar>
            <div className="col-md-6 col-sm-12 col-12">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-md-6">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Service Title" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        <div className="col-md-6">
                        <input type="file" ref={register({ required: true })} name="file" placeholder="Upload Image"  className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        </div>         
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

export default AddService;