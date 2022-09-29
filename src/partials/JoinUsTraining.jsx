import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../utils/Modal';
import LeadForm from './LeadForm';

export default function JoinUsTraining() {
    const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
      <section className="relative ">
          <div className=" flex flex-col items-center max-w-6xl mx-auto px-5 sm:px-6 py-8 ">
              <div className="flex flex-col w-full prose text-left max-w-max lg:max-w-2xl ">
                  <div dir='rtl' className="w-full mx-auto text-center">
                      <h1 className='h1 mb-4'>Join Us now </h1>
                      <p className='text-xl font-normal'>أكاديمية اونلاين متخصصة في التدريبات عن بعد في مجالات البرمجة والتصم
                      </p>
                  </div>
              </div>
              <div class="flex flex-wrap justify-center mt-8 gap-4">
                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} 
                        aria-controls="modal"
                        class="block w-full px-12 py-3 text-base font-medium text-white bg-red-primary rounded shadow sm:w-auto " >
                    Get Started
                    </button>  
                </div>
          </div>
           <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
                <div className="relative ">
                <LeadForm />
                </div>
            </Modal>
      </section>
    );
}



                    
