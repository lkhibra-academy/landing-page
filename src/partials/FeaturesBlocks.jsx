import React from 'react';
import Feat from './Feat';

function FeaturesBlocks() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">شكون ايستافد من التدريب</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Feat title="Etudiant" desc=""/>
            <Feat title="Etudiant" desc=""/>
            <Feat title="Etudiant" desc=""/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
