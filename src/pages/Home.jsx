import React from 'react';
import Header from '../partials/components/Header';
import Fixed from '../partials/components/Fixed';
import Footer from '../partials/components/Footer';


// import FeaturesBlocks from '../partials/programming/FeaturesBlocks';
// import Learn from '../partials/programming/Learn';
// import Need from '../partials/components/Need';
// import More from '../partials/components/More';
// import JoinUsTraining from '../partials/programming/JoinUsTraining';
// import HeroTraining from '../partials/programming/HeroTraining';
// import Plans from '../partials/programming/Plans';
// import FaqTraining from '../partials/programming/FaqTraining';
// import Testimonials from '../partials/components/Testimonials';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        

      </main>

      {/*  Site footer */}
      <Footer />
      <Fixed language="Arabic"/>

    </div>
  );
}
