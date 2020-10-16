import React from 'react';
import { useForm } from "react-hook-form";
const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://young-ravine-01690.herokuapp.com/addOrder',{
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
            <div className="col-md-6 col-sm-12 col-12">
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/company name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="email address" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="course" placeholder="Course name" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} style={{height:'200px'}} name="detail" placeholder="Course details" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                        <input type="text" ref={register({ required: true })} name="price" placeholder="Course price" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        <div className="col-md-6">
                        <input type="file" ref={register({ required: true })} name="file"  className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        
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

export default Order;