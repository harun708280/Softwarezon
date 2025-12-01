"use client"

import React from 'react';
import Hero from './Hero/Hero';
import VirtualSolution from './virtualSolution/virtualSolution';
import OfferSection from './OfferSection/OfferSection';
import OurProducts from './OurProducts/OurProducts';
import Faq from './Faq/Faq';
import TestimonialSlick from './Testimonail/Testimonail';
import Blog from './Blog/Blog';
import HowWork from './HowWork/HowWork';

const HomePage = () => {
    return (
        <div className=''>
           <Hero/>
           <VirtualSolution/>
           <HowWork/>
           <OfferSection/>
           <OurProducts/>
           <Faq/>
           <TestimonialSlick/>
           {/* <Blog/> */}
        </div>
    );
};

export default HomePage;