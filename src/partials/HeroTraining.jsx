import React from 'react';

export default function HeroTraining() { 
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

                            <p class="mt-4 text-gray-600 text-lg">
                            طور المهارات ديالك فمجال البرمجة عبر عدة تدريبات اونلاين من أجل فتح فرص جداد فحياتك.
                            </p>
                            <a href="#checkout" 
                                className="btn text-white bg-red-primary
                                
                                w-full my-6 sm:w-auto sm:mb-0"
                            >
                                بغيت نتعلم
                            </a>
                        </div>
                       
                    </div>

                    {/* Picture */}
                    <div
                        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full my-auto
                        hidden md:block
                        "
                    >
                        <img
                        class="absolute inset-0 object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Man using a computer"
                        />
                    </div>

                </div>
        </section>

  );
}







