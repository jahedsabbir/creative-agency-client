import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const ServiceList = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
    return (
        <section>
        <div style={{backgroundColor: "#F4FDFB"}} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
            {
                orders.map(order =>
                <div className="row shadow-lg  bg-white rounded float-left mr-5 mt-5 border border-1 p-5 w-25">
                    <div className="">
                    <h3>{order.course}</h3>
                    <p>{order.detail}</p>
                    </div>
                </div> )
            }
            </div>
        </div>
    </section>
    );
};

export default ServiceList;