import React, {useState} from 'react';
import heropic from '../../images/heropic1.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export default function Learn(props) { 
    let content = {
        Arabic: {
            title:": شنو غادي تعلم ",
            itemI: {
                I:'الخوارزميات وهياكل البيانات ',
                II:'Algorithms & Data Structure'
            },
            itemII: {
                I:" أساسيات البرمجة بلغة البايثون  ",
                II:" "
            },
            itemIII: {
                I:"                أساسيات البرمجة كائنية التوجه                 ",
                II:" Object-Oriented Programming"
            },
            itemIV: {
                I:"                 أساسيات البرمجة الوضيفية                 ",
                II:" Functional Programming"
            },
            itemV: {
                I:" ",
                II:" "
            },
            itemVI: {
                I:" ",
                II:" "
            },

        },
        French: {

        }
      };
      props.language === "Arabic"
        ? (content = content.Arabic)
        : (content = content.French);
    
return (
    <section className="relative ">
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
      <div className="">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-right py-8 px-2 sm:px-4 md:py-10 ">
          <div className=" p-3 rounded-sm border shadow-sm">
            <h2 className="font-bold leading-tight text-2xl md:text-3xl">{content.title} </h2>
            <ul dir="rtl" className="text-gray-700 text-base md:text-xl list-inside pt-4">
                <li className=' flex items-start flex-row mb-1'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemI.I}<br className='md:hidden'></br>{content.itemI.II}</p>
                    </div>
                </li>
                <li className=' flex items-center flex-row mb-1'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemII.I}<br className='md:hidden'></br>{content.itemII.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemIII.I}<br className='md:hidden'></br>{content.itemIII.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemIV.I}<br className='md:hidden'></br>{content.itemIV.II}</p>
                    </div>
                </li>
            </ul>
          </div>
        </div>
    </div>
    </div>
    </section>
);
}

  