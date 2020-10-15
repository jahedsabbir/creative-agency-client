import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    
    return (
         
         <div className="col-md-4 p-5 border-1" style={{boxShadow:'5px 5px 10px solid gray'}}>         
            <p className="text-center"> <img  style={{height:'50px',width:'50px',textAlign:'center'}} src={service.img} alt=""/></p>
            <h5 className='text-center'>{service.name}</h5>
            <p className='text-center'>{service.description}</p>
         </div>
         
    
    );
};

export default Service;