import React,{useState,useRef} from 'react';
import axios from 'axios';
import Header from '../partials/components/Header';
import Footer from '../partials/components/Footer';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import Modal from '../utils/Modal';
import ContactForm from '../partials/components/ContactForm';


export default function Checkout() {
    const loc=useLocation();
    let navigate = useNavigate();
    const price=loc.state?.price ?? 0;
    const [ModalOpen, setModalOpen] = useState(false);
    /** @type {React.MutableRefObject<HTMLFormElement>} */
    const form = useRef();
    const id=loc.state?.id ?? "";
    function clickHandler(e) {
        axios.post(
            'https://lkhibra.alwaysdata.net/moreinfo.php'
            ,{
                id,
                contact:"PAYNOW",
            }
        ).then((rep) => {
            if(rep.data.ok){
                navigate('/Payment',{state:{price:price}})
            }else{
                setErr(true)
            }
        }).catch(() => {
            setErr(true)
        })
    }
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
        <section className='flex flex-col min-h-screen overflow-hidden mb-10'>
            <div className="relative mx-auto max-w-screen-2xl">
                <div className='flex justify-center flex-col pt-8 bg-white md:py-10'>
                <p className="font-bold md:text-4xl text-xl text-center pb-5 text-red-primary" dir="rtl">مرحبا بك في تدريب الخبرة فالبرمجة</p>
                <div className="max-w-lg md:mx-auto mx-3 rounded-lg border border-gray-200 shadow-md ">
                    {/* Head */}
                    {/* <p className="p-3 font-semibold text-lg md:text-2xl text-right border-b text-gray-900">لقد تم التوصل بطلبك </p> */}
                    {/* Main */}
                    <ul dir="rtl" className="text-gray-700 text-base md:text-lg list-inside p-2 pt-3">
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-regular fa-calendar-check w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>
                        سوف تبدأ الحصص يوم الثلاثاء 7 مارس 
                        </p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-regular fa-clock w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>
                        توقيت حصص البرمجة : كل ثلاثاء 20h
                        </p>
                        </div>
                    </li>
                    <li className=' flex items-start flex-row mb-1.5'>
                        <i className="fa-regular fa-clock w-8 p-1 ml-1 text-center"></i>
                        <div className=''>
                        <p>
                        توقيت حصص Soft Skills : نهاية الأسبوع كل 15 يوم 
                        </p>
                        </div>
                    </li>
                    </ul>
                    {/* Foot */}
                    
                </div>
                <div>
                    <div className="flex justify-between flex-col p-2 space-y-3" dir="rtl">
                    <p className="mt-2 font-semibold text-base md:text-2xl text-center text-gray-800">
                    هل تريد دفع الأن او مازلت تحتاج المزيد من المعلومات ؟
                    </p>
                    <div className=' mx-auto max-w-none  text-sm
                            flex justify-around items-center flex-row 
                             w-full px-5 lg:text-lg
                            '>
                                {/* (e) => {  } */}
                        <a onClick={ clickHandler} 
                        // onClick={(e) => {e.preventDefault(); e.stopPropagation(); setModalOpen(true); }}
                           className="btn text-white bg-red-primary w-full px-2"> 
                               دفع الأن                        
                        </a>
                        <a onClick={(e) => {e.preventDefault(); e.stopPropagation(); setModalOpen(true); }}
                            className="btn text-red-primary border border-red-primary w-full 
                        px-2 mr-4">
                                        أريد معلومات أكثر 
                         </a>
                    </div>

                    </div>
                </div>
            </div>
                    </div>
        </section>
        </main>
  
        {/*  Site footer */}
        <Footer />

        {/* Modal */}
        <Modal id="modal" ariaLabel="modal-headline" show={ModalOpen} handleClose={() => setModalOpen(false)}>
                <div className="relative ">
                    <ContactForm />
                </div>
        </Modal> 
      </div>
    )
}