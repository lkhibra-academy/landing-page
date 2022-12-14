import React from 'react';

export default function Whoweare() {
  return (
      <section className="relative ">
          <div className=" flex flex-col items-center max-w-6xl mx-auto px-5 sm:px-6 py-8 ">
              <div className="flex flex-col w-full prose text-left max-w-max lg:max-w-2xl ">
                  <div dir='rtl' className="w-full mx-auto text-center">
                      <h1 className='h2 mb-4'>من نحن ؟</h1>
                      <p className='text-xl font-normal'>أكاديمية اونلاين متخصصة في التدريبات عن بعد في مجالات البرمجة والتصميم. <br />
نقوم بتدريب الشباب على أحدث التقنيات ووظائف المستقبل لإعدادهم للعالم المهني وتحسين فرص توظيفهم.
ونوفر حتى المواكبة أثناء التعلم من أجل ضمان جودة عالية في الحصص، 
<br />
جميع تدريباتنا مواكبة لسوق الشغل وتتضمن مشاريع تطبيقية.</p>
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

