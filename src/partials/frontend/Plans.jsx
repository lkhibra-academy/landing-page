import React, { useState } from 'react';
import Modal from '../../utils/Modal';
import LeadForm from '../components/LeadForm';

export default function Plans({src1}) {
    const [videoModalOpen, setVideoModalOpen] = useState(false);
  return (
    <section className='relative max-w-6xl mx-auto px-5 sm:px-6 mb-4 md:mt-2 mt-6'>
        <div className="relative items-center w-fit mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div>
            <div className="relative lg:p-8 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 rounded-xl">
            
                {/* right card */}
                <div dir='rtl' className="relative flex flex-col p-5 bg-red-primary rounded-2xl md:order-last">
                <div className="relative flex-1">
                    <h3 className="font-semibold text-lg text-white">أحسن عرض </h3>
                    
                    <p className="flex items-baseline text-white space-x-2 leading-tight">
                    <span className="text-6xl font-bold">789</span> 
                    <span className='text-2xl font-semibold '> درهم </span>
                    {/* <span className='text-lg tracking-tight'> 3 أشهر كاملة </span> */}
                    </p>
                    <p className='mb-3'>
                    <span className="text-base font-medium text-red-primary bg-white px-3 py-1 rounded-lg">3 أشهر كاملة</span>
                    </p>
                    <p className="text-white text-solitud py-1">
                    تعلم أساسيات تطوير المواقع وابدأ رحلتك كمطور ويب 
                    </p>
                    {/* <!-- Feature list --> */}
                    <ul role="list" className="pt-3 mt-2 space-y-2 border-t">
                    {/* <span className="text-xl font-medium text-white">ماذا يحتوي ؟</span> */}
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="mr-3 text-white">شهادة معتدمة 
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="mr-3 text-white">متابعة شخصية   
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="mr-3 text-white">حصة كل اسبوع  
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="mr-3 text-white">عدد المشاريع البرمجية :
                            <span className='font-medium'> 4 </span> 
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="mr-3 text-white">عدد الحصص : 
                            <span className='font-medium'> 12 </span> 
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="mr-3 text-white space-y-1">ماذا سوف تتعلم :<br/>
                            
                            <span className=''>- أساسيات HTML و CSS</span><br />
                            <span className=''>- مفاهيم متقدمة في CSS</span><br />
                            <span className=''>- أساسيات لغة Javascript</span><br />
                            <span className=''>- البرمجة كائنية التوجه </span><br />
                            <span className=''>- تصميم صفحات الويب </span><br />
                            </span>
                        </li>
                        
                    </ul>
                </div>
                <div className="mt-4 rounded-lg">
                    {/* <a href="/pricing" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get started </a> */}
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} 
                        aria-controls="modal"
                        className="rounded-lg bg-black text-lg font-normal  p-2.5 text-red-primary bg-white w-full block" type="submit">
                    تسجيل
                    </button>
                </div>
                </div>

                {/* left card */}
                <div dir='rtl' className="relative flex flex-col p-5 bg-white rounded-2xl" >
                <div className="flex-1">
                <h3 className="font-semibold text-lg text-neutral-600 white">العرض أساسي  
                </h3>
                    {/* text-neutral-600 */}
                    <p className="flex items-baseline text-neutral-600 space-x-2 leading-tight">
                    <span className="text-6xl font-bold">299</span> 
                    <span className='text-2xl font-semibold text-neutral-500'> درهم </span>
                    {/* <span className='text-lg tracking-tight'> 3 أشهر كاملة </span> */}
                    </p>
                    <p className='mb-3'>
                    <span className="text-base font-medium text-white bg-neutral-400 px-3 py-1 rounded-lg">
                    كل شهر 
                    </span>
                    </p>
                    <p className="text-neutral-600 text-solitud py-1">
                    تعلم أساسيات تطوير المواقع وابدأ رحلتك كمطور ويب 
                    </p>
                    {/* <!-- Feature list --> */}
                    <ul role="list" className="pt-3 mt-2 space-y-2 border-t">
                    {/* <span className="text-xl font-medium text-white">ماذا يحتوي ؟</span> */}
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                            </div>
                            <span className="mr-3 text-neutral-600">شهادة معتدمة    
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                            </div>
                            <span className="mr-3 text-neutral-600">متابعة شخصية   
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                            </div>
                            <span className="mr-3 text-neutral-600">حصة كل اسبوع    
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                            </div>
                            <span className="mr-3 text-neutral-600">عدد المشاريع البرمجية :
                            <span className='font-medium'> 4 </span> 
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                            </div>
                            <span className="mr-3 text-neutral-600">عدد الحصص : 
                            <span className='font-medium'> 12 </span> 
                            </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                            </div>
                            <span className="mr-3 text-neutral-600 space-y-1">ماذا سوف تتعلم :<br/>
                            <span className=''>- أساسيات HTML و CSS</span><br />
                            <span className=''>- مفاهيم متقدمة في CSS</span><br />
                            <span className=''>- أساسيات لغة Javascript</span><br />
                            <span className=''>- البرمجة كائنية التوجه </span><br />
                            <span className=''>- تصميم صفحات الويب </span><br />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="mt-5 rounded-lg">
                    {/* <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get Started </a> */}
                    <p><span className='text-red-primary font-medium'> * </span>
                        مع امكانية الإنتقال إلى عرض 3 أشهر بعد انتهاء شهر الأول 
                    </p>
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} 
                        aria-controls="modal"
                        className="rounded-lg text-lg mt-2 font-normal p-2.5 bg-red-primary text-white w-full block text-center transition duration-500 ease-in-out transform border-2 border-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 " 
                        type="submit">
                    تسجيل
                    </button>
                </div>
                </div>

                
            </div>
            </div>
        </div>
        <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
            <div className="relative ">
            <LeadForm src={src1}/>
            </div>
        </Modal>
        </section>
  );
}



