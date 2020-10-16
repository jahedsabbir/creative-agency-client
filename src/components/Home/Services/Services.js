import React, { useState, useEffect, useContext } from 'react';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Services = () => {
    const [service, setService] = useState([]);
    
    useEffect(() => {
        fetch('https://young-ravine-01690.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data));
    }, []);
    return (
        <section className=" my-5 py-5 container">
        <div className="container">
            <div>
                <h1 className="text-dark text-center mb-5">Provide Awesome <span style={{color:'#8ABB6D'}}>Services</span> </h1>
               
            </div>
            <Link to='/dashboard' style={{textDecoration:'none'}}>
            <div className="row">
                {
                    service.map(service => <Service service={service} key={service.name}></Service>)
                }
             </div>
             </Link>
        </div>
    </section>
    );
};

export default Services;