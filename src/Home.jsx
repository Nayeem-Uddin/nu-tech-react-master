import React from 'react';
import web from '../src/images/web.png';
import Common from './Common';

const Home = () =>{
    return (
        <>
            <Common name="Grow your business with"
            imgsrc={web} btnname ="Get Started"
            visit="/service"/>
        </>
    )
}

export default Home;