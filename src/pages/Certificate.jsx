import React from 'react';
import Header from '../partials/components/Header';
import Footer from '../partials/components/Footer';
import Verify from '../partials/certif/Verify';

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