import React from 'react';
import wtp from '../../images/whatsapp-button.png';


export default function Fixed() {
return (
<div className='fixed bottom-0 mx-auto px-0 sm:px-6
    bg-white h-16 flex flex-row justify-around items-center w-full
    border-t
    '>
        <div className=' ml-2'>
            <p className='text-xl font-medium text-gray-800 mb-0'>222dh/Mois</p>
        </div>
        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} 
                        aria-controls="modal"
                        className="rounded-lg text-lg font-normal mx-2 p-2.5 bg-red-primary text-white block text-center w-full h-10" 
                        type="submit">
                    تسجيل
        </button>
        <a href="https://api.whatsapp.com/send?phone=212708983350" className="whatsapp-button z-50" 
        target="_blank" style={{
            position: 'fixed',
            right: '15px',
            bottom: '70px'
        }} 
        onClick="fbq('track', 'Contact')">
            <img src={wtp}/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=212708983350" className="whatsapp-button z-50" 
        target="_blank" style={{
            position: 'fixed',
            right: '82px',
            bottom: '70px'
        }} 
        onClick="fbq('track', 'Contact')">
            <img src={wtp}/>
        </a>
    </div>
   
);
}