import React from 'react';

import Header from '../partials/components/Header';
import FeaturesHome from '../partials/frontend/Features';
import FeaturesBlocks from '../partials/frontend/FeaturesBlocks';
import Footer from '../partials/components/Footer';
import Learn from '../partials/frontend/Learn';
import Need from '../partials/components/Need';
import More from '../partials/components/More';
import JoinUsTraining from '../partials/frontend/JoinUsTraining';
import HeroTraining from '../partials/frontend/HeroTraining';
import Plans from '../partials/frontend/Plans';
import FaqTraining from '../partials/frontend/FaqTraining';
import Testimonials from '../partials/components/Testimonials';


export default function FrontendTraining() {
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
