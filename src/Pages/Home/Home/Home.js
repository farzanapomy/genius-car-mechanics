import React from 'react';
import Banner from '../Banner/Banner';
import Mechanics from '../Mechanics/Mechanics';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
           <Mechanics></Mechanics>
        </div>
    );
};

export default Home;