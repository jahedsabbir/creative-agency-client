import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://young-ravine-01690.herokuapp.com/admin',{
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
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6">
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Your email" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
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

export default MakeAdmin;