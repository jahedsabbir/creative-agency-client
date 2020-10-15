import React from 'react';
import Header from '../Header/Header';
import Sponsor from '../Sponsor/Sponsor';
import Services from '../Services/Services';
import Works from '../Works/Works';
import Feedbacks from '../Feedbacks/Feedbacks';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sponsor></Sponsor>
            <Services></Services>
            <Works></Works>
            <Feedbacks></Feedbacks>
            <Contact></Contact>
        </div>
    );
};

export default Home;