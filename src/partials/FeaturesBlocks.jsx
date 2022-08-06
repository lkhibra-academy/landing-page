import React from 'react';
import Feat from './Feat';

function FeaturesBlocks() {
  return (
    <section className="relative border-b-2 border-b-gray-200">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-10">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h2 className="h2">شكون ايستافد من التدريب</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Feat title="Etudiants - طلاب" subtitle="Goal : Start Your Career" 
            li1="- Portfolio of 5 Projects" 
            li2="- 100% Practical Method"
            li3="- No Prerequisites "
            li4="- 12 Weeks of learning"
            li5="- "
            />

            <Feat title="Diplômés en Informatique - خريجي المعلوميات" subtitle="Goal : Develop Your Skills"
            li1="- Portfolio of 5 Projects" 
            li2="- 100% Practical Method"
            li3="- No Prerequisites "
            li4="- 12 Weeks of learning"
            li5="- "
            />

            <Feat title="Diplômés Hors Informatique - الخريجين في غير المعلوميات" subtitle="Goal : Open New Opportunities" 
            li1="- Portfolio of 5 Projects" 
            li2="- 100% Practical Method"
            li3="- No Prerequisites "
            li4="- 12 Weeks of learning"
            li5="- "
            />

          </div>
   
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
