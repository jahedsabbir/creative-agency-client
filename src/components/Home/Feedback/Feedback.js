import React, { useState, useEffect } from 'react';

const Feedback = ({feedback}) => {
    
    return (
    
    <div className="col-md-4 container pl-5 mb-5">   
                  
    <div className="row">
         <h5> <img  style={{height:'40px',width:'40px'}} src={feedback.img} alt=""/></h5>
         <p className="col-md-6"><small><h6>{feedback.name}</h6></small> <span>{feedback.title}</span></p>
    </div>
    <div>
        <p>{feedback.description}</p>
    </div>      
     </div>
      
    );
};

export default Feedback;