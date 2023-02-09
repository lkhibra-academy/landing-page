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
        <section className='relative max-w-6xl mx-auto px-2 sm:px-6 '>
                <div className="grid grid-cols-1 gap-1 lg:gap-16 md:grid-cols-2 
                    pt-4 md:pb-2 pb-0 md:pt-8 ">
                    {/* Picture */}
                    <div
                        className="relative h-80 overflow-hidden rounded-lg my-auto
                        max-h-56 md:max-h-full           
                        "
                        // hidden md:block 
                    >
                        <img
                        className="absolute inset-0 h-full mx-auto min-w-fit"
                        src={heropic}
                        alt="woman smilling"
                        />
                    </div>
                    {/* Video */}
                    {/* <div
                        className="relative h-80 overflow-hidden rounded-lg my-auto
                             bg-white  max-h-56 md:max-h-full
                        "
                        //   width="560"
                        //  height="315"
                        // hidden md:block  
                    >
                    <iframe className="absolute w-full h-full"   src="https://www.youtube-nocookie.com/embed/vDHKoTyKLnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>  */}
                    {/* Titles */}
                    <div className=" md:order-last  
                    flex flex-col justify-center items-center flex-shrink-0
                    " dir='rtl'>
                        <div className='sm:text-center md:text-right self-start p-4 '>
                            <h2 className="text-2xl font-bold sm:text-3xl">{content.title}
                            </h2>

                            <p className="mt-4 mb-1 text-gray-600 text-lg">
                            {content.subtitle}
                            </p>
                            <div className=' mx-auto max-w-none 
                            flex justify-around items-center flex-row 
                             pt-4 
                            '>
                                <a href="#offers" 
                                    className="btn text-white bg-red-primary w-full px-0 
                                    md:my-6  mb-0"
                                >                                
                                {content.cta1}</a>
                                    <a className="btn text-white bg-gray-900 w-full px-0
                                    md:my-6 mb-0 mr-4" href="#content">
                                       
                                        {content.cta2}
                                        </a>
                            </div>
                        </div>
                       
                    </div>


                </div>

        </section>

  );
}







