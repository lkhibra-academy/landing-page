import React, { useState } from 'react';

function Features() {

  return (
    <section id="content" className="relative ">
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12 ">

          {/* Section content */}
          <div className="md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 flex justify-between"><span>Training Content</span><span className="text-right">محتوى تدريب</span></h3>
              </div>
              {/* Tabs buttons */}
              <div className="space-y-4">

                <details className="p-4 border-l-2 border-red-primary border-y border-y-gray-200 group" open>
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-semibold text-gray-900">
                    Project 1 : Conversion App <span className='ml-2 font-medium text-base'>(4 Weeks)</span></h5>
                    <span
                      className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="pl-3 mt-4 leading-relaxed text-gray-700">
                    <span className='font-medium text-lg text-gray-800'>What we'll learn : </span> 
                    <ul>                 
                      <li>- Variables, Datatypes</li>
                      <li>- Operators</li>
                      <li>- User input and Output</li>
                      <li>- Conditionals </li>
                      <li>- Loops </li>
                      <li>- Strings Formatting</li>
                    </ul>
                  </div>
                </details>

                <details className="p-4 border-l-2 border-red-primary border-y border-y-gray-200 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-semibold text-gray-900">
                    Project 2 : Bank Accounts management System <span className='ml-2 font-medium text-base'>(3 Weeks)</span></h5>
                    <span
                      className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="pl-3 mt-4 leading-relaxed text-gray-700">
                    <span className='font-medium text-lg text-gray-800'>What we'll learn : </span> 
                    <ul>                 
                      <li>- Dictionnaries</li>
                      <li>- Lists</li>
                      <li>- Tuples</li>
                      <li>- Login systems</li>
                      <li>- Time module</li>
                    </ul>
                  </div>
                </details>

                <details className="p-4 border-l-2 border-red-primary border-y border-y-gray-200 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-semibold text-gray-900">
                    Project 3 : Students management system <span className='ml-2 font-medium text-base'>(2 Weeks)</span></h5>
                    <span
                      className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="pl-3 mt-4 leading-relaxed text-gray-700">
                    <span className='font-medium text-lg text-gray-800'>What we'll learn : </span> 
                    <ul>                 
                      <li>- Functions</li>
                      <li>- Return statement</li>
                      <li>- Lambda functions</li>
                      <li>- Strings management</li>
                    </ul>
                  </div>
                </details>

                <details className="p-4 border-l-2 border-red-primary border-y border-y-gray-200 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-semibold text-gray-900">
                    Project 4 : Cars Store management system<span className='ml-2 font-medium text-base'>(2 Weeks)</span></h5>
                    <span
                      className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="pl-3 mt-4 leading-relaxed text-gray-700">
                    <span className='font-medium text-lg text-gray-800'>What we'll learn : </span> 
                    <ul>                 
                      <li>- What is OOP ?</li>
                      <li>- When we use it ?</li>
                      <li>- Class definition</li>
                      <li>- Inheretence</li>
                    </ul>
                  </div>
                </details>
                <div id="checkout"></div>
                <details className="p-4 border-l-2 border-red-primary border-y border-y-gray-200 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-semibold text-gray-900">
                    Project 5 : Youtube video downloader and a whatsapp message automator <span className='ml-2 font-medium text-base'>(1 Week)</span></h5>
                    <span
                      className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="pl-3 mt-4 leading-relaxed text-gray-700">
                    <span className='font-medium text-lg text-gray-800'>What we'll learn : </span> 
                    <ul>                 
                      <li>- How to use python libraries ?</li>
                      <li>- pyautogui</li>
                      <li>- pywhatKit</li>
                      <li>- wget</li>
                    </ul>
                  </div>
                </details>

              </div>

              {/* <div className="mb-8 md:mb-0">
                <div
                  className='f flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3'
                  href="#0"
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Project 1 : Conversion App</div>
                    <div className="text-gray-600">What we'll learn : 
                      <ol className="list-decimal list-inside">
                        <li>Variables, Datatypes</li>
                        <li>Operators</li>
                        <li>User input and Output</li>
                        <li>Conditionals </li>
                        <li>Loops </li>
                        <li>Strings Formatting</li>
                      </ol>
                    </div>
                  </div>

                </div>
                <div
                  className='f flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3'
                  href="#0"
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Project 2 : Bank Accounts management System (3 Weeks)</div>
                    <div className="text-gray-600">What we'll learn : 
                      <ol className="list-decimal list-inside">
                        <li>Variables, Datatypes</li>
                        <li>Operators</li>
                        <li>User input and Output</li>
                        <li>Conditionals </li>
                        <li>Loops </li>
                        <li>Strings Formatting</li>
                      </ol>
                    </div>
                  </div>

                </div>
              </div> */}
            </div>

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
