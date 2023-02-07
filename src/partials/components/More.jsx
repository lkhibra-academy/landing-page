
import React from 'react';

export default function More(props) {
  let content = {
    Arabic: {
        cta:"تسجيل",
        price:"350dh/Mois",
    },
    French: {

    }
  };

  props.language === "Arabic"
    ? (content = content.Arabic)
    : (content = content.French);

  return (
      <div className="">
        <section className="relative max-w-3xl mx-auto px-8 py-8 sm:px-12 lg:px-8">
              <p className="font-bold leading-tight text-2xl md:text-3xl text-center ">أكثر من مجرد تدريب</p>
            <ul className="grid grid-cols-1 gap-8 mt-6 md:gap-12 md:mt-16 md:grid-cols-2">
              {/* items */}

              <li className="flex items-start text-right">
                <div dir="rtl" className="mr-4">
                  <h2 className="text-lg font-semibold leading-tight">متابعة شخصية</h2>
                  <p className="mt-1 text-base font-normal ">
                  المدرس كايبقى معاك على اتصال فمجموعة واتساب باش يحل مشاكل لي اتطيح فيهم أثناء تعلم                  
                  </p>
                </div>
                <span className="flex-shrink-0 bg-white rounded-lg outline outline-1 outline-red-primary">
                  <i class="fa fa-users text-red-primary text-center m-3" aria-hidden="true"></i>
                </span>
              </li> 
              <li className="flex items-start text-right">
                <div dir="rtl" className="mr-4">
                  <h2 className="text-lg font-semibold leading-tight">متابعة شخصية</h2>
                  <p className="mt-1 text-base font-normal ">
                  المدرس كايبقى معاك على اتصال فمجموعة واتساب باش يحل مشاكل لي اتطيح فيهم أثناء تعلم                  
                  </p>
                </div>
                <span className="flex-shrink-0 bg-white rounded-lg outline outline-1 outline-red-primary">
                  <i class="fa fa-users text-red-primary text-center m-3" aria-hidden="true"></i>
                </span>
              </li>
              <li className="flex items-start text-right">
                <div dir="rtl" className="mr-4">
                  <h2 className="text-lg font-semibold leading-tight">متابعة شخصية</h2>
                  <p className="mt-1 text-base font-normal ">
                  المدرس كايبقى معاك على اتصال فمجموعة واتساب باش يحل مشاكل لي اتطيح فيهم أثناء تعلم                  
                  </p>
                </div>
                <span className="flex-shrink-0 bg-white rounded-lg outline outline-1 outline-red-primary">
                  <i class="fa fa-users text-red-primary text-center m-3" aria-hidden="true"></i>
                </span>
              </li>
              <li className="flex items-start text-right">
                <div dir="rtl" className="mr-4">
                  <h2 className="text-lg font-semibold leading-tight">متابعة شخصية</h2>
                  <p className="mt-1 text-base font-normal ">
                  المدرس كايبقى معاك على اتصال فمجموعة واتساب باش يحل مشاكل لي اتطيح فيهم أثناء تعلم                  
                  </p>
                </div>
                <span className="flex-shrink-0 bg-white rounded-lg outline outline-1 outline-red-primary">
                  <i class="fa fa-users text-red-primary text-center m-3" aria-hidden="true"></i>
                </span>
              </li>
              
          </ul>
        </section>
      </div>
          );
};