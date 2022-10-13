const Need = () => (
  <section className="relative shadow-lkhibra">

    {/* Section background (needs .relative class on parent and next sibling elements) */}

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
      <div className="">

        {/* Section header */}
        <div className="max-w-3xl mx-auto py-10 md:py-18">
            <h2 className="font-bold text-3xl md:text-4xl mb-10 text-center">شنو خاصك باش تعلم ؟</h2>
            {/* <div className=" px-7 ">
              <div className="h1 self-center">فقط</div> */}
              <ul dir="rtl" className=" text-2xl text-bold text-right leading-normal 
              max-w-sm mx-auto grid lg:gap-20 gap-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none
              sm:text-3xl w-fit
              ">
                {/* flex flex-col justify-evenly justify-items-center md:justify-between md:flex-row 
                grid md:grid-cols-3	grid-cols-1*/}
                <li>  - 
                رغبة في التعلم

                </li>
                <li>  - حاسوب</li>
                <li>  - أنترنيت</li>
              </ul>
            {/* </div> */}
            
        </div>
      </div>
    </div>
  </section>
)

export default Need
