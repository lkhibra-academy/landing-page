import { useMatomo } from '@datapunt/matomo-tracker-react'
import axios from 'axios'
import React, { useRef, useState } from 'react'
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
                                <h1 className="ml-4 font-bold text-3xl p-4" dir="rtl">مرحبا بك في تدريب الخبرة فالبرمجة</h1>
                                <div className="max-w-lg px-4 mx-auto lg:px-8 p-8 rounded-lg border border-gray-200 shadow-md">
                                    <div className="flex justify-between border-b border-b-gray-200" dir="rtl">
                                        <h2 className="ml-4 font-bold text-xl">طريقة الدفع</h2>
                                        <br />&nbsp;
                                    </div>
                                    <div className="mt-4">
                                        <div className="flow-root">
                                            <ul className="-my-4 divide-y divide-gray-200" dir="rtl">
                                                <li className="flex items-center justify-between py-4">
                                                    <div className="flex items-start">
                                                        <div className="ml-4">
                                                            <p>
                                                            عن طريق تحويل بنكي (virement bancaire) <br />
                                                            </p>
                                                            <p className="text-left">
                                                                Bank : CIH bank <br />
                                                                Nom : Benennia El Mehdi <br />
                                                                RIB : 230810465787621100660083 <br />
                                                            </p>
                                                            <p>
                                                            المرجو إرسال إثبات الدفع إلينا، بالإضافة إلى إسمك وبريدك الإلكتروني
                                                            على الواتساب <a className="text-blue-600 hover:underline" href="https://api.whatsapp.com/send?phone=212708983350&text=Salam">0708983350</a> <br />
                                                            او العنوان <a className="text-blue-600 hover:underline" href="mailto:contact@lkhibra.ma">contact@lkhibra.ma</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default ThankYou