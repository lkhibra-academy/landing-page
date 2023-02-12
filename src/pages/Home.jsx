import React from 'react';
import Header from '../partials/components/Header';
import Fixed from '../partials/components/Fixed';
import Footer from '../partials/components/Footer';
import Hero from '../partials/components/Hero';
import DoubleSecond from '../partials/components/DoubleSecond';
import Content from '../partials/components/Content';
import Need from '../partials/components/Need';
import More from '../partials/components/More';
import Offers from '../partials/components/Offers';
import ForWho from '../partials/components/ForWho';
import Faq from '../partials/components/Faq';
import Testimonials from '../partials/components/Testimonials';


export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
      <Hero language="Arabic"/>
      <DoubleSecond />
      <ForWho language="Arabic"/>
      <Content language="Arabic"/>
      <More language="Arabic"/>
      <Testimonials />
      <Need language="Arabic"/>
      <Offers language="Arabic" src="Organic"/>
      {/* <TestimonyCard /> */}
      <Faq />
      </main>

      {/*  Site footer */}
      <Footer />
      <Fixed language="Arabic" src="Organic"/>

    </div>
  );
}
