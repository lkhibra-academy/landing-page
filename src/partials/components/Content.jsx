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
                item6:"- Userful String Methods",
                item7:"- Formatted Strings",
                item8:"- Numbers",
                item9:"- Arithmetic Operators",
                item10:"- Type Conversion",
                item11:"- Conditional Operators",
                item12:"- Logical Operators",
                item13:"- Ternary Operator",
                item14:"- Loops (For,While)",
                item15:"- Arguments (xargs)",
                item16:"- Functions",
                item17:"- Scope"
            },
            ModuleII:{
                title:"Data Structures",
                item1:"- List",
                item2:"- Looping Over Lists",
                item3:"- Finding items",
                item4:"- Lambda Functions",
                item5:"- Sortings Lists",
                item6:"- Map Function",
                item7:"- Zip Function",
                item8:"- List Comprehensions",
                item9:"- Stacks",
                item10:"- Queues",
                item11:"- Tuples",
                item12:"- Arrays",
                item13:"- Sets",
                item14:"- Dictionaries",
                item15:"- Generator Expressions",
                
            },
            ModuleIII:{
                title:"Exceptions",
                item1:"- Handling Exceptions ",
                item2:"- Handling different Exceptions ",
                item3:"- Raising Exceptions ",
                item4:"- With Statement ",
            },
            ModuleIV:{
                title:"Classes",
                item1:"- Creating Classes ",
                item2:"- Constructors ",
                item3:"- Classes vs Instances ",
                item4:"- Magic Methods ",
                item5:"- Performing arithmetic operators with classes",
                item6:"- Inheritance",
                item7:"- Method Overriding",
                item8:"- Multiple Inheretence",
                item9:"- Abstract Base Classes",
                item10:"- Duck Typing"
            },
            ModuleV:{
                title:"Modules",
                item1:"- Creating Modules ",
                item2:"- Compiled python files ",
                item3:"- Module search",
                item4:"- Sub Packages ",
                item5:"- Dir function ",
            },
            ModuleVI:{
                title:"Machine Learning",
                item1:"- What is Machine learning ",
                item2:"- Machine Learning in action ",
                item3:"- Libraries and tools for machine Learning ",
                item4:"- Importing data sets ",
                item5:"- Working on real machine learning problem ",
                item6:"- Persisting Models",
            },
            ModuleVII:{
                title:"Soft Skills",
                item1:"- How to learn ",
                item2:"- Time management ",
                item3:"- Problem-solving ",
                item4:"- Motivation ",
                item5:"- Focus ",
                item6:"- Organisation",
                item7:"- Adaptability",
                item8:"- Teamwork",
                item9:"- Communication",
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
                    <li>{content.ModuleI.item6}</li>
                    <li>{content.ModuleI.item7}</li>
                    <li>{content.ModuleI.item8}</li>
                    <li>{content.ModuleI.item9}</li>
                    <li>{content.ModuleI.item10}</li>
                    <li>{content.ModuleI.item11}</li>
                    <li>{content.ModuleI.item12}</li>
                    <li>{content.ModuleI.item13}</li>
                    <li>{content.ModuleI.item14}</li>
                    <li>{content.ModuleI.item15}</li>
                    <li>{content.ModuleI.item16}</li>
                    <li>{content.ModuleI.item17}</li>
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
                    <li>{content.ModuleII.item6}</li>
                    <li>{content.ModuleII.item7}</li>
                    <li>{content.ModuleII.item8}</li>
                    <li>{content.ModuleII.item9}</li>
                    <li>{content.ModuleII.item10}</li>
                    <li>{content.ModuleII.item11}</li>
                    <li>{content.ModuleII.item12}</li>
                    <li>{content.ModuleII.item13}</li>
                    <li>{content.ModuleII.item14}</li>
                    <li>{content.ModuleII.item15}</li>
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
                    <li>{content.ModuleIV.item6}</li>
                    <li>{content.ModuleIV.item7}</li>
                    <li>{content.ModuleIV.item8}</li>
                    <li>{content.ModuleIV.item9}</li>
                    <li>{content.ModuleIV.item10}</li>
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
                    <li>{content.ModuleVI.item6}</li>
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
                    <li>{content.ModuleVII.item6}</li>
                    <li>{content.ModuleVII.item7}</li>
                    <li>{content.ModuleVII.item8}</li>
                    <li>{content.ModuleVII.item9}</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
    </section >
  );
}
