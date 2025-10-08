"use client"

import React from 'react';
import Hero from './Hero/Hero';
import VirtualSolution from './virtualSolution/virtualSolution';
import OfferSection from './OfferSection/OfferSection';
import OurProducts from './OurProducts/OurProducts';
import Faq from './Faq/Faq';

const HomePage = () => {
    return (
        <div className=''>
           <Hero/>
           <VirtualSolution/>
           <OfferSection/>
           <OurProducts/>
           <Faq/>
        </div>
    );
};

export default HomePage;