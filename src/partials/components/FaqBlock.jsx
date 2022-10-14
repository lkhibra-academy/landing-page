import React, { useState } from 'react';

export default function FaqBlock({qst,rpns1,rpns2,rpns3,rpns4}) { 

return ( 
    <details dir="rtl" className="group rounded-lg border border-gray-200 shadow-md">
                      <summary
                        className="flex items-center justify-between p-4 rounded-lg cursor-pointer "
                      >
                        <h5 className="font-bold  text-gray-900">
                        {qst} 
                        </h5>

                        <svg
                          className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>

                      <p className="px-4 my-3 leading-relaxed text-gray-800 grid grid-cols-1 ">
                      <span>{rpns1} </span> 
                      <span>{rpns2} </span> 
                      <span>{rpns3} </span> 
                      <span>{rpns4} </span> 
                      </p>
    </details>
    )
}