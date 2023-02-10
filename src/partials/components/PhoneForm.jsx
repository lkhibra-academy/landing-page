import axios from 'axios'
import Cleave from 'cleave.js/react'
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ma'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../../utils/Modal';

export default function ContactForm() {
    // const [ok, setOk] = useState(false)
    const [ModalOpen, setModalOpen] = useState(false);

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
                    <p className="font-semibold text-lg text-center text-gray-800" dir="rtl">
                    متى تريد الإتصال بك ؟ 
                    </p>

                    <ul dir="rtl" className="text-red-primary text-base md:text-lg list-inside p-2 pt-3">
                    <li className=' flex items-start flex-row mb-1.5'>
                    <Link to="../ThankYou"
                    className="btn rounded-lg bg-black
                         text-sm p-2 w-full
                         flex justify-start items-center border-red-primary" type="submit">
                        <i className="fa-solid fa-phone w-8 text-center"></i>
                        <p>صباحا   
                        </p>
                        </Link>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                    <Link to="../ThankYou"  className="btn rounded-lg bg-black
                         text-sm p-2 w-full
                         flex justify-start items-center border-red-primary" type="submit">
                        <i className="fa-solid fa-phone w-8 text-center"></i>
                        <p>
                        بعد الضهر 
                        </p>
                    </Link>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                    <Link to="../ThankYou"  className="btn rounded-lg bg-black
                         text-sm p-2 w-full
                         flex justify-start items-center border-red-primary" type="submit">
                        <i className="fa-solid fa-phone w-8 text-center"></i>
                        <p>
                        مساءا   
                        </p>
                    </Link>
                    </li>
                    
                    </ul>
                    
                </form>
        {/* Modal */}
        <Modal id="modal" ariaLabel="modal-headline" show={ModalOpen} handleClose={() => setModalOpen(false)}>
                <div className="relative ">
                    
                </div>
        </Modal>
            </div>
    )
}
