import React, { Component } from 'react';

import TestComp from '../partials/TestComp';

// Header test
export default function Test() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <TestComp />

      {/*  Page content */}
      <main className="flex-grow">

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