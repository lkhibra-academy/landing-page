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
import OurTrainings from '../partials/OurTrainings';
import Accomplishment from '../partials/Accomplishment';
import JoinUs from '../partials/JoinUs';
import Hero from '../partials/Hero';

// Header test
export default function Test() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/* <HeroHome /> */}
        <Hero/>
        <Whoweare/>
        <Accomplishment/>
        <Testimonials/>
        <OurTrainings/>
        <More/>
        <JoinUs/>
        <Faq/>
      </main>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}