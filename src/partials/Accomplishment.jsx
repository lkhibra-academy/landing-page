import React from 'react';


export default function Accomplishment() {
    
      return (
        //           flex justify-center items-center flex-row gap-12 bg-black-dark
        <div className='relative max-w-6xl mx-auto  px-5 sm:px-6 py-12'>
            <div class=" grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start ">
                <a href="" class="relative block p-6 border-t-4 border-red-primary rounded-sm shadow-xl text-center">
                    <h5 class="text-5xl font-bold">66+</h5>
                    <p class="mt-2 text-lg font-medium text-gray-500" dir='rtl'>
                    عدد تلاميذ                    </p>
                </a>
                <a href="" class="relative block p-6 border-t-4 border-red-primary rounded-sm shadow-xl text-center">
                    <h5 class="text-5xl font-bold">64+</h5>
                    <p class="mt-2 text-lg font-medium text-gray-500" dir='rtl'>
                    عدد ساعات التدريب                    </p>
                </a>
                <a href="" class="relative block p-6 border-t-4 border-red-primary rounded-sm shadow-xl text-center">
                    <h5 class="text-5xl font-bold">32+</h5>
                    <p class="mt-2 text-lg font-medium text-gray-500" dir='rtl'>
                    عدد الحصص                    </p>
                </a>
                
            </div>
        </div>
  );
}

