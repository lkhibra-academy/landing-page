import { useMatomo } from '@datapunt/matomo-tracker-react'
import axios from 'axios'
import React, { useRef, useState } from 'react'
import Header from '../partials/Header'

function Checkout() {
    const { trackEvent } = useMatomo()
    const [ok, setOk] = useState(false)
    /** @type {React.MutableRefObject<HTMLInputElement>} */
    const fullName = useRef()
    /** @type {React.MutableRefObject<HTMLInputElement>} */
    const email = useRef()
    /** @type {React.MutableRefObject<HTMLInputElement>} */
    const phone = useRef()
    function clickHandler(e) {
        e.preventDefault()
        axios.post(
            'https://lkhibra.alwaysdata.net/landing.php'
            ,{
                name: fullName.current.value,
                email: email.current.value,
                phone: phone.current.value
            }
        ).then((rep) => {
            if(rep.data.ok){
                setOk(true)
            }else{
                alert(rep.data.msg)
            }
        })
    }
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

        <section>
            <h1 className="sr-only">Checkout</h1>
            <div className="relative mx-auto max-w-screen-2xl">
                <div className={!ok ? 'grid grid-cols-1 md:grid-cols-2' : 'flex justify-center'}>
                    <div className="pt-20 bg-white md:py-24">
                        {!ok?
                            <div className="max-w-lg px-4 mx-auto lg:px-8 p-8 rounded-lg border border-gray-200 shadow-md">
                                <div className="flex justify-between" dir="rtl">
                                    <h1 className="ml-4 font-bold text-3xl">تدريب الخبرة فالبرمجة</h1>
                                    <p className="text-2xl font-medium tracking-tight">789dh</p>
                                </div>
                                <div className="mt-4">
                                    <div className="flow-root">
                                        <ul className="-my-4 divide-y divide-gray-200" dir="rtl">
                                            <li className="flex items-center justify-between py-4">
                                                <div className="flex items-start">
                                                    <div className="ml-4">
                                                        <ul className="mt-1 space-y-1 text-xl text-black">
                                                            <li>المدة : 12 أسبوع </li>
                                                            <li>حصص عن بعد (google meet) <br/> كل تلاثاء ابتداءا من 16 غشت </li>
                                                            <li>شنو غادي تعلم : 
                                                                <ul className="list-disc list-inside">
                                                                    <li>الخوارزميات</li>
                                                                    <li>البرمجة بالبايثون</li>
                                                                    <li>هياكل البيانات</li>
                                                                    <li>5 مشاريع برمجية</li>
                                                                </ul>    
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <h1 className="ml-4 font-bold text-3xl p-4" dir="rtl">مرحبا بك في تدريب الخبرة فالبرمجة</h1>
                                <div className="max-w-lg px-4 mx-auto lg:px-8 p-8 rounded-lg border border-gray-200 shadow-md">
                                    <div className="flex justify-between border-b border-b-gray-200" dir="rtl">
                                        <h2 className="ml-4 font-bold text-xl">طريقة الدفع</h2>
                                        <br />&nbsp;
                                    </div>
                                    <div className="mt-4">
                                        <div className="flow-root">
                                            <ul className="-my-4 divide-y divide-gray-200" dir="rtl">
                                                <li className="flex items-center justify-between py-4">
                                                    <div className="flex items-start">
                                                        <div className="ml-4">
                                                            <p>
                                                            عن طريق تحويل بنكي (virement bancaire) <br />
                                                            </p>
                                                            <p className="text-left">
                                                                Bank : CIH Bank <br />
                                                                Nom : Benennia El Mehdi <br />
                                                                RIB : 9383828282828282 <br />
                                                            </p>
                                                            <p>
                                                            المرجو إرسال إثبات الدفع إلينا، بالإضافة إلى أسمك وبريدك الإلكتروني
                                                            على الواتساب <a className="text-blue-600 hover:underline" href="https://wa.me/">066666666</a> <br />
                                                            او العنوان <a className="text-blue-600 hover:underline" href="mailto:contact@lkhibra.ma">contact@lkhibra.ma</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="py-12 bg-white md:py-24">
                    {!ok?
                        <div className="max-w-lg px-4 mx-auto lg:px-8">
                            <form className="grid grid-cols-6 gap-4">
                                <div className="col-span-6">
                                    <label className="block mb-1 text-sm text-gray-600" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input ref={fullName} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="text" id="frst_name" />
                                </div>
                                <div className="col-span-6">
                                    <label className="block mb-1 text-sm text-gray-600" htmlFor="email">
                                        Email
                                    </label>
                                    <input ref={email} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="email" id="email" />
                                </div>
                                <div className="col-span-6">
                                    <label className="block mb-1 text-sm text-gray-600" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input  ref={phone} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="tel" id="phone" />
                                </div>
                                <div className="col-span-6">
                                    <button onClick={clickHandler} className="rounded-lg bg-black text-sm p-2.5 text-white w-full block" type="submit">
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                        :
                        null
                    }
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Checkout