import React, { useState } from "react";

export default function TestComp(props) { 
  let content = {
    Arabic: {
      title1:" ؟ ",
      title:"هل لديك ",
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
    text-center px-7 mx-auto sm:px-10 md:py-0 pb-4">
      <details className=" group">
                  <summary dir="rtl" className="flex items-center justify-center cursor-pointer 
                  pt-2 px-4 ">
                    <p className="text-sm md:text-lg font-light md:font-medium text-gray-600 text-center">
                    {content.title}
                    <span className="text-red-primary font-medium text-sm md:text-base"> COUPON CODE </span>
                    {content.title1}
                    </p> 
                  </summary>
                  <div class="my-3 mx-auto leading-relaxed text-gray-700 max-w-sm rounded-md flex flex-row justify-center items-center border
                  border-gray-200 shadow-lg
                  ">
                    <input type="text"  placeholder="COUPON CODE" 
                    class="shrink w-full rounded-l-md 
                    " />
                    <button type="button" class="text-white bg-red-primary px-3 py-2 
                    rounded-r-md
                    " >Apply</button>
                  </div>

      </details>
    </section>
  );
  
 }
  