import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Order from '../Order/Order';

const Dashboard = () => {
    return (
        <section>
        <div style={{backgroundColor: "#F4FDFB"}} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <Order></Order>
            </div>
        </div>
    </section>
    );
};

export default Dashboard;