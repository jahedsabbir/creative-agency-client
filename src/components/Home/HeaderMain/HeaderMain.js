import React from 'react';
import img from '../../../images/logos/Frame.png'


const HeaderMain = () => {
    return (
        <main  style={{height:'800px', backgroundColor:'#FBD062', clipPath: 'polygon(0 0, 100% 0, 100% 87%, 0 93%)'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256',fontWeight:'bold'}}>Lets Grow Your<br/> Brand To The<br/> Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolore eveniet necessitatibus et iusto Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button style={{width:'120px'}} className="bg-dark text-white p-1">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img src={img} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;