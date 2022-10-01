import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { useLocation } from 'react-router-dom'

export default function ThankYou() {
    const loc=useLocation();
    const price=loc.state?.price ?? 0;
    return (

        <div className="">
      {/*  Site header */}
      <Header />
        <section className='flex flex-col min-h-screen overflow-hidden mb-10'>
            {/* <h1 className="sr-only">Checkout</h1> */}
            <div className="relative mx-auto max-w-screen-2xl">
                <div className='flex justify-center'>
                    <div className="pt-8 bg-white md:py-10">
                            <div>
                                <h1 className="font-bold md:text-4xl text-3xl text-center px-2 pb-5 text-red-primary" dir="rtl">مرحبا بك في تدريب الخبرة فالبرمجة</h1>
                                <div className="max-w-lg md:mx-auto mx-3 p-2 pr-3 rounded-lg border border-gray-200 shadow-md ">
                                    <div className="flex justify-between border-b border-b-gray-200 " dir="rtl">
                                        <h2 className="pt-2 pb-3 font-bold text-xl md:text-2xl text-center ">لقد تم التوصل بطلبك لكن … ! </h2>
                                        <br />
                                    </div>
                                    <div className="py-4 px-1  border-b border-b-gray-200">
                                        <div className="flow-root">
                                            <ul className="divide-y divide-gray-200" dir="rtl">
                                                <li className="flex items-center justify-between">
                                                    <div className="flex items-start">
                                                        <div className="">
                                                            <p className='text-lg '>
                                                              <span className='font-medium'>لم يتم حجز مقعدك بعد </span><br />
للحجز الان المرجو اداء المبلغ بايداع بنكي على هذا الحساب                                                             
                                                            </p><br />
                                                            <p className="text-center text-base md:text-lg">
                                                                Bank : CIH bank <br />
                                                                Nom : Benennia El Mehdi <br />
                                                                RIB : 230810465787621100660083 <br /><br />
                                                            </p>
                                                            <p> المرجو إرسال إثبات الدفع إلينا، بالإضافة إلى إسمك وبريدك الإلكتروني<br />
                                                            على الواتساب <a className="text-blue-600 hover:underline" href="https://api.whatsapp.com/send?phone=212708983350&text=%D9%84%D9%82%D8%AF%20%D8%AA%D8%B3%D8%AC%D9%84%D8%AA%20%D9%81%D9%8A%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%0A%D8%B3%D9%88%D9%81%20%D8%A3%D8%B1%D8%B3%D9%84%20%D8%A5%D8%AB%D8%A8%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AF%D9%81%D8%B9%20%D9%82%D8%B1%D9%8A%D8%A8%D8%A7">0708983350</a> <br />
                                                            او العنوان <a className="text-blue-600 hover:underline" href="mailto:contact@lkhibra.ma">contact@lkhibra.ma</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex justify-between flex-col pt-3 pb-2 space-y-3" dir="rtl">
                                        <h4 className=" pr-1 font-medium text-lg ">المبلغ :<span className='font-bold  '> {price} د.م </span>
                                         </h4>
                                         <h4 className="pr-1 font-normal text-base ">توقيت الحصص :<span className=''> كل خميس 19h  </span>
                                         </h4> 
                                    </div>
                                </div>
                                <p className="flex items-center justify-center flex-col text-center font-light text-base my-3 mr-3 px-2 space-y-2" dir="rtl">
                                  <span className=''>
                                    <span className='text-red-primary text-base first-letter:font-semibold'>  *  </span>
                                  سوف يتم إلغاء حجزك وإعطاء مكانك لشخص أخر ان لم يتم إيداع المبلغ بعد 3 أيام من توصلك بإيمايل الحجز. 
                                  </span>
                                  <span className="font-light text-sm" dir="rtl">
                                  ( ان كان هناك اي استفسار يمكن تواصل معنا عبر الواتساب )
                                  </span>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer/>
    </div>
    )
}
