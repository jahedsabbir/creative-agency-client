import React, { useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import { useState } from 'react';


const Feedbacks = () => {
    const [feedback, setFeedback] = useState([]);
    console.log(feedback);
    useEffect(() => {
        fetch('https://young-ravine-01690.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setFeedback(data));
    }, [])
  
    return (
        <section className=" my-5 py-5">
    
        <div className="container">
            <div>
                <h1 className="text-dark text-center mb-5 pb-5">Clients<span style={{color:'#8ABB6D'}}> Feedback</span> </h1>
               
            </div>
            <div className="row d-flex justify-content-center">
                {
                   feedback.map(feedback => <Feedback feedback={feedback} key={feedback.name}></Feedback>)
                }
             </div>
        </div>
    </section>
    );
};

export default Feedbacks;