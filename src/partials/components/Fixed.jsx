import React, {useState} from 'react';
import wtp from '../../images/whatsapp-button.png';
import Modal from '../../utils/Modal';
import LeadForm from '../components/LeadForm';

export default function Fixed(props,src) {
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    let content = {
        Arabic: {
            cta:"تسجيل",
            price:"222dh/Mois",
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
    <div className='fixed bottom-0 mx-auto px-0 sm:px-6
    bg-white h-16 flex flex-row justify-around items-center w-full pb-3 pt-2
    border-t md:hidden
    '>
        <div className=' ml-2'>
            <p className='text-xl font-medium text-gray-800 mb-0 mr-2 ml-4'>{content.price}</p>
        </div>
        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} 
                        aria-controls="modal"
                        className="rounded-lg text-lg font-normal ml-2 mr-4 p-2.5 bg-red-primary 
                        text-white text-center w-full h-10
                        flex justify-around items-center
                        " 
                        type="submit">
                    {content.cta}
        </button>
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
        <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
                <div className="relative ">
                <LeadForm src={src}/>
                </div>
        </Modal> 
    </section>
   
);
}