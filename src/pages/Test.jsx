import React, { Component } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import More from '../partials/More';
import Faq from '../partials/Faq';
import Testimonials from '../partials/Testimonials';
import Whoweare from '../partials/Whoweare';
import OurTrainings from '../partials/OurTrainings';
import Accomplishment from '../partials/Accomplishment';
import JoinUs from '../partials/JoinUs';
import Hero from '../partials/Hero';
import TestComp from '../partials/TestComp';

// Header test
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/* <HeroHome /> */}
        <Hero/>
        <TestComp/>
        <Whoweare/>
        <Faq/>
      </main>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}