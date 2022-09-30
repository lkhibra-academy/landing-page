import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import More from '../partials/More';
import Faq from '../partials/Faq';
import Testimonials from '../partials/Testimonials';
import Whoweare from '../partials/Whoweare';
import OurTrainings from '../partials/OurTrainings';
import Accomplishment from '../partials/Accomplishment';
import HeroCertif from '../partials/HeroCertif';
import Verify from '../partials/Verify';
import FaqCertif from '../partials/FaqCertif';

export default function Certificate() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        {/* <HeroHome /> */}
        <Verify/>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>

    
  );
}