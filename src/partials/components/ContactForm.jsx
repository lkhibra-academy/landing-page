import axios from 'axios'
import Cleave from 'cleave.js/react'
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ma'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ContactForm() {
    // const [ok, setOk] = useState(false)
    let navigate = useNavigate();
    const [err, setErr] = useState(false)
    /** @type {React.MutableRefObject<HTMLInputElement>} */
    const fullName = useRef()
    /** @type {React.MutableRefObject<HTMLInputElement>} */
    const email = useRef()
    /** @type {React.MutableRefObject<HTMLFormElement>} */
    const form = useRef()
    /** @type {React.MutableRefObject<HTMLSelectElement>} */
    const offer = useRef()
    /** @type {React.MutableRefObject<HTMLSelectElement>} */
    const training = useRef()
    /** @type {React.MutableRefObject<HTMLSelectElement>} */
    const traffic = useRef()
    const [phone, setPhone] = useState('')
    // /** @type {React.MutableRefObject<HTMLInputElement>} */
    // const phone = useRef()
    function clickHandler(e) {
        e.preventDefault()
        if(form.current.reportValidity())
        axios.post(
            'https://lkhibra.alwaysdata.net/landing.php'
            ,{
                name: fullName.current.value,
                email: email.current.value,
                phone: phone,
                offer: offer.current.value,
                // training: training.current.value,
                traffic: traffic.current.value,
            }
        ).then((rep) => {
            if(rep.data.ok){
                fbq('track', 'Lead');
                // navigate('/ThankYou',{state:{price:offer.current.value}});
                navigate('/Checkout');
                
            }else{
                setErr(true)
            }
        }).catch(() => {
            setErr(true)
        })
    }
    return (
            <div className="max-w-lg p-4 mx-4 lg:px-8 rounded-lg border border-gray-200 shadow-md m-2 bg-white">
                <form ref={form} className="">
                    {/* <div className={`${err?'':'hidden'}  text-center p-[20px] bg-red-600 text-white w-full mb-[15px]`}>
                        An unexpected error occurred.
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="name">
                            <span>Full Name</span><span>الإسم الكامل</span>
                        </label>
                        <input ref={fullName} maxLength='30' className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="text" id="name" required/>
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="phone">
                            <span>Phone</span><span>الهاتف</span>
                        </label>
                        <Cleave onChange={ev => setPhone(ev.target.rawValue)} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" options={{phone: true, phoneRegionCode: 'MA'}} required />
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="email">
                            <span>Email</span><span>البريد الإلكتروني</span>
                        </label>
                        <input ref={email} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="email" id="email" required/>
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="email">
                            <span>Choose the offer</span><span>اختر العرض </span>
                        </label>
                        <select id="offer" ref={offer} className="mb-2  pr-2 rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" required>
                            <option value="930">
                                    930dh - 
                                    ثلاثة أشهر كاملة
                                    
                            </option>
                            <option value="250" defaultValue>
                                350dh - 
                                كل شهر   
                            </option>
                        </select> 
                    </div> */}
                    <p className="font-semibold text-lg text-center text-gray-800" dir="rtl">
                     المرجوا اختيار طريقة الإتصال بك 
                    </p>

                    <ul dir="rtl" className="text-red-primary text-base md:text-lg list-inside p-2 pt-3">
                    <li className=' flex items-start flex-row mb-1.5'>
                    <a className="btn rounded-lg bg-black
                         text-sm p-2 w-full
                         flex justify-start items-center border-red-primary" type="submit">
                        <i className="fa-solid fa-phone w-8 text-center"></i>
                        <p>عن طريق الهاتف
                        </p>
                        </a>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                    <Link to="../ThankYou"  className="btn rounded-lg bg-black
                         text-sm p-2 w-full
                         flex justify-start items-center border-red-primary" type="submit">
                        <i className="fa-brands fa-whatsapp w-8 text-center"></i>
                        <p>
                        عن طريق الواتساب 
                        </p>
                    </Link>
                    </li>
                    
                    </ul>
                    
                </form>
            </div>
    )
}
