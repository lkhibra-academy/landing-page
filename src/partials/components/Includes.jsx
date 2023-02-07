import React, {useState} from 'react';


export default function Includes(props) { 
    let content = {
        Arabic: {
            title:": تشمل هذه الدورة ",
            item1:" شنو غادي تعلم ",
            item2:" شنو غادي تعلم ",
            item3:" شنو غادي تعلم ",
            item4:" شنو غادي تعلم ",
        },
        French: {

        }
      };
      props.language === "Arabic"
        ? (content = content.Arabic)
        : (content = content.French);
    
return (
    <section className="relative max-w-3xl  
        text-right py-4 px-7 mx-auto sm:px-10 md:pt-0">
        {/* Section header */}
            <h2 className="font-medium leading-tight text-lg md:text-xl text-gray-900">{content.title} </h2>
            <ul dir="rtl" className="text-gray-700 text-base md:text-lg list-inside pt-2 ">

                <li className=' flex items-start flex-row mb-1'>
                    <i className="fa-solid fa-display  w-8 p-1 text-center"></i>
                    <div className=''>
                    <p>{content.item1}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1'>
                    <i className="fa-solid fa-users w-8 p-1 text-center"></i>
                    <div className=''>
                    <p>{content.item2}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1'>
                    <i className="fa-solid fa-check w-8 p-1 text-center"></i>
                    <div className=''>
                    <p>{content.item3}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1'>
                    <i className="fa-regular fa-file w-8 p-1 text-center"></i>
                    <div className=''>
                    <p>{content.item4}</p>
                    </div>
                </li>
                {/*
                 <i className="fa-solid fa-user-graduate p-1 ml-1"></i>
                <i class="fa-solid fa-award"></i>
                <i class="fa-regular fa-file"></i>
                <i class="fa-solid fa-file"></i>
                <i class="fa-brands fa-google"></i>
                <i class="fa-solid fa-book"></i>
                <i class="fa-solid fa-video"></i>
                <i class="fa-solid fa-comments"></i>
                <i class="fa-regular fa-comments"></i>
                <i class="fa-solid fa-code"></i>
                <i class="fa-solid fa-wifi"></i>
                <i class="fa-solid fa-key"></i>
                <i class="fa-solid fa-briefcase"></i>
                <i class="fa-solid fa-handshake"></i>
                <i class="fa-regular fa-handshake"></i>
                <i class="fa-solid fa-users"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-solid fa-laptop"></i>
                <i class="fa-solid fa-desktop"></i>
                <i class="fa-regular fa-file-pdf"></i>
                <i class="fa-solid fa-file-pdf"></i>
                <i class="fa-regular fa-square-check"></i>
                <i class="fa-brands fa-python"></i>
                <i class="fa-solid fa-headset"></i>
                <i class="fa-solid fa-users-rectangle"></i>
                <i class="fa-regular fa-file-code"></i>
                
                
                
                */}
                
            </ul>
    </section>
);
}

  