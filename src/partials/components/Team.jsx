import React, { useState } from "react";

export default function Team() {

  return (
    <section class=" ">
        <div class="container px-6 py-10 mx-auto relative max-w-6xl">
            <div class="grid grid-cols-1 gap-4 mt-4 xl:mt-12 md:grid-cols-2 xl:grid-cols-2">

            <h2 className="font-bold leading-tight text-2xl md:text-3xl">OUR TRAINERS </h2>
                <div class="px-5 py-6 rounded-xl border shadow-sm group">
                    <div class="flex flex-row">
                        <img class="flex-shrink-0 object-cover md:w-20 md:h-20 h-16 w-16 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
                        </img>
                        <div class="mx-4 mt-0">
                            <p class="text-lg font-semibold text-gray-700 capitalize md:text-xl ">TAOUMI Yassine</p>
                            <p class="mt-1 text-gray-500 capitalize">Web Developer</p>
                        </div>
                    </div>

                    <p dir='rtl' class="mt-4 text-gray-500 capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.
                    </p>

                    <div dir='rtl' class="flex mt-4 justify-end md:justify-end">
                        <a href="#" class="mx-2 text-gray-600" aria-label="Reddit">
                            <i className="fa-brands fa-linkedin w-6 p-1 text-center text-2xl"></i>
                        </a>
                        <a href="#" class="mx-2 text-gray-600" aria-label="Reddit">
                            <i className="fa-brands fa-instagram w-6 p-1 text-center text-2xl"></i>
                        </a>
                        <a href="#" class="mx-2 text-gray-600" aria-label="Reddit">
                            <i className="fa-brands fa-github w-6 p-1 text-center text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}