import React from "react";
import Header from "../partials/Header";

function Termsofuse() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">
              {/* Section header */}
              <div className="text-center pb-12 md:pb-16 ">
                <h1
                  className="text-4xl md:text-5xl font-extrabold leading-tighter mb-6 md:mb-10"
                  data-aos="zoom-y-out"
                >
                  شروط الاستخدام
                </h1>
                <p dir="rtl">
                  شروط الاسخدام لأي زائر يدخل هذا الموقع :<br />
                  <br />
                  مقدمة: المهدي بن النية هو صاحب هذا الموقع و هو من يديره مع فريق عمله فقط , و بالتالي فان استخدامك له يعني موافقتك بشكل كامل على الشروط الأحكام التالية الخاصة به , لهذا فإننا نحب دائماً ان تقرأ هذه الصفحه لتعرف الشروط التي يجب ان تتقيدها لتتعامل مع هذا الموقع بشكل لا يخالف اي من سياساته.
                  <br />
                  <br />
                  سياسة الخصوصيه : لخبرة دوت ما يحترم سياسة الخصوصيه لديك , و لك كامل التحكم بمعلوماتك و لن يتم تجميعها الا باذنك و برغبتك انت طبعاً , و قد قمنا بعمل صفحه كامله تعرف فيها سياسة الخصوصيه الخاصه بهذا الموقع من خلال الضغط على هذا الرابط من هنا.
                  <br />
                  <br />
                  الملكيه الفكريه : المهدي بن النية هو وحده من يملك محتوى هذا الموقع بالكامل , من فيديوهات و دورات و نص و كورسات … الخ , كل ماتراه في هذا الموقع من جهده الخاص هو و فريق عمله.
                  <br />
                  العلامات التجاريه : لخبرة أكاديمي لا تقبل وجود علامات تجاريه هنا على هذا الموقع , هذا يضر بمصلحة الزائر .. و لا يجوز لك عمل اي عمليه تهدف الى تسويق علامه تجاريه معينه , الا طبعا اذا استأذنت من صاحب الموقع و وافق هو على ذلك.
                  <br /><br />
                  لأي استفسار حول هذه الشروط , يرجى ارسال ايميل الى
                  <br /><a className="text-blue-600 hover:underline" href="mailto:contact@lkhibra.ma">contact@lkhibra.ma</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Termsofuse;
