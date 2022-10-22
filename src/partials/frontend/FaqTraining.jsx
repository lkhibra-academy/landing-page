import FaqBlock from '../components/FaqBlock';

export default function FaqTraining() { 
    return ( 
    //       <div className="border-b-2 border-b-gray-200">
    // <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
    //<div className="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8"> 
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-6 md:py-8">
              <div className="md:gap-6">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
                  <div className=" mb-8">
                    <h3 className="h3 mb-3 flex justify-between"><span>FAQ</span><span className="text-right">أسئلة متكررة</span></h3>
                  </div>
                  <div className="space-y-4">
                    
                    <FaqBlock 
                    qst=" وقتاش ايبدا تدريب ؟ " 
                    rpns1="الأربعاء 9 نونبر 
                     (Novembre)"                    
                    />
                    <FaqBlock 
                    qst="توقيت الحصص ؟ " 
                    rpns1=" كل أربعاء 20h"                 
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
                    <FaqBlock 
                    qst=" كيف استطيع انتقال الى عرض 3 أشهر ؟" 
                    rpns1="تستطيع الاستافدة من العرض الأساسي لشهر الأول "
                    rpns2=" موراها تخلص شهرين لي بقات ب 490 درهم"             
                    />
                    <FaqBlock 
                    qst="واش 789 درهم كل شهر ؟" 
                    rpns1="لا، 789 هو ثمن تلات أشهر كاملة "             
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>

)
}