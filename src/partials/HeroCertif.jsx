import React from 'react';
import { Link } from 'react-router-dom';
import heropic from '../images/heropic1.png';

export default function HeroCertif() { 
      return ( 
        <section className='relative max-w-6xl mx-auto px-5 sm:px-6'>
                <div class="grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 
                    pt-6 pb-2 md:pt-8 
                ">
                    {/* Titles */}
                    <div class=" md:order-last  
                    flex flex-col justify-center items-center flex-shrink-0
                    " dir='rtl'>
                        <div className='text-center lg:text-right  self-start p-4'>
                            <h2 class="text-3xl font-bold sm:text-4xl">تعلم البرمجة في 3 أشهر فقط</h2>

                            <p class="mt-4 text-gray-600 text-lg">hhhhhh certif
                            طور المهارات ديالك فمجال البرمجة عبر عدة تدريبات اونلاين من أجل فتح فرص جداد فحياتك.
                            </p>
                            <Link to='/Training'
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
        </section>

  );
}







