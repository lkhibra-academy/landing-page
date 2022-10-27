import cert from '../../images/certif.svg'
import Checkout from './Checkout'

const Cta = () => (
  //       <div className="border-b-2 border-b-gray-200">
  // <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
  //<div className="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8"> 

  <div className="flex justify-center items-center">
    <div dir="rtl" className="max-w-6xl px-4 sm:px-6 lg:px-8 sm:grid sm:grid-cols-2 ">

      <div className="p-6 md:p-12 lg:px-auto lg:py-auto">
        <div className="max-w-xl mx-auto text-center sm:text-right ">
          <Checkout />
          {/* <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-2">
            شنو مزال كاتسنى ؟
          </h2>

          <p dir="rtl" className="text-lg text-gray-700 md:mt-4 md:block">تدريب مصاوب باش يبدا معاك من الأساسيات حتال مستوى متقدم فالبرمجة، خاصك غير رغبة فالتعلم وصافي</p>

          <div dir="rtl" className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block px-12 py-3 text-lg font-semibold text-white transition rounded bg-red-light hover:bg-white hover:text-red-primary hover:border-red-primary hover:border-2 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              بغيت نبدا
            </a>
          </div> */}
        </div>
      </div>

      <img alt="offer"
        src={cert}
        className="w-full h-full p-4 max-h-96" />
    </div>
  </div>
)

export default Cta