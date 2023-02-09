import React, { useState } from 'react';

export default function Content(props) {
    let content = {
        Arabic: {
            title:": محتوى تدريب",
            ModuleI:{
                title:"Algorithms & Python Basics",
                item1:"- Variables  ",
                item2:"- Dynamic Typing  ",
                item3:"- Mutable and Immutable types",
                item4:"- Strings ",
                item5:"- Escape Sequences ",
            },
            ModuleII:{
                title:"Data Structurs",
                item1:"-  ",
                item2:"-  ",
                item3:"-  ",
                item4:"-  ",
                item5:"-  ",
            },
            ModuleIII:{
                title:"Exceptions",
                item1:"-  ",
                item2:"-  ",
                item3:"-  ",
                item4:"-  ",
                item5:"-  ",
            },
            ModuleIV:{
                title:"Classes",
                item1:"-  ",
                item2:"-  ",
                item3:"-  ",
                item4:"-  ",
                item5:"-  ",
            },
            ModuleV:{
                title:"Modules",
                item1:"-  ",
                item2:"-  ",
                item3:"-  ",
                item4:"-  ",
                item5:"-  ",
            },
            ModuleVI:{
                title:"Machine Learning",
                item1:"-  ",
                item2:"-  ",
                item3:"-  ",
                item4:"-  ",
                item5:"-  ",
            },
            ModuleVII:{
                title:"Soft Skills",
                item1:"-  ",
                item2:"-  ",
                item3:"-  ",
                item4:"-  ",
                item5:"-  ",
            },
        },
        French: {

        }
      };
      props.language === "Arabic"
        ? (content = content.Arabic)
        : (content = content.French);
  return (
    <section id="content" className="relative 
    px-6 sm:px-12 py-4 md:py-12 ">
    
    <div className="relative md:gap-6
    max-w-3xl md:max-w-none md:w-full 
    mx-auto md:col-span-7 lg:col-span-6 md:mt-6 ">
        
              {/* title */}
                <p className="px-2 pb-4 font-bold leading-tight text-2xl md:text-3xl text-right">
                    {content.title}
                </p>

              {/* Tabs buttons */}
              <div className="">

                <details className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border border-gray-300 border-b-0 ">
                    <p className="text-base font-medium text-gray-800">
                    {content.ModuleI.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 border border-gray-300 ">
                    <ul>                 
                    <li>{content.ModuleI.item1}</li>
                    <li>{content.ModuleI.item2}</li>
                    <li>{content.ModuleI.item3}</li>
                    <li>{content.ModuleI.item4}</li>
                    <li>{content.ModuleI.item5}</li>
                    </ul>
                  </div>
                </details>
                <details  className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border border-gray-300 border-b-0 ">
                    <p className="text-base font-medium text-gray-800">
                    {content.ModuleII.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 border border-gray-300 ">
                    <ul>                 
                    <li>{content.ModuleII.item1}</li>
                    <li>{content.ModuleII.item2}</li>
                    <li>{content.ModuleII.item3}</li>
                    <li>{content.ModuleII.item4}</li>
                    <li>{content.ModuleII.item5}</li>
                    </ul>
                  </div>
                </details>
                <details  className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border border-gray-300 border-b-0 ">
                    <p className="text-base font-medium text-gray-800">
                    {content.ModuleIII.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 border border-gray-300 ">
                    <ul>                 
                    <li>{content.ModuleIII.item1}</li>
                    <li>{content.ModuleIII.item2}</li>
                    <li>{content.ModuleIII.item3}</li>
                    <li>{content.ModuleIII.item4}</li>
                    <li>{content.ModuleIII.item5}</li>
                    </ul>
                  </div>
                </details>
                <details  className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border border-gray-300 border-b-0 ">
                    <p className="text-base font-medium text-gray-800">
                    {content.ModuleIV.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 border border-gray-300 ">
                    <ul>                 
                    <li>{content.ModuleIV.item1}</li>
                    <li>{content.ModuleIV.item2}</li>
                    <li>{content.ModuleIV.item3}</li>
                    <li>{content.ModuleIV.item4}</li>
                    <li>{content.ModuleIV.item5}</li>
                    </ul>
                  </div>
                </details>
                <details  className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border border-gray-300 border-b-0 ">
                    <p className="text-base font-medium text-gray-800">
                    {content.ModuleV.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 border border-gray-300 ">
                    <ul>                 
                    <li>{content.ModuleV.item1}</li>
                    <li>{content.ModuleV.item2}</li>
                    <li>{content.ModuleV.item3}</li>
                    <li>{content.ModuleV.item4}</li>
                    <li>{content.ModuleV.item5}</li>
                    </ul>
                  </div>
                </details>
                <details  className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border border-gray-300 border-b-0 ">
                    <p className="text-base font-medium text-gray-800">
                    {content.ModuleVI.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 border border-gray-300 ">
                    <ul>                 
                    <li>{content.ModuleVI.item1}</li>
                    <li>{content.ModuleVI.item2}</li>
                    <li>{content.ModuleVI.item3}</li>
                    <li>{content.ModuleVI.item4}</li>
                    <li>{content.ModuleVI.item5}</li>
                    </ul>
                  </div>
                </details>
<div id="checkout"></div>
                <details  className=" group">
                  <summary className="flex items-center justify-between cursor-pointer 
                  py-3 px-4 border border-gray-300  ">
                    <p className="text-base font-medium text-gray-800">
                    {content.ModuleVII.title}</p>
                    <i className="fa fa-chevron-down
                    flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
                    <i className="fa fa-chevron-up
                    flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
                  </summary>

                  <div className="py-3 px-4 leading-relaxed text-gray-700 border border-gray-300 ">
                    <ul>                 
                    <li>{content.ModuleVII.item1}</li>
                    <li>{content.ModuleVII.item2}</li>
                    <li>{content.ModuleVII.item3}</li>
                    <li>{content.ModuleVII.item4}</li>
                    <li>{content.ModuleVII.item5}</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
    </section >
  );
}
