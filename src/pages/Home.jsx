import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Learn from '../partials/Learn';
import Need from '../partials/Need';
import More from '../partials/More';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Learn />
        <FeaturesBlocks />
        <Need />
        <More />
        

        <FeaturesHome />
        <aside class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
          <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="max-w-xl mx-auto text-center sm:text-left">
              <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p class="hidden text-gray-500 md:mt-4 md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                duis.
              </p>

              <div class="mt-4 md:mt-8">
                <a
                  href="#"
                  class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <img
            alt="#"
            src="https://www.hyperui.dev/photos/women-2.jpeg"
            class="object-cover w-full h-56 sm:h-full"
          />
        </aside>

        <section className="relative">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20">
              <div className="md:gap-6">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                    <h3 className="h3 mb-3"><span>FAQ</span></h3>
                  </div>
                  <div class="space-y-4">
                    <details class="group" open>
                      <summary
                        class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                      >
                        <h5 class="font-medium text-gray-900">
                          Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h5>

                        <svg
                          class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>

                      <p class="px-4 mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>

                    <details class="group">
                      <summary
                        class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                      >
                        <h5 class="font-medium text-gray-900">
                          Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h5>

                        <svg
                          class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>

                      <p class="px-4 mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;