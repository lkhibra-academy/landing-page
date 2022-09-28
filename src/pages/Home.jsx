import React, { Component } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import More from '../partials/More';
import FaqHome from '../partials/FaqHome';
import Testimonials from '../partials/Testimonials';
import Whoweare from '../partials/Whoweare';
import OurTrainings from '../partials/OurTrainings';
import Accomplishment from '../partials/Accomplishment';
import JoinUs from '../partials/JoinUs';
import HeroHome from '../partials/HeroHome';

// Header test
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/* <HeroHome /> */}
        <HeroHome/>
        <Whoweare/>
        <Accomplishment/>
        <Testimonials/>
        <OurTrainings/>
        <More/>
        <JoinUs/>
        <FaqHome/>
      </main>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}