import React from 'react';
import Feat from './Feat';

function FeaturesBlocks() {
  return (
    <section className='relative max-w-6xl mx-auto px-5 sm:px-6 mb-4'>
        <div className="relative items-center w-fit mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div>
            <div className="relative lg:p-8 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 rounded-xl">
                
                {/* left card */}
                <div className="relative flex flex-col p-5 bg-white rounded-2xl">
                <div className="flex-1">
                    <h3 className="font-light text-base text-neutral-600">Freelancer</h3>
                    <p className="flex items-baseline text-neutral-600">
                    <span className="text-5xl font-bold tracking-tight">299dh</span>
                    <span className="ml-1 text-lg font-normal">/month</span>
                    </p>
                    <p className="mt-1 text-gray-500">The essentials to provide your best work for clients.</p>
                    {/* <!-- Feature list --> */}
                    <ul role="list" className="pt-3 mt-3 space-y-4 border-t">
                    <span className="text-base font-semibold text-neutral-600">What's included?</span>
                    <li className="flex">
                        <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <span className="ml-3 text-neutral-600">Up to 10 credit cards</span>
                    </li>
                    <li className="flex">
                        <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <span className="ml-3 text-neutral-600">Up to 1,000 credits</span>
                    </li>
                    <li className="flex">
                        <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <span className="ml-3 text-neutral-600">Tacky wallet</span>
                    </li>
                    <li className="flex">
                        <div className="inline-flex items-center w-6 h-6 bg-red-primary rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <span className="ml-3 text-neutral-600">Personal profile only</span>
                    </li>
                    </ul>
                </div>
                <div className="mt-4 rounded-lg">
                    {/* <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get Started </a> */}
                    <button className="rounded-lg text-lg font-normal p-2.5 text-red-primary bg-white w-full block text-center transition duration-500 ease-in-out transform border-2 border-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 " type="submit">
                    تسجيل
                    </button>
                </div>
                </div>

                {/* right card */}
                <div className="relative flex flex-col p-5 bg-red-primary rounded-2xl">
                <div className="relative flex-1">
                    <h3 className="font-light text-base text-white">Startup</h3>
                    <p className="flex items-baseline text-white">
                    <span className="text-5xl font-bold tracking-tight">789dh</span>
                    <span className="ml-1 text-lg font-normal"> 3 months</span>
                    </p>
                    <p className="text-white text-solitud mt-1">A plan that scales with your rapidly growing business.</p>
                    {/* <!-- Feature list --> */}
                    <ul role="list" className="pt-3 mt-3 space-y-4 border-t">
                    <span className="text-base font-semibold text-white">What's included?</span>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="ml-3 text-white">Up to 10 credit cards</span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="ml-3 text-white">Up to 10,000 credits</span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="ml-3 text-white">Less tacky wallet </span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="ml-3 text-white">Profile and portafolio</span>
                        </li>
                        <li className="flex">
                            <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            </div>
                            <span className="ml-3 text-white">Support</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-4 rounded-lg">
                    {/* <a href="/pricing" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get started </a> */}
                    <button className="rounded-lg bg-black text-lg font-normal p-2.5 text-red-primary bg-white w-full block" type="submit">
                    تسجيل
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
  );
}

export default FeaturesBlocks;



