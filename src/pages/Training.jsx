import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';
import Learn from '../partials/Learn';
import Need from '../partials/Need';
import More from '../partials/More';
import JoinUs from '../partials/JoinUs';
import Hero from '../partials/Hero';
import Plans from '../partials/Plans';
import FaqTraining from '../partials/FaqTraining';
import Testimonials from '../partials/Testimonials';

export default function Training() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Hero/>
        <Learn />
        <FeaturesBlocks />
        <Need />
        <More />
        <FeaturesHome />
        <Plans/>
        <Testimonials/>
        <JoinUs/>
        <FaqTraining />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}
