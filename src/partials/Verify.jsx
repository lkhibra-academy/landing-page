import React from 'react';

export default function Verify() {
  return (
      <section className="relative mt-4">
          <div className=" flex flex-col items-center max-w-6xl mx-auto px-5 sm:px-6 py-8 ">
              <div className="flex flex-col w-full prose text-left max-w-max lg:max-w-2xl ">
                  <div dir='rtl' className="w-full text-center ">
                      <h1 className='h2 mb-6'>كيف يتم التحقق من الشهادة ؟</h1>
                      <img 
                        class="w-full h-full rounded-lg max-w-xl mx-auto m-2"
                        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                        alt="" 
                       />
                      </div>
              </div>
          </div>
          {/* <div className=" items-center w-full px-5">
              <div className="flex flex-wrap justify-center w-full mx-auto prose max-w-max lg:max-w-3xl">
                  <div className="relative justify-center lg:px-4">
                      <div className="lg:grid lg:grid-cols-2">
                          <div className="p-8">
                              <h1 className="h1">Short length headline.</h1>
                              <p>You're about to launch soon and must be 100% focused on your product. Don't loose precious days designing, coding the landing page and testing .</p>
                          </div>
                          <div className="p-8">
                              <h1 className="h1">Short length headline.</h1>
                              <p>You're about to launch soon and must be 100% focused on your product. Don't loose precious days designing, coding the landing page and testing .</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div> */}
      </section>
  );
}

