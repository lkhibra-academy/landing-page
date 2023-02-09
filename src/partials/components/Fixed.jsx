import React, {useState} from 'react';
import wtp from '../../images/whatsapp-button.png';
import Modal from '../../utils/Modal';
import LeadForm from '../components/LeadForm';

export default function Fixed(props,src) {
    const [ModalOpen, setModalOpen] = useState(false);
    let content = {
        Arabic: {
            cta:"تسجيل",
            price:"350dh/Mois",
        },
        French: {

        }
      };
    
      props.language === "Arabic"
        ? (content = content.Arabic)
        : (content = content.French);
return (
    <section>
    {/* Buttom Bar */}
    <div className='fixed bottom-0 mx-auto px-2 sm:px-6
    bg-white h-16 flex flex-row justify-around items-center pb-3 pt-2
    border-t md:hidden w-full z-50
    '>
        <div className="max-w-xl flex flex-row w-full ">
            <p className='text-lg font-medium text-gray-800 mb-0 mr-2 ml-6 flex-none
            text-center flex items-center'>{content.price}</p>
        <a onClick={(e) => { e.preventDefault(); e.stopPropagation(); setModalOpen(true); }} 
                        aria-controls="modal"
                        className="btn
                        ml-2 mr-4 p-2.5 bg-red-primary flex-initial
                        text-white text-center w-full h-10
                        flex justify-around items-center 
                        " 
                        type="submit">
                    {content.cta}
        </a>
        </div>
    </div>
    {/* Whatsapp BTN */}
        <a href="https://api.whatsapp.com/send?phone=212708983350" className="whatsapp-button z-50" 
            target="_blank" style={{
                position: 'fixed',
                right: '15px',
                bottom: '70px'
            }} 
            onClick="fbq('track', 'Contact')">
                <img src={wtp}/>
        </a>
    {/* Modal */}
        <Modal id="modal" ariaLabel="modal-headline" show={ModalOpen} handleClose={() => setModalOpen(false)}>
                <div className="relative ">
                <LeadForm src={src}/>
                </div>
        </Modal> 
    </section>
   
);
}