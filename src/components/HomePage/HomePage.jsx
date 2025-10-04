"use client"

import React from 'react';
import Hero from './Hero/Hero';
import VirtualSolution from './virtualSolution/virtualSolution';
import OfferSection from './OfferSection/OfferSection';

const HomePage = () => {
    return (
        <div className=''>
           <Hero/>
           <VirtualSolution/>
           <OfferSection/>
        </div>
    );
};

export default HomePage;