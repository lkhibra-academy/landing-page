import React, { useState } from 'react';
import Modal from '../utils/Modal';
import LeadForm from './LeadForm';

import HeroImage from '../images/hero-image.png';
import Button1 from './Button1';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-red-600 p-3 h-56">
      <button className=" p-3 bg-white shadow-md" 
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} 
      aria-controls="modal"
      >wrek hna</button>
      
      <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
        <div className="relative ">
          <LeadForm className=''/>
        </div>
      </Modal>
    </section>
  );
}

export default HeroHome;