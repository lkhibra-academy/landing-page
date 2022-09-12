import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function Testimonials() {
    
      return (
        <div class="max-w-6xl mx-auto px-5 sm:px-6 py-12  ">
            <div dir='rtl' className="w-full mx-auto text-center">
                <h1 className='h2 mb-8'>Testimonials</h1>
            </div>
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    autoplay={{delay:8000}}
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
                    <div>
                    <blockquote class="px-3 py-4 bg-white">
                        <div class="flex items-center">
                        <img
                            src="https://www.hyperui.dev/photos/man-4.jpeg"
                            alt=""
                            class="object-cover w-16 h-16 rounded-full"
                        />

                        <div class="ml-4 text-sm">
                            <p class="font-medium">1</p>
                            <p class="mt-1">CEO of Shipping Company</p>
                        </div>
                        </div>

                        <p class="relative mt-4 text-gray-500">
                        <span class="text-xl">&ldquo;</span>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        assumenda officiis sit amet itaque eveniet accusantium corporis
                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                        repellat, commodi in esse quisquam.

                        <span class="text-xl">&rdquo;</span>
                        </p>
                    </blockquote>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="">
                    <blockquote class="px-3 py-4 bg-white">
                        <div class="flex items-center">
                        <img
                            src="https://www.hyperui.dev/photos/man-4.jpeg"
                            alt=""
                            class="object-cover w-16 h-16 rounded-full"
                        />

                        <div class="ml-4 text-sm">
                            <p class="font-medium">2</p>
                            <p class="mt-1">CEO of Shipping Company</p>
                        </div>
                        </div>

                        <p class="relative mt-4 text-gray-500">
                        <span class="text-xl">&ldquo;</span>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        assumenda officiis sit amet itaque eveniet accusantium corporis
                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                        repellat, commodi in esse quisquam.

                        <span class="text-xl">&rdquo;</span>
                        </p>
                    </blockquote>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="">
                    <blockquote class="px-3 py-4 bg-white">
                        <div class="flex items-center">
                        <img
                            src="https://www.hyperui.dev/photos/man-4.jpeg"
                            alt=""
                            class="object-cover w-16 h-16 rounded-full"
                        />

                        <div class="ml-4 text-sm">
                            <p class="font-medium">3</p>
                            <p class="mt-1">CEO of Shipping Company</p>
                        </div>
                        </div>

                        <p class="relative mt-4 text-gray-500">
                        <span class="text-xl">&ldquo;</span>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        assumenda officiis sit amet itaque eveniet accusantium corporis
                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                        repellat, commodi in esse quisquam.

                        <span class="text-xl">&rdquo;</span>
                        </p>
                    </blockquote>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="">
                    <blockquote class="px-3 py-4 bg-white">
                        <div class="flex items-center">
                        <img
                            src="https://www.hyperui.dev/photos/man-4.jpeg"
                            alt=""
                            class="object-cover w-16 h-16 rounded-full"
                        />

                        <div class="ml-4 text-sm">
                            <p class="font-medium">4</p>
                            <p class="mt-1">CEO of Shipping Company</p>
                        </div>
                        </div>

                        <p class="relative mt-4 text-gray-500">
                        <span class="text-xl">&ldquo;</span>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        assumenda officiis sit amet itaque eveniet accusantium corporis
                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                        repellat, commodi in esse quisquam.

                        <span class="text-xl">&rdquo;</span>
                        </p>
                    </blockquote>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="">
                    <blockquote class="px-3 py-4 bg-white">
                        <div class="flex items-center">
                        <img
                            src="https://www.hyperui.dev/photos/man-4.jpeg"
                            alt=""
                            class="object-cover w-16 h-16 rounded-full"
                        />

                        <div class="ml-4 text-sm">
                            <p class="font-medium">5</p>
                            <p class="mt-1">CEO of Shipping Company</p>
                        </div>
                        </div>

                        <p class="relative mt-4 text-gray-500">
                        <span class="text-xl">&ldquo;</span>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        assumenda officiis sit amet itaque eveniet accusantium corporis
                        tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                        repellat, commodi in esse quisquam.

                        <span class="text-xl">&rdquo;</span>
                        </p>
                    </blockquote>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
  );
}

