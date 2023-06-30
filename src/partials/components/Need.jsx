import React, { useState } from "react";

export default function Need(props) { 
  let content = {
    Arabic: {
        title:"شنو خاصك باش تعلم ",
        item1:"رغبة في التعلم",
        item2:"حاسوب",
        item3:"أنترنيت",
    },
    French: {

    }
  };
  props.language === "Arabic"
    ? (content = content.Arabic)
    : (content = content.French);
    return (
    <section className="relative max-w-6xl  
    text-right py-4 px-7 mx-auto sm:px-10 md:pt-0">
      <details className=" group">
                  <summary dir="rtl" className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border-y border-y-gray-300 ">
                    <p className="text-xl font-semibold text-gray-800">
                    {content.title}
                    </p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>
                  <div className="py-3 px-4 leading-relaxed text-gray-700 
                  border-b 
                  border-b-gray-300 ">
                  <ul dir="rtl" className="text-gray-700 text-lg md:text-lg list-inside pt-2 ">
                    <li className=' flex items-center flex-row mb-1.5'>
                        <i className="fa-solid fa-heart-circle-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.item1}</p>
                        </div>
                    </li>
                    <li className=' flex items-center flex-row mb-1.5'>
                        <i className="fa-solid fa-laptop w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.item2}</p>
                        </div>
                    </li>
                    <li className=' flex items-center flex-row mb-1.5'>
                        <i className="fa-solid fa-wifi w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.item3}</p>
                        </div>
                    </li>
                  </ul>
                  </div>
                </details>
    </section>
  );
  
 }
  