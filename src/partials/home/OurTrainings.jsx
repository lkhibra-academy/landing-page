import React from 'react';
import TrainingCard from './TrainingCard';
import cardpic from '../../images/cardpic.png';

export default function OurTrainings() { 
      return ( 
        //           flex justify-center items-center flex-row gap-12 bg-black-dark
        <div className='relative max-w-6xl mx-auto px-5 sm:px-6 py-12'>
            <h1 className='h2 mb-8 text-center'>تدريباتنا</h1>
            <div className='grid gap-5'>
            <TrainingCard title={"تدريب الخبرة فالبرمجة"} 
            desc={"اختصر الوقت وتعلم جميع أساسيات البرمجة بالبايثون عن طريق خمس مشاريع تطبيقية، في تلاث أشهر فقط واحصل على شهادة معتمدة من أجل فتح فرص جديدة."} 
            li1={"Python"} li2={"Data Structure"} li3={"Algorithms"} pic={cardpic} link={"/Programming"}
            /> 
            <TrainingCard title={"تدريب  Front-End 101"} 
            desc={"اختصر الوقت وتعلم جميع أساسيات البرمجة بالبايثون عن طريق خمس مشاريع تطبيقية، في تلاث أشهر فقط واحصل على شهادة معتمدة من أجل فتح فرص جديدة."} 
            li1={"HTML"} li2={"CSS"} li3={"Javascript"} pic={cardpic} link={"/Frontend"}
            />    
        </div>

        
        </div>
  );
}

