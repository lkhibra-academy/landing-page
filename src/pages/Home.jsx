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
        <section class="text-white bg-gray-900">
          <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div>
              <h2 class="text-3xl font-bold sm:text-4xl text-center">What makes us special</h2>
            </div>

            <div
              class="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
            >
              <div class="flex items-start">
                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div class="ml-4">
                  <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div class="ml-4">
                  <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div class="ml-4">
                  <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p class="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                    cumque tempore est ab possimus quisquam reiciendis tempora animi!
                    Quaerat, saepe?
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

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