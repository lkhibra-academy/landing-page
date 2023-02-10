import axios from 'axios'
import Cleave from 'cleave.js/react'
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ma'
import React, { useRef, useState } from 'react'
import { useNavigate,useLocation  } from 'react-router-dom'
import Modal from '../../utils/Modal';
import PhoneForm from '../components/PhoneForm';

export default function ContactForm() {
    // const [ok, setOk] = useState(false)
    const [ModalOpen, setModalOpen] = useState(false);

    // const id=loc.state?.id ?? "";
    let navigate = useNavigate();
    const [err, setErr] = useState(false);    
    /** @type {React.MutableRefObject<HTMLFormElement>} */
    const form = useRef();
    const loc=useLocation();
    const id=loc.state?.id ?? "";
    
    function clickHandler(e) {
        axios.post(
            'https://lkhibra.alwaysdata.net/moreinfo.php'
            ,{
                id,
                contact:e,
            }
        ).then((rep) => {
            if(rep.data.ok){
                navigate('../ThankYou');
                
            }else{
                setErr(true)
            }
        }).catch(() => {
            setErr(true)
        })
    }
    return (
            <div className="max-w-lg p-4 mx-4 lg:px-8 rounded-lg border border-gray-200 shadow-md m-2 bg-white">
                <div className="">
                    <p className="font-semibold text-lg text-center text-gray-800" dir="rtl">
                     المرجوا اختيار طريقة الإتصال بك 
                    </p>

                    <ul dir="rtl" className="text-red-primary text-base md:text-lg list-inside p-2 pt-3">
                    <li className=' flex items-start flex-row mb-1.5'>
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setModalOpen(true); }}
                    className="btn rounded-lg bg-black
                         text-sm p-2 w-full
                         flex justify-start items-center border-red-primary" type="submit">
                        <i className="fa-solid fa-phone w-8 text-center"></i>
                        <p>عن طريق الهاتف
                        </p>
                        </button>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                    <button onClick={()=>clickHandler("WA")}  className="btn rounded-lg bg-black
                         text-sm p-2 w-full
                         flex justify-start items-center border-red-primary" type="submit">
                        <i className="fa-brands fa-whatsapp w-8 text-center"></i>
                        <p>
                        عن طريق الواتساب 
                        </p>
                    </button>
                    </li>
                    
                    </ul>
                    
                </div>
        {/* Modal */}
        <Modal id="modal" ariaLabel="modal-headline" show={ModalOpen} handleClose={() => setModalOpen(false)}>
                <div className="relative ">
                    <PhoneForm/>
                </div>
        </Modal>
            </div>
    )
}
