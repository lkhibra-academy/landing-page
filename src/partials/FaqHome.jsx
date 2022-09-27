import FaqBlock from '../partials/FaqBlock';

export default function FeqHome() { 
    return ( 
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-6 md:py-8">
              <div className="md:gap-6">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
                  
                  <div className=" mb-8">
                    <h3 className="h3 mb-3 flex justify-between"><span>FAQ</span><span className="text-right">أسئلة متكررة</span></h3>
                  </div>
                  <div className="space-y-4">
                    
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
                    qst=" خطوات باش نتسجل فالتدريب ؟ " 
                    rpns1="من مور ماكتعمر الإستمارة"
                    rpns2=" كانسيفطوا ليك RIB فين تقدر تخلص"                    
                    
                    />
                    <FaqBlock 
                    qst=" خطوات باش نتسجل فالتدريب ؟ " 
                    rpns1="من مور ماكتعمر الإستمارة"
                    rpns2=" كانسيفطوا ليك RIB فين تقدر تخلص"                    
                    
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>

)
}