import React from 'react';
import fsr from '../../images/logo/fsr1.png';
import souissi from '../../images/logo/souissi1.png';
import lions from '../../images/logo/lions1.png';
import iscae from '../../images/logo/iscae1.png';
import heropic from '../../images/heropic1.png';
export default function Heroold() { 
      return ( 
        <section className='relative max-w-6xl mx-auto px-5 sm:px-6'>
                <div class="grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 
                    pt-6 pb-2 md:pt-8
                ">
                    {/* Titles */}
                    <div class=" md:order-last  
                    flex flex-col justify-center items-center flex-shrink-0
                    " dir='rtl'>
                        <div className='text-center lg:text-right self-start p-4 '>
                            <h2 class="text-3xl font-bold sm:text-4xl"> تعلم تطوير الويب في 3 أشهر فقط</h2>

                            <p class="mt-4 text-gray-600 text-lg">
                            اختصر الوقت وتعلم جميع أساسيات تطوير الويب عن طريق خمس مشاريع تطبيقية، في تلاث أشهر فقط واحصل على شهادة معتمدة من أجل فتح فرص جديدة.                            </p>
                            <div className='sm:max-w-xs mx-auto md:mx-0 max-w-none sm:flex sm:justify-start space-y-4 py-4 sm:space-y-0 sm:py-0'>
                                <div>
                                <a href="#checkout" 
                                    className="btn text-white bg-red-primary w-full sm:my-6 sm:w-auto sm:mb-0"
                                >                                بغيت نتعلم</a>
                                </div> 
                                <div> 
                                    <a className="btn text-white bg-gray-900 w-full sm:my-6 sm:mb-0 sm:w-auto sm:mr-4" href="#content">محتوى التدريب</a>
                                </div> 
                            </div>
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

                    <div className='p-4 w-full'>
                            <p className='text-2xl font-bold leading-tight md:text-3xl text-center mb-6 md:mt-1 text-black-primary'>وضعوا ثقتهم بنا</p>
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







