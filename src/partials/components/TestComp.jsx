import React, { useState } from "react";

export default function TestComp(props) { 
  let content = {
    Arabic: {
      title1:" ؟ ",
      title:"هل لديك كود خصم",
      // title:"هل لديك كود خصم",
      item1:"رغبة في التعلم",
        item2:"حاسوب",
        item3:"أنترنيت",
    },
    French: {

    }
  };
  props.language === "Arabic"
    ? (content = content.Arabic)
    : (content = content.French);
    return (
    <section className="relative max-w-6xl  
    text-center px-7 mx-auto sm:px-10 md:pt-0">
      <details className=" group">
                  <summary dir="rtl" className="flex items-center justify-center cursor-pointer 
                  pt-2 px-4 ">
                    <p className="text-lg font-light text-gray-600 text-center">
                    {content.title}
                    <span className="text-red-primary font-medium text-base"> COUPON CODE </span>
                    {content.title1}
                    </p> 
                  </summary>
                  <div class="my-3 mx-auto leading-relaxed text-gray-700 max-w-sm rounded-md flex flex-row justify-center items-center
                  border-gray-800 outline-2 
                  ">
                    <input type="text"  placeholder=" " 
                    class="shrink w-full rounded-l-md border-none outline-none
                    shadow-md
                    " />
                    <button type="button" class="text-white bg-red-primary px-3 py-2 
                    rounded-r-md border-none outline-none
                    shadow-md
                    " >Apply</button>
                  </div>

      </details>
    </section>
  );
  
 }
  