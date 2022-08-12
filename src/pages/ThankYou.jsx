import React from 'react'
import Header from '../partials/Header'

function ThankYou() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

        <section>
            <h1 className="sr-only">Checkout</h1>
            <div className="relative mx-auto max-w-screen-2xl">
                <div className='flex justify-center'>
                    <div className="pt-20 bg-white md:py-24">
                            <div>
                                <h1 className="font-bold text-3xl text-center p-5" dir="rtl">مرحبا بك في تدريب الخبرة فالبرمجة</h1>
                                <div className="max-w-lg md:mx-auto mx-3 p-2 pr-3 rounded-lg border border-gray-200 shadow-md ">
                                    <div className="flex justify-between border-b border-b-gray-200 " dir="rtl">
                                        <h2 className="pt-2 pb-3 font-bold text-xl ">طريقة الدفع</h2>
                                        <br />
                                    </div>
                                    <div className="py-4 px-1  border-b border-b-gray-200">
                                        <div className="flow-root">
                                            <ul className="divide-y divide-gray-200" dir="rtl">
                                                <li className="flex items-center justify-between">
                                                    <div className="flex items-start">
                                                        <div className="">
                                                            <p>
                                                            عن طريق تحويل بنكي (virement bancaire) <br /><br />
                                                            </p>
                                                            <p className="text-center">
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
                                    <div className="flex justify-between " dir="rtl">
                                        <h4 className="pt-3 pb-2 pr-1 font-medium text-lg ">المبلغ :<span className='font-bold  '> 789 د.م </span>
                                         </h4>
                                    </div>
                                </div>
                                <p className="md:text-right text-center font-light text-base my-3 mr-3" dir="rtl"><span className='text-red-primary text-base first-letter:font-semibold'>  *  </span>
                                أخر أجل للدفع هو الإثنين 14 غشت</p>
                                <p className="md:text-right text-center font-light text-base my-3 mr-3" dir="rtl"><span className='text-red-primary text-base first-letter:font-semibold'>  *  </span>
                                أول حصة سوف تكون التلاثاء 15 غشت</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default ThankYou