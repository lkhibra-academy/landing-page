import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import TestimonyCard from './TestimonyCard';

export default function Testimonials() {
    
      return (
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12  ">
            <div dir='rtl' className="w-full mx-auto text-center">
                <h1 className='h2 mb-8'>Testimonials</h1>
            </div>
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    autoplay={{delay:5000}}
                    loop={'true'}
                    // className={'bg-cyan-400 mb-4'}
                    breakpoints= {{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 5,
                            
                        },
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 7,
                            
                        },
                        620: {
                            slidesPerView: 1.7,
                            spaceBetween: 10,
                            
                        },
                        920: {
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                            
                        }
                    }}
                >

                <SwiperSlide>
                    <TestimonyCard name={"mehdi"} 
                    status={"CEO of Shipping Company"} pic={"https://www.hyperui.dev/photos/man-5.jpeg"}
                    quote={"Lorem ipsum dolor sit ae repellat, commodi in esse quisquam."}
                    />
                    
                </SwiperSlide>

                <SwiperSlide>
                <TestimonyCard name={"simo"} 
                    status={"CEO of Shipping Company"} pic={"https://www.hyperui.dev/photos/man-3.jpeg"}
                    quote={"Lorem ipsum dolor sit s sit amet itaque evenietluta perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse quisquam."}
                    />
                </SwiperSlide>

                <SwiperSlide>
                <TestimonyCard name={"rachid"} 
                    status={"CEO of Shipping Company"} pic={"https://www.hyperui.dev/photos/man-4.jpeg"}
                    quote={"Lorem ipsum dolor officiis sit amet itaque eveniet accusantium corporis tempora, soluta perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse quisquam."}
                    />
                </SwiperSlide>

                <SwiperSlide>
                <TestimonyCard name={"abedsellam"} 
                    status={"CEO of Shipping Company"} pic={"https://www.hyperui.dev/photos/man-2.jpeg"}
                    quote={"Lorem ipsum drspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse quisquam."}
                    />
                </SwiperSlide>

                <SwiperSlide>
                <TestimonyCard name={"hamid"} 
                    status={"CEO of Shipping Company"} pic={"https://www.hyperui.dev/photos/man-1.jpeg"}
                    quote={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda officiis sit amet itaque eveniet accusantium corporis tempora, soluta perspiciatis rerum, ratione animi nemo inventore repellat, commodi in esse quisquam."}
                    />
                </SwiperSlide>

            </Swiper>
        </div>
  );
}

