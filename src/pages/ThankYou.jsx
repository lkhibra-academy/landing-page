import React, { useEffect } from 'react';
import Header from '../partials/components/Header';
import Footer from '../partials/components/Footer';
import { useLocation } from 'react-router-dom';
import ig from '../images/instagram.png';

export default function ThankYou() {
  const loc = useLocation();
  const price = loc.state?.price ?? 0;

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = 'https://www.instagram.com/_u/lkhibra.ma'; // Replace with your desired link
    }, 10000); // Delay in milliseconds (7 seconds)

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="flex flex-col min-h-screen overflow-hidden mb-10">
          <div className="relative mx-auto max-w-screen-2xl">
            <div className="flex justify-center flex-col p-4">
              <p className="font-bold md:text-2xl text-xl text-center pb-5 text-gray-800" dir="rtl">
                مرحبا بك في تدريب الخبرة فالبرمجة
              </p>
              <div className="md:mx-auto p-2 md:p-4 rounded-lg border border-gray-200 shadow-md flex justify-center items-center flex-col max-w-lg">
                {/* Head */}
                <i className="fa-regular fa-check-circle text-6xl mt-2 p-2 text-center text-red-primary"></i>
                <p className="p-2 font-semibold text-lg md:text-xl text-center text-red-primary">
                  تم توصل بطلبك بنجاح
                </p>
                {/* Main */}
                <p className="px-1 py-3 font-medium text-sm md:text-lg text-center text-gray-800">
                  جميع خطوات التسجيل تم إرسالها في بريدك الإلكتروني وسوف نتصل بك في أقرب وقت من أجل التأكيد
                </p>
              </div>
              <p className="font-light text-xs text-center p-2" dir="rtl">
                ان كان هناك اي استفسار يمكن تواصل معنا عبر
                <a href="https://api.whatsapp.com/send?phone=212708983350" className="text-red-primary font-medium">
                  الواتساب
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}
