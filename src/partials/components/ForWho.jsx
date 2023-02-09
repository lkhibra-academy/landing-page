import React, { useState } from 'react';

export default function ForWho(props) {
    let content = {
        Arabic: {
            title:"شكون ايستافد من التدريب",
            ProfileI:{
                title:"خريجي المعلوميات",
                goal:"الهدف : تطوير مهاراتك",
                item2:"إضافة بايثون إلى سيرتك ذاتية",
                item3:"الحصول على شهادة معتمدة",
                item4:"العمل على أكثر من 10 مشاريع برمجية ",
                item5:" تعلم الأساسيات من أجل دخول مجالات متقدمة :  ذكاء الإصطناعي و تطوير الويب",
                item6:" خطوتك أولى نحو العمل كمطور بايثون ",
            },
            ProfileII:{
                title:"خريجين في غير المعلوميات",                
                goal:"الهدف : فتح فرص جديدة",
                item1:"التدريب لايحتاج أي تجربة سابقة في البرمجة ",
                item2:"إضافة مهارات البرمجة لسيرتك ذاتية",
                item3:"الحصول على شهادة معتمدة",
                item4:" خطوتك أولى نحو العمل كمطور بايثون ",
                item5:"تطوير مهارات ناعمة Soft Skills", 
                item6:" تعلم جميع الأساسيات لبدأ رحلتك غي مجال المعلوميات والبرمجة",
            },
            ProfileIII:{
                title:"طلاب",
                goal:"الهدف : ابدأ حياتك المهنية",
                item1:"التدريب لايحتاج أي تجربة سابقة في البرمجة ",
                item2:"التدريب لايحتاج أي تجربة سابقة في البرمجة ",
                item3:"إضافة مهارات البرمجة لسيرتك ذاتية",
                item4:"الحصول على شهادة معتمدة",
                item5:"العمل على أكثر من 10 مشاريع برمجية ",
                item6:"تطوير مهارات ناعمة Soft Skills",
                item7:" خطوتك أولى نحو العمل كمطور بايثون ",
                item8:" تعلم الأساسيات من أجل دخول مجالات متقدمة :  ذكاء الإصطناعي و تطوير الويب",
            },
        },
        French: {

        }
      };
      props.language === "Arabic"
        ? (content = content.Arabic)
        : (content = content.French);
  return (
    <section className="relative 
    px-6 sm:px-12 md:py-12 my-4">
    
    <div className="relative md:gap-6
    max-w-3xl md:max-w-none md:w-full 
    mx-auto md:col-span-7 lg:col-span-6 md:mt-6 ">
        
              {/* title */}
                <p className="px-2 pb-4 font-bold leading-tight text-2xl md:text-3xl text-right">
                    {content.title}
                </p>

              {/* Tabs buttons */}
              <div className="">

                <details dir='rtl' className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border-y border-y-gray-300 mb-2">
                    <p className="text-lg font-medium text-gray-800">
                    {content.ProfileI.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-1 px-4 leading-relaxed text-gray-700">
                    <ul>                 
                    <li className='font-bold mb-2 mr-2'>{content.ProfileI.goal}</li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileI.item2}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileI.item3}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileI.item4}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileI.item5}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileI.item6}</p>
                        </div>
                    </li>
                    
                    </ul>
                  </div>
                </details>
                <details  dir='rtl' className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border-y border-y-gray-300 mb-2">
                    <p className="text-lg font-medium text-gray-800">
                    {content.ProfileII.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 ">
                    <ul>                 
                    <li className='font-bold mb-2 mr-2'>{content.ProfileII.goal}</li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileII.item2}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileII.item3}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileII.item4}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileII.item5}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileII.item6}</p>
                        </div>
                    </li>
                    </ul>
                  </div>
                </details>
<div id="checkout"></div>
                <details dir='rtl' className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border-y border-y-gray-300 mb-2 ">
                    <p className="text-lg font-medium text-gray-800">
                    {content.ProfileIII.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 ">
                    <ul>                 
                    <li className='font-bold mb-2 mr-2'>{content.ProfileIII.goal}</li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileIII.item2}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileIII.item3}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileIII.item4}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileIII.item5}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileIII.item6}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileIII.item7}</p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>{content.ProfileIII.item8}</p>
                        </div>
                    </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
    </section >
  );
}