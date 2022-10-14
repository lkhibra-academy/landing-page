import React from 'react';
import Feat from './Feat';

function FeaturesBlocks() {
  return (
    <section className="relative shadow-lkhibra">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-10">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h2 className="leading-tight font-bold text-3xl md:text-4xl">شكون ايستافد من التدريب</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <Feat title="Graduates outside IT - الخريجين في غير المعلوميات" subtitle="Goal : Open New Opportunities" 
            li1="- No pre-requisites" 
            li2="- Certificate of Completion"
            li3="- Automate your jobs with Python"
            li4="- Add new Skills to your resume"
            li5="- Have the fundamentals to switch your career to IT"
            li6="- 100% Practical Method"
            />

            <Feat title="Students - طلاب" subtitle="Goal : Start Your Career" 
            li1="- Portfolio of 5 Projects" 
            li2="- Certificate of Completion"
            li3="- 12 Weeks of learning"
            li4="- 100% Practical Method"
            li5="- No pre-requisites"
            li6="- Have the fundamentals to dive into advanced topics such as: Data Science, AI.. etc"
            />

            <Feat title="Computer Science Graduates - خريجي المعلوميات" subtitle="Goal : Advance Your Skills"
            li1="- Portfolio of 5 Projects" 
            li2="- Add Python to your resume"
            li3="- Automate your Tasks"
            li4="- Have the fundamentals to dive into advanced technologies such as: Data Science, AI, Django.. etc"
            li5="- Certificate of Completion"
            />

          </div>
   
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
