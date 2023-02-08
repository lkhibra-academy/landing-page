import React, { useState } from 'react';
import Modal from '../../utils/Modal';
import LeadForm from './LeadForm';

export default function Offers({src1}) {
    const [ModalOpen, setModalOpen] = useState(false);
  return (
    <section className='relative max-w-6xl mx-auto px-0 sm:px-6 mb-4 mt-2'>
        <div className="relative items-center w-fit mx-auto px-3 md:px-1 lg:px-16 max-w-7xl ">
            <div className="relative md:p-2 overflow-hidden 
             md:grid md:grid-cols-2 
            rounded-xl 
            md:space-x-4 
            md:space-y-0 space-y-4
            gap-x-1 md:gap-x-8 
            ">
                {/* left card */}
                <div dir='rtl' className="relative flex flex-col p-5 bg-white rounded-2xl" >
                <div className="flex-1">
                <h3 className="font-semibold text-lg text-neutral-600 white">العرض أساسي  
                </h3>
                    {/* text-neutral-600 */}
                    <p className="flex items-baseline text-neutral-600 space-x-2 leading-tight">
                    <span className="text-6xl font-bold">350</span> 
                    <span className='text-2xl font-semibold text-neutral-500'> درهم </span>
                    {/* <span className='text-lg tracking-tight'> 3 أشهر كاملة </span> */}
                    </p>
                    <p className='mb-3'>
                    <span className="text-base font-medium text-white bg-neutral-400 px-3 py-1 rounded-lg">
                    شهر فقط 
                    </span>
                    </p>
                    <p className="text-neutral-600 text-solitud py-1">
                    تعلم أساسيات البرمجة والمعارف المهمة لبدأ رحلتك في المجال 
                    </p>
                    {/* <!-- Feature list --> */}

                    {/* <ul role="list" className="pt-3 mt-2 space-y-2 border-t">
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
                            <span className="mr-3 text-neutral-600">عدد المشاريع البرمجية :
                            <span className='font-medium'> 1 </span> 
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
                            <span className="mr-3 text-neutral-600 space-y-1">ماذا سوف تتعلم :<br/>
                            
                            <span className=''>- الخوارزميات </span><br />
                            <span className=''>- أساسيات بايثون </span><br />
                            </span>
                        </li>
                    </ul> */}
                </div>

{/* cta */}
                <div className="mt-4 rounded-lg">
                    {/* <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get Started </a> */}
                    {/* <p><span className='text-red-primary font-medium text-xs md:text-sm'> * </span>
                    <span className='font-light text-xs md:text-sm text-neutral-600'>
                        مع امكانية الإنتقال إلى عرض 3 أشهر بعد انتهاء شهر الأول 
                    </span></p> */}

                   <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); setModalOpen(true); }} 
                        aria-controls="modal"
                        className="flex justify-around items-center  
                        rounded-md text-lg mt-2 font-normal p-2 bg-red-primary text-white w-full
                         text-center " 
                        type="submit"> تسجيل
                    </a> 
                </div>
                
                </div>
                
                {/* right card */}
                <div dir='rtl' className="relative flex flex-col p-5 bg-red-primary rounded-2xl md:order-last">
                <div className="relative flex-1">
                    <h3 className="font-semibold text-lg text-white">أحسن عرض </h3>
                    
                    <p className="flex items-baseline text-white space-x-2 leading-tight">
                    <span className="text-6xl font-bold">930</span> 
                    <span className='text-2xl font-semibold '> درهم </span>
                    {/* <span className='text-lg tracking-tight'> 3 أشهر كاملة </span> */}
                    </p>
                    <p className='mb-3'>
                    <span className="text-base font-medium text-red-primary bg-white px-3 py-1 rounded-lg">3 أشهر كاملة</span>
                    </p>
                    <p className="text-white text-solitud py-1">
                    تعلم كل ما يخص البرمجة بالبايثون لكي تفتح ابواب جديدة 
                    </p>
                    {/* <!-- Feature list --> */}
                    {/* <ul role="list" className="pt-3 mt-2 space-y-2 border-t">
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
                            <span className="mr-3 text-white">عدد المشاريع البرمجية :
                            <span className='font-medium'> 5 </span> 


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
                            
                            <span className=''>- الخوارزميات </span><br />
                            <span className=''>- أساسيات بايثون </span><br />
                            <span className=''>- هياكل البيانات </span><br />
                            <span className=''>- البرمجة كائنية التوجه </span><br />
                            <span className=''>- البرمجة الوضيفية </span><br />
                            <span className=''>- مكتبات بايثون</span><br />
                            </span>
                        </li>
                        
                    </ul> */}
                </div>
                <div className="mt-4 rounded-lg">
                    {/* <a href="/pricing" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get started </a> */}
                    <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); setModalOpen(true); }} 
                        aria-controls="modal"
                        className="flex justify-around items-center  
                        rounded-md text-lg mt-2 font-medium p-2 text-red-primary bg-white w-full
                         text-center " 
                        type="submit"> تسجيل
                    </a> 
                </div>
                </div>

            </div>
        </div>
        <Modal id="modal" ariaLabel="modal-headline" show={ModalOpen} handleClose={() => setModalOpen(false)}>
            <div className="relative ">
            <LeadForm src={src1}/>
            </div>
        </Modal>
    </section>
  );
}




