import React from 'react';
import TrainingCard from './TrainingCard';
import cardpic from '../images/cardpic.png';

export default function OurTrainings() { 
      return ( 
        //           flex justify-center items-center flex-row gap-12 bg-black-dark
        <div className='relative max-w-6xl mx-auto px-5 sm:px-6 py-12'>
            <h1 className='h2 mb-8 text-center'>تدريباتنا</h1>
            <div className='grid gap-5'>
            <TrainingCard title={"تدريب الخبرة فالبرمجة"} 
            desc={"Lorme ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci! Lorme ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, adipisci! <br /> Lorme ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, adipisci!"} 
            li1={"Python"} li2={"Data Structure"} li3={"Algorithms"} pic={cardpic}
            />
            
            </div>
        </div>
  );
}

