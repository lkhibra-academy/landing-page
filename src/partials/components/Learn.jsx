import React, {useState} from 'react';
import heropic from '../../images/heropic1.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export default function Learn(props) { 
    let content = {
        Arabic: {
            title:": شنو غادي تعلم ",
            itemII: {
                I:'الخوارزميات وهياكل البيانات ',
                II:'Algorithms & Data Structure'
            },
            itemI: {
                I:" أساسيات البرمجة بلغة البايثون  ",
                II:"Python Programming Language"
            },
            itemIII: {
                I:"                أساسيات البرمجة كائنية التوجه                 ",
                II:" Object-Oriented Programming"
            },
            itemIV: {
                I:"كيفية استخدام مكتبات البايثون",
                II:"Pandas, matplotlib, SciKitLearn"
            },
            itemV: {
                I:"أساسيات الذكاء الإصطناعي",
                II:"Basics of Machine Learning"
            },
            itemVI: {
                I:" تصاوب برامجك الخاصة",
                II:" "
            },
            itemVII: {
                I:" تنضم وقتك وتزيد انتاجيتك ",
                II:" "
            },
            itemVIII: {
                I:"  تطور مهارة حل المشاكل",
                II:" "
            },
            itemIX: {
                I:" تحسن التركيز ديالك و الإنضباط أثناء تعلم",
                II:" "
            },
            itemX: {
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
    <section className="relative bg-white">
    <div className="relative max-w-6xl mx-auto px-4 md:px-0 md:mx-0">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-right py-4 px-2 sm:px-4 md:py-6 ">
          <div className=" p-3 rounded-sm border shadow-sm lg:p-5 lg:pl-28">
            <h2 className="font-bold leading-tight text-2xl md:text-3xl">{content.title} </h2>
            <ul dir="rtl" className="text-gray-700 text-base md:text-xl list-inside pt-4">
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemI.I}<br className='md:hidden'></br>{content.itemI.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemII.I}<br className='md:hidden'></br>{content.itemII.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemIII.I}<br className='md:hidden'></br>{content.itemIII.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemIV.I}<br className='md:hidden'></br>{content.itemIV.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemV.I}<br className='md:hidden'></br>{content.itemV.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemVI.I}<br className='md:hidden'></br>{content.itemVI.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemVII.I}<br className='md:hidden'></br>{content.itemVII.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemVIII.I}<br className='md:hidden'></br>{content.itemVIII.II}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1.5'>
                    <FontAwesomeIcon icon={faCheck} className=" px-2 py-1" />
                    <div className=''>
                    <p>{content.itemIX.I}<br className='md:hidden'></br>{content.itemIX.II}</p>
                    </div>
                </li>
                
            </ul>
          </div>
        </div>
    </div>
    </section>
);
}

  