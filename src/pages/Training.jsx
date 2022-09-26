import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';
import Learn from '../partials/Learn';
import Need from '../partials/Need';
import More from '../partials/More';
import Cta from '../partials/Cta';
import Faq from '../partials/Faq';
import HeroTraining from '../partials/HeroTraining';
import Plans from '../partials/Plans';


export default function Training() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroTraining />
        <Learn />
        <FeaturesBlocks />
        <Need />
        <More />
        

        <FeaturesHome />
      <Plans/>
        <Cta />

        <Faq />


        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}
