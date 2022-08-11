import axios from 'axios'
import Cleave from 'cleave.js/react'
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ma'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout() {
    // const [ok, setOk] = useState(false)
    let navigate = useNavigate();
    const [err, setErr] = useState(false)
    /** @type {React.MutableRefObject<HTMLInputElement>} */
    const fullName = useRef()
    /** @type {React.MutableRefObject<HTMLInputElement>} */
    const email = useRef()
    /** @type {React.MutableRefObject<HTMLFormElement>} */
    const form = useRef()
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
                phone: phone
            }
        ).then((rep) => {
            if(rep.data.ok){
                fbq('track', 'Lead');
                navigate('/thanks');
            }else{
                setErr(true)
            }
        }).catch(() => {
            setErr(true)
        })
    }
    return (
        // <div className="max-w-lg px-4 mx-4 lg:px-8 rounded-lg border border-gray-200 shadow-md p-8 m-2">
            <form ref={form} className="grid grid-cols-6 gap-4" dir="ltr">
                <div className={`${err?'':'hidden'} col-span-6 text-center p-[20px] bg-red-600 text-white w-full mb-[15px]`}>
                    An unexpected error occurred.
                </div>
                <div className="col-span-6">
                    <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="name">
                         <span>Full Name</span><span>الإسم الكامل</span>
                    </label>
                    <input ref={fullName} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="text" id="name" required/>
                </div>
                <div className="col-span-6">
                    <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="phone">
                        <span>Phone</span><span>الهاتف</span>
                    </label>
                    <Cleave onChange={ev => setPhone(ev.target.rawValue)} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" options={{phone: true, phoneRegionCode: 'MA',prefix:'+212'}} required/>
                </div>
                <div className="col-span-6">
                    <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="email">
                         <span>Email</span><span>البريد الإلكتروني</span>
                    </label>
                    <input ref={email} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="email" id="email" required/>
                </div>
                
                <div className="col-span-6 flex justify-between">
                <div className="flex flex-row justify-between items-center">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 rounded border-gray-500 focus:ring-blue-500 focus:ring-2 " required/>
                    <p className="md:text-right text-center font-semibold text-sm" dir="rtl">موافق</p>
                </div>
                <p className="md:text-right text-center font-light text-base" dir="rtl"><span className='text-red-primary text-base first-letter:font-semibold'>  *  </span> ثمن التدريب هو :<span className='dir="rtl"'> 789 درهم </span></p>
                </div>
                <div className="col-span-6">
                    <button onClick={clickHandler} className="rounded-lg bg-black text-lg font-light p-2.5 text-white bg-red-primary w-full block" type="submit">
                    تسجيل
                    </button>
                </div>
            </form>
        // </div>
    )
}

export default Checkout