import React from 'react';
import fsr from '../images/logo/fsr1.png';
import souissi from '../images/logo/souissi1.png';
import lions from '../images/logo/lions1.png';
import iscae from '../images/logo/iscae1.png';
import heropic from '../images/heropic1.png';
import { Link } from 'react-router-dom';
export default function HeroHome() { 
      return ( 
        <section className='relative max-w-6xl mx-auto px-5 sm:px-6'>
                <div class="grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 
                    pt-6 pb-2 md:pt-8 ">
                    {/* Titles */}
                    <div class=" md:order-last  
                    flex flex-col justify-center items-center flex-shrink-0
                    " dir='rtl'>
                        <div className='text-center lg:text-right  self-start p-4'>
                            <h2 class="text-3xl font-bold sm:text-4xl">تعلم بدون حدود </h2>

                            <p class="mt-4 text-gray-600 text-lg">
                            طور مهاراتك في مجالات البرمجة والتصميم عن طريق تدريبات 100٪ تطبيقية ومتابعة شخصية مع المدرب. 
                            </p>
                            <Link to="/Training"
                                className="btn text-white bg-red-primary
                                
                                w-full my-6 sm:w-auto sm:mb-0"
                            >
                                بغيت نتعلم
                            </Link>
                        </div>
                    </div>

                    {/* Picture */}
                    <div
                        class="relative h-80 overflow-hidden rounded-lg my-auto
                        hidden md:block 
                        "
                    >
                        <img
                        class="absolute inset-0 h-full mx-auto min-w-fit"
                        src={heropic}
                        alt="woman smilling"
                        />
                    </div>

                </div>

                    <div className='  p-4 w-full'>
                            <h1 className='h3 text-center text-relaxed mb-6'>وضعوا ثقتهم بنا</h1>
                            {/* Items */}
                            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4">
                                
                                {/* Item */}
                                <div className="flex items-center justify-center py-2 md:col-auto">
                                <img
                                    class="object-cover"
                                    alt="logo 1" 
                                    src={fsr}
                                    width="150"
                                />
                                </div>
                                {/* Item */}
                                <div className="flex items-center justify-center py-2 md:col-auto">
                                <img
                                    class="object-cover "
                                    alt="logo 1" 
                                    src={lions}
                                    width="150"
                                />
                                </div>
                                {/* Item */}
                                <div className="flex items-center justify-center py-2 md:col-auto">
                                <img
                                    class="object-cover"
                                    alt="logo 1" 
                                    src={souissi}
                                    width="150"
                                />
                                </div>
                                {/* Item */}
                                <div className="flex items-center justify-center py-2 md:col-auto">
                                <img
                                    class="object-cover"
                                    alt="logo 1" 
                                    src={iscae}
                                    width="150"
                                />
                                </div>
                            </div>
                    </div>
        </section>

  );
}







