import React from 'react'
import Header from '../partials/components/Header'
import Footer from '../partials/components/Footer'
import { useLocation } from 'react-router-dom'

export default function ThankYou() {
    const loc=useLocation();
    const price=loc.state?.price ?? 0;
    return (

        <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />
        {/*  Page content */}
        <main className="flex-grow">
        <section className='flex flex-col min-h-screen overflow-hidden mb-10'>
            <div className="relative mx-auto max-w-screen-2xl">
                <div className='flex justify-center flex-col pt-8 bg-white md:py-10'>
                <p className="font-bold md:text-4xl text-xl text-center pb-5 text-red-primary" dir="rtl">مرحبا بك في تدريب الخبرة فالبرمجة</p>
                <div className="max-w-lg md:mx-auto mx-3 rounded-lg border border-gray-200 shadow-md
                flex justify-center items-center flex-col ">
                    {/* Head */}
                    <p className="p-3 font-semibold text-xl md:text-2xl text-center text-gray-900">لقد تم التوصل بطلبك </p>
                    <i className="fa-regular fa-check-circle text-6xl p-3 text-center text-gray-900"></i>
                    {/* Main */}
                    <p className="p-3 font-base text-base md:text-2xl text-center text-gray-800">
                    سوف يتم الإتصال بك في أقرب وقت من طرف أحد مستشارينا التعليميين
                                        </p>
                    {/* Foot */}
                    
                </div>
                
            </div>
                    </div>
        </section>
        
        </main>
        {/*  Site footer */}
        <Footer />

</div>
    )
}
