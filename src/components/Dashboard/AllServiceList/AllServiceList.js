import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllServiceList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://young-ravine-01690.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
    return (
       <section className="row">
           <div className="col-md-2">
           <Sidebar></Sidebar>
           </div>
           <div className="col-md-8 col-sm-12 col-12">
             <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left " scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary " scope="col">Email</th>
                <th className="text-secondary " scope="col">Service</th>
                <th className="text-secondary w-50" scope="col">Project Detail</th>
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.course}</td>
                        <td>{order.detail}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
       </section>
    );
};

export default AllServiceList;