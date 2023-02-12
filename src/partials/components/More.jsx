
import React from 'react';

export default function More(props) {
  let content = {
    Arabic: {
        title:"أكثر من مجرد تدريب",
        itemI:{
          title:"شهادة معتمدة",
          content:"مني كاتسالي تدريب كتاخد شهادة معتمدة من عندنا لي كاتفتح ليك فرص جداد فحياتك"
        },
        itemII:{
          title:"متابعة شخصية",
          content:" المدرس كايبقى معاك على اتصال فمجموعة واتساب باش يحل مشاكل لي اتطيح فيهم أثناء تعلم"
        },
        itemIII:{
          title:"مشاريع برمجية",
          content:"التدريب تطبيقي 100٪ من اول حصة ونتا كاتخدم على مشاريع برمجية لي اتقدر تعاونك فحياتك العملية "
        },
        itemIV:{
          title:"تدريب شامل ",
          content:"هذا التدريب مامركزش غير على جانب تقني فقط بل فيه حتى حصص كل 15 يوم ديال Soft Skills"
        },

    },
    French: {

    }
  };

  props.language === "Arabic"
    ? (content = content.Arabic)
    : (content = content.French);

  return (
      <div className="">
        <section className="relative max-w-3xl mx-auto px-8 py-8 sm:px-12 lg:px-8 lg:max-w-full">
              <p className="font-bold leading-tight text-2xl md:text-3xl text-center "> {content.title}</p>
            <ul className="grid grid-cols-1 gap-4 mt-6 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
              {/* items */}

              <li className="flex items-start text-right ml-auto">
                <div dir="rtl" className="mr-4">
                  <p className="text-lg font-semibold leading-tight">{content.itemII.title} </p>
                  <p className="mt-1 text-base font-normal ">
                  {content.itemII.content}                  </p>
                </div>
                <div className='flex-shrink-0 bg-white rounded-lg 
                outline outline-1 outline-red-primary p-3 w-10 h-10
                flex justify-center items-center'>
                <i className=" fa fa-users text-red-primary text-center " aria-hidden="true"></i>
                </div>
              </li>
              <li className="flex items-start text-right ml-auto">
                <div dir="rtl" className="mr-4">
                  <p className="text-lg font-semibold leading-tight">{content.itemI.title} </p>
                  <p className="mt-1 text-base font-normal ">
                  {content.itemI.content}                  </p>
                </div>
                <div className='flex-shrink-0 bg-white rounded-lg 
                outline outline-1 outline-red-primary p-3 w-10 h-10
                flex justify-center items-center'>
                <i className=" fa fa-graduation-cap text-red-primary text-center " aria-hidden="true"></i>
                </div>
              </li>
              <li className="flex items-start text-right ml-auto">

                <div dir="rtl" className="mr-4">
                  <p className="text-lg font-semibold leading-tight">{content.itemIII.title} </p>
                  <p className="mt-1 text-base font-normal ">{content.itemIII.content}</p>
                </div>
                <div className='flex-shrink-0 bg-white rounded-lg 
                outline outline-1 outline-red-primary p-3 w-10 h-10
                flex justify-center items-center'>
                <i className=" fa fa-laptop-code text-red-primary text-center " aria-hidden="true"></i>
                </div>
                
              </li>
              <li className="flex items-start text-right ml-auto">
                <div dir="rtl" className="mr-4">
                  <p className="text-lg font-semibold leading-tight">{content.itemIV.title} </p>
                  <p className="mt-1 text-base font-normal ">
                  {content.itemIV.content}                  </p>
                </div>
                <div className='flex-shrink-0 bg-white rounded-lg 
                outline outline-1 outline-red-primary p-3 w-10 h-10
                flex justify-center items-center'>
                <i className=" fa fa-user-graduate text-red-primary text-center " aria-hidden="true"></i>
                </div>
              </li>

          </ul>
        </section>
      </div>
          );
};