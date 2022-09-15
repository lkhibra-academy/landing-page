import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

export default function Certificate() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <div className='text-center mt-40 text-5xl'>this is certificate page</div>
        {/* <HeroHome /> */}
      </main>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}