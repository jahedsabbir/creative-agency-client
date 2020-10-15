import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
const Sponsor = () => {
    return (
        <section className="container  p-5">
            <div className="row text-center">
                <div className="col-md-2">
                    <img  style={{height:'45px'}} src={slack} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="ml-5" style={{height:'50px'}} src={google} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="ml-5" style={{height:'50px'}} src={uber} alt=""/>
                </div>
                <div className="col-md-2">
                    <img style={{height:'60px'}} src={netflix} alt=""/>
                </div>
                <div className="col-md-2">
                    <img style={{height:'50px'}} src={airbnb} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;