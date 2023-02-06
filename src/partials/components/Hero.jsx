import React, {useState} from 'react';
import heropic from '../../images/heropic1.png';

export default function Hero(props) { 
    let content = {
        Arabic: {
            title:"تدريب الخبرة فالبرمجة : احصل على المهارات اللازمة لتصبح مبرمج محترف ",
            subtitle:" في ثلات اشهر فقط سوف تتعلم جميع أساسيات البرمجة بالبايثون عن طريق مشاريع تطبيقية بالإضافة إلى اكتساب جميع المهارات لازمة لتصبح مبرمج بايثون والحصول على شهادة معتمدة من أجل فتح فرص العمل.",
            cta1:"بغيت نتعلم",
            cta2:" محتوى التدريب",

        },
        French: {

        }
      };
      props.language === "Arabic"
        ? (content = content.Arabic)
        : (content = content.French);
      return ( 
        <section className='relative max-w-6xl mx-auto px-5 sm:px-6'>
                <div class="grid grid-cols-1 gap-1 lg:gap-16 md:grid-cols-2 
                    pt-4 md:pb-2 pb-0 md:pt-8 ">
                    {/* Picture */}
                    <div
                        class="relative h-80 overflow-hidden rounded-lg my-auto
                        max-h-56 md:max-h-full           
                        "
                        // hidden md:block 
                    >
                        <img
                        class="absolute inset-0 h-full mx-auto min-w-fit"
                        src={heropic}
                        alt="woman smilling"
                        />
                    </div>
                    {/* Video */}
                    {/* <div
                        class="relative h-80 overflow-hidden rounded-lg my-auto
                             bg-white  max-h-56 md:max-h-full
                        "
                        //   width="560"
                        //  height="315"
                        // hidden md:block  
                    >
                    <iframe className="absolute w-full h-full"   src="https://www.youtube-nocookie.com/embed/vDHKoTyKLnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>  */}
                    {/* Titles */}
                    <div class=" md:order-last  
                    flex flex-col justify-center items-center flex-shrink-0
                    " dir='rtl'>
                        <div className='sm:text-center md:text-right self-start p-4 '>
                            <h2 class="text-2xl font-bold sm:text-4xl">{content.title}
                            </h2>

                            <p class="mt-4 mb-1 text-gray-600 text-lg">
                            {content.subtitle}
                            </p>
                            <div className='sm:max-w-xs mx-auto md:mx-0 max-w-none flex-row 
                            sm:flex justify-start  sm:space-y-0 sm:py-0
                            space-y-4 py-4'>
                                <div>
                                <a href="#checkout" 
                                    className="btn text-white bg-red-primary w-full sm:my-6 sm:w-auto sm:mb-0"
                                >                                
                                {content.cta1}</a>
                                </div> 
                                <div> 
                                    <a className="btn text-white bg-gray-900 w-full sm:my-6 sm:mb-0 sm:w-auto sm:mr-4" href="#content">
                                       
                                        {content.cta2}
                                        </a>
                                </div> 
                            </div>
                        </div>
                       
                    </div>


                </div>

        </section>

  );
}







