import React, {useState} from 'react';


export default function Includes(props) { 
    let content = {
        Arabic: {
            title:": يتضمن  هذا تدريب ",
            item1:"12 حصة برمجة (Google Meet)",
            item2:"6 حصص Soft skills",
            item3:"10 مشاريع برمجية ",
            item4:"شهادة معتمدة",
            item5:"متابعة شخصية",
            item6:"أكتر من 20 ملفات دروس لتحميل",
        },
        French: {

        }
      };
      props.language === "Arabic"
        ? (content = content.Arabic)
        : (content = content.French);
    
return (
    <section className="relative max-w-3xl  
        text-right py-4 px-7 mx-auto sm:px-10 md:pt-0 md:hidden ">
        {/* Section header */}
            <h2 className="font-medium leading-tight text-lg md:text-xl text-gray-900">{content.title} </h2>
            <ul dir="rtl" className="text-gray-700 text-base md:text-lg list-inside pt-2 ">

                <li className=' flex items-start flex-row mb-1'>
                    <i className="fa-solid fa-users-rectangle  w-8 p-1 text-center"></i>
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
                    <i className="fa-solid fa-code w-8 p-1 text-center"></i>
                    <div className=''>
                    <p>{content.item3}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1'>
                    <i className="fa-solid fa-award w-8 p-1 text-center"></i>
                    <div className=''>
                    <p>{content.item4}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1'>
                    <i className="fa-brands fa-whatsapp w-8 p-1 text-center"></i>
                    <div className=''>
                    <p>{content.item5}</p>
                    </div>
                </li>
                <li className=' flex items-start flex-row mb-1'>
                    <i className="fa-regular fa-file-code w-8 p-1 text-center"></i>
                    <div className=''>
                    <p>{content.item6}</p>
                    </div>
                </li>
                {/* <div className='space-x-3'>
                <i className="fa-solid fa-user-graduate p-1 ml-1"></i>
                <i className="fa-solid fa-award"></i>
                <i className="fa-regular fa-file"></i>
                <i className="fa-solid fa-file"></i>
                <i className="fa-brands fa-google"></i>
                <i className="fa-solid fa-book"></i>
                <i className="fa-solid fa-video"></i>
                <i className="fa-solid fa-comments"></i>
                <i className="fa-regular fa-comments"></i>
                <i className="fa-solid fa-code"></i>
                <i className="fa-solid fa-wifi"></i>
                <i className="fa-solid fa-key"></i>
                <i className="fa-solid fa-briefcase"></i>
                <i className="fa-solid fa-handshake"></i>
                <i className="fa-regular fa-handshake"></i>
                <i className="fa-solid fa-users"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-solid fa-laptop"></i>
                <i className="fa-solid fa-desktop"></i>
                <i className="fa-regular fa-file-pdf"></i>
                <i className="fa-solid fa-file-pdf"></i>
                <i className="fa-regular fa-square-check"></i>
                <i className="fa-brands fa-python"></i>
                <i className="fa-solid fa-headset"></i>
                <i className="fa-solid fa-users-rectangle"></i>
                <i className="fa-regular fa-file-code"></i>
                </div> */}
                
                
               
                
            </ul>
    </section>
);
}

  