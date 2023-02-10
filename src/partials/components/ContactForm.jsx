import axios from 'axios'
import Cleave from 'cleave.js/react'
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ma'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ContactForm() {
    // const [ok, setOk] = useState(false)
    let navigate = useNavigate();
    const [err, setErr] = useState(false)
    
    return (
            <div className="max-w-lg p-4 mx-4 lg:px-8 rounded-lg border border-gray-200 shadow-md m-2 bg-white">
                <form ref={ContactForm} className="">
                    
                    <p className="font-semibold text-lg text-center text-gray-800" dir="rtl">
                     المرجوا اختيار طريقة الإتصال بك 
                    </p>

                    <ul dir="rtl" className="text-red-primary text-base md:text-lg list-inside p-2 pt-3">
                    <li className=' flex items-start flex-row mb-1.5'>
                    <a onClick={clickHandler} className="btn rounded-lg bg-black
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
