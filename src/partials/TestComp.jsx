import React from 'react';

export default function TestComp() {
  return (
      <section className="relative mx-auto px-4 sm:px-6 bg-red-primary">
          <div class="flex flex-row justify-around items-center max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8  bg-white rounded-lg text-gray-900">
                  <div class="flex flex-col justify-center items-center">
                      <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                      <dd class="font-light text-gray-500 dark:text-gray-400">Developers</dd>
                  </div>
                  <div class="flex flex-col justify-center items-center">
                      <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                      <dd class="font-light text-gray-500 dark:text-gray-400">Public repositories</dd>
                  </div>
                  <div class="flex flex-col justify-center items-center">
                      <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                      <dd class="font-light text-gray-500 dark:text-gray-400">Open source projects</dd>
                  </div>
        </div>
      </section>
    

  );
}

