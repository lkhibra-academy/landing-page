import FaqBlock from '../components/FaqBlock';

export default function Faq() { 
    return ( 
    //       <div className="border-b-2 border-b-gray-200">
    // <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
    //<div className="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8"> 
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-8 md:py-8">
              <div className="md:gap-4">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
                    <p className="px-2 mb-4 font-bold leading-tight text-2xl md:text-3xl text-right">أسئلة متكررة</p>
                  <div className="space-y-2">
                    <FaqBlock 
                    qst=" وقتاش ايبدا تدريب ؟ " 
                    rpns1=" الثلاثاء 8 أغسطس août"                    
                    />
                    <FaqBlock 
                    qst=" توقيت الحصص ؟ " 
                    rpns1="الحصص التقنية كل ثلاثاء مع 21h "
                    rpns2=" حصص Soft Skills كل سبت مع 21h "             
                    />
                    <FaqBlock 
                    qst=" خطوات باش نتسجل فالتدريب ؟ " 
                    rpns1="من مور ماكتعمر الإستمارة"
                    rpns2=" كانسيفطوا ليك RIB فين تقدر تخلص"                    
                    rpns3=" مني تخلص كاتصيفط لينا إثبات الدفع"
                    rpns4="موراها كاندخلوك فغروب
                    واتساب مع المجموعة ديالك
                    وكاتبدا الحصص ديالك"
                    />
                    <FaqBlock 
                    qst=" طرق الدفع المتاحة ؟ " 
                    rpns1="عن طريق تحويل بنكي (virement bancaire) "             
                    />
                    
                    {/* <FaqBlock 
                    qst="توقيت الحصص ؟ " 
                    rpns1=" كل خميس 20h"                 
                    /> */}
                    
                    {/* <FaqBlock 
                    qst="واش 1050 درهم كل شهر ؟" 
                    rpns1="لا، 1050 هو ثمن تلات أشهر كاملة "             
                    /> */}
                    {/* <FaqBlock 
                    qst=" هل تدريب عن بعد ؟ " 
                    rpns1="نعم تدريب 100٪ اون لاين، تقدر تقرا منين ما كنتي فالمغرب 
                    "
                    rpns2="   "             
                    /> */}

                    <FaqBlock 
                    qst=" واش خاص نكون عارف شي حاجة من قبل ؟ " 
                    rpns1="لا، المدربين ديالنا كايبداو معاك من صفر   "
                    rpns2="وخا مايكون عندك حتى فكرة من قبل على البرمجة"             
                    />
                    
                    <FaqBlock 
                    qst=" واش خاصني نجي لعندكم باش نتعلم ؟  " 
                    rpns1=" لا، جميع تدريباتنا عن بعد"
                    rpns2=" تقدر تقرا من أي بلاصة كنتي فالمغرب "             
                    />
                    {/* <FaqBlock 
                    qst=" " 
                    rpns1=" "
                    rpns2="   "             
                    /> */}
                  </div>

                </div>
              </div>
            </div>
          </div>

)
}