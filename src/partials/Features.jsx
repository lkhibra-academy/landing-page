import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';
import Button1 from './Button1';

function Features() {

  const [tab, setTab] = useState(1);

  // const tabs = useRef(null);

  // const heightFix = () => {
  //   if (tabs.current.children[tab]) {
  //     tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
  //   }
  // }

  // useEffect(() => {
  //   heightFix()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [tab])

  return (
    <section className="relative">
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section content */}
          <div className="md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 flex justify-between"><span>Training Content</span><span className="text-right">محتوى تدريب</span></h3>
              </div>
              {/* Tabs buttons */}
              <div class="space-y-4">
                <details class="p-6 border-l-4 border-red-500 border-y border-y-gray-200 group" open>
                  <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h5>

                    <span
                      class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                  </p>
                </details>
            
                <details class="p-6 border-l-4 border-red-500 border-y border-y-gray-200 group">
                  <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h5>

                    <span
                      class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                  </p>
                </details>
                <details class="p-6 border-l-4 border-red-500 border-y border-y-gray-200 group">
                  <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h5>

                    <span
                      class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                  </p>
                </details>
            
                <details class="p-6 border-l-4 border-red-500 border-y border-y-gray-200 group">
                  <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h5>

                    <span
                      class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                  </p>
                </details>
                <details class="p-6 border-l-4 border-red-500 border-y border-y-gray-200 group">
                  <summary class="flex items-center justify-between cursor-pointer">
                    <h5 class="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h5>

                    <span
                      class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p class="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                  </p>
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
                    <div className="font-bold leading-snug tracking-tight mb-1">Project 2 : Bank Accounts management System (3 Sessions)</div>
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
