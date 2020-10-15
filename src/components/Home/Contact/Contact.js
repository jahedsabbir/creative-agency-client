import React from 'react';

const Contact = () => {
    return (
        <section style={{height:'100%', backgroundColor:'#FBD062'}} className="">
           <div className="container">
            <div className="row container p-5">
            <div className="col-md-6 mt-5">
                <h1>Let us handle your project, professionally</h1>
                <p>Lorem ipsum dolor sit,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, vitae!</p>
            </div>
            <div className="col-md-6 mt-5">
                <input style={{height:'50px'}} className="w-100 mb-2 border border-0 p-3 rounded" placeholder="Your email address" type="text"/>
                <input style={{height:'50px'}} className="w-100 mb-2 border border-0 p-3 rounded" placeholder="Your name/company name" type="text"/>
                <input style={{height:'200px'}} className="w-100 mb-2 border border-0 rounded" placeholder="Your message" type="text"/>
                <button style={{width:'120px'}} className="bg-dark text-white p-1">Send</button>
            </div>
            </div>
            </div>
            <p className="text-center p-5">&copy;Jahed sabbir 2020.All right reserved</p>
        </section>
    );
};

export default Contact;