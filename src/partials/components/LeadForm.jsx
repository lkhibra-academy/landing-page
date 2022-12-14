import axios from 'axios'
import Cleave from 'cleave.js/react'
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ma'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LeadForm({src}) {
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
                training: training.current.value,
                traffic: traffic.current.value,
            }
        ).then((rep) => {
            if(rep.data.ok){
                fbq('track', 'Lead');
                navigate('/ThankYou',{state:{price:offer.current.value}});
            }else{
                setErr(true)
            }
        }).catch(() => {
            setErr(true)
        })
    }
    return (
            <div className="max-w-lg px-4 mx-4 lg:px-8 rounded-lg border border-gray-200 shadow-md p-8 m-2 bg-white">
                <form ref={form} className="space-y-3">
                    <div className={`${err?'':'hidden'}  text-center p-[20px] bg-red-600 text-white w-full mb-[15px]`}>
                        An unexpected error occurred.
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="name">
                            <span>Full Name</span><span>?????????? ????????????</span>
                        </label>
                        <input ref={fullName} maxLength='30' className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="text" id="name" required/>
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="phone">
                            <span>Phone</span><span>????????????</span>
                        </label>
                        <Cleave onChange={ev => setPhone(ev.target.rawValue)} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" options={{phone: true, phoneRegionCode: 'MA'}} required />
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="email">
                            <span>Email</span><span>???????????? ????????????????????</span>
                        </label>
                        <input ref={email} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="email" id="email" required/>
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="email">
                            <span>Choose the Training</span><span>???????? ?????????????? </span>
                        </label>
                        <select id="training" ref={training} class="mb-2  pr-2 rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" required>
                            {/* <option value="Programming" >
                            </option> */}
                            <option value="Programming">Programming Training</option>
                        </select> 
                    </div>
                    <div className="">
                        <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="email">
                            <span>Choose the offer</span><span>???????? ?????????? </span>
                        </label>
                        <select id="offer" ref={offer} class="mb-2  pr-2 rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" required>
                            <option value="789">
                                    789dh - 
                                    ?????????? ???????? ??????????
                                    
                            </option>
                            <option value="299" selected>
                                299dh - 
                                 ?????? ?????? 
                            </option>
                        </select> 
                    </div>
                        <select id="traffic" ref={traffic} class="hidden">
                            <option value={src} selected>
                            </option>
                        </select> 
                    <div className="">
                        <button onClick={clickHandler} className="rounded-lg bg-black text-lg font-light p-2.5 text-white bg-red-primary w-full block" type="submit">
                        ??????????
                        </button>
                    </div>
                </form>
            </div>
    )
}
