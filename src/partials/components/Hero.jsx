import React, {useState} from 'react';
import fsr from '../../images/logo/fsr1.png';
import souissi from '../../images/logo/souissi1.png';
import lions from '../../images/logo/lions1.png';
import iscae from '../../images/logo/iscae1.png';
import heropic from '../../images/heropic1.png';
import Modal from '../../utils/Modal';
import LeadForm from '../components/LeadForm';

export default function Hero() { 
    const [videoModalOpen, setVideoModalOpen] = useState(false);

      return ( 
        <section className='relative max-w-6xl mx-auto px-5 sm:px-6'>
                <div class="grid grid-cols-1 gap-1 lg:gap-16 md:grid-cols-2 
                    pt-4 md:pb-2 pb-0 md:pt-8 ">
                    {/* Picture */}
                    {/* <div
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
                    </div> */}
                    {/* Video */}
                    <div
                        class="relative h-80 overflow-hidden rounded-lg my-auto
                             bg-green-400  max-h-56 md:max-h-full
                        "
                        //   width="560"
                        //  height="315"
                        // hidden md:block  
                    >
                    {/* <iframe  src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe> */}
                    <iframe className="absolute w-full h-full bg-yellow-300"   src="https://www.youtube-nocookie.com/embed/vDHKoTyKLnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div> 
                    {/* Titles */}
                    <div class=" md:order-last  
                    flex flex-col justify-center items-center flex-shrink-0
                    " dir='rtl'>
                        <div className='text-center lg:text-right self-start p-4 '>
                            <h2 class="text-3xl font-bold sm:text-4xl">تعلم البرمجة في 3 أشهر فقط</h2>

                            <p class="mt-4 text-gray-600 text-lg">
                            اختصر الوقت وتعلم جميع أساسيات البرمجة بالبايثون عن طريق خمس مشاريع تطبيقية، في تلاث أشهر فقط واحصل على شهادة معتمدة من أجل فتح فرص جديدة.                            </p>
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


                </div>

        </section>

  );
}







