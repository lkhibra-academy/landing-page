import React from 'react';

import Header from '../partials/Header';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';
import Learn from '../partials/Learn';
import Need from '../partials/Need';
import More from '../partials/More';
import JoinUsTraining from '../partials/JoinUsTraining';
import HeroTraining from '../partials/HeroTraining';
import Plans from '../partials/Plans';
import FaqTraining from '../partials/FaqTraining';
import Testimonials from '../partials/Testimonials';
import Checkout from '../partials/LeadForm';


export default function Training() {
  fbq('track', 'PageView');
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroTraining/>
        <Learn />
        <FeaturesBlocks />
        <Need />
        <More />
        <FeaturesHome />
        <Plans/>
        <Testimonials/>
        <JoinUsTraining/>
        <FaqTraining />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}
