import React, { Component } from 'react';
import Header from '../partials/Header';
import TestComp from '../partials/TestComp';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';
import Learn from '../partials/Learn';
import Need from '../partials/Need';
import More from '../partials/More';
import Cta from '../partials/Cta';
import Faq from '../partials/Faq';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Whoweare from '../partials/Whoweare';

// Header test
export default function Test() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <Whoweare/>
        <TestComp/>
        {/*  Page sections */}
        {/* <HeroHome />
        <Learn />
        <FeaturesBlocks />
        <Need />
        <More />
        <FeaturesHome />
        <Cta />
        <Faq /> */}

{/* 
        <Testimonials /> 
         <Newsletter /> */}

      </main>

      {/*  Site footer */}
      {/* <Footer /> */}

    </div>
  );
}