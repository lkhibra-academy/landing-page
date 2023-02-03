import React, { Component } from 'react';
import Header from '../partials/components/Header';
import Footer from '../partials/components/Footer';
import More from '../partials/components/More';
import FaqHome from '../partials/home/FaqHome';
import Testimonials from '../partials/components/Testimonials';
import Whoweare from '../partials/home/Whoweare';
import OurTrainings from '../partials/home/OurTrainings';
import Accomplishment from '../partials/home/Accomplishment';
import JoinUsHome from '../partials/home/JoinUsHome';
import HeroHome from '../partials/home/HeroHome';

// Header test
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/* <HeroHome /> */}
        <HeroHome/>j
        <Whoweare/>
        <Accomplishment/>
        <Testimonials/>
        <More/>
        <OurTrainings/>
        <JoinUsHome/>
        {/* <FaqHome/> */}
      </main>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}